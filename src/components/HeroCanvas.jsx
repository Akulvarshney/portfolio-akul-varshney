import React, { useEffect } from 'react';
import * as THREE from 'three';
import { useTheme } from '../hooks/useTheme';

export default function HeroCanvas() {
  const { mobileLite } = useTheme();

  useEffect(() => {
    if (mobileLite) return undefined;
    const canvas = document.getElementById('heroCanvas');
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 80;

    /* Particles */
    const N = 1800;
    const geo = new THREE.BufferGeometry();
    const pos = new Float32Array(N * 3);
    const sizes = new Float32Array(N);
    for (let i = 0; i < N; i++) {
        pos[i * 3] = (Math.random() - 0.5) * 320;
        pos[i * 3 + 1] = (Math.random() - 0.5) * 200;
        pos[i * 3 + 2] = (Math.random() - 0.5) * 180;
        sizes[i] = Math.random() * 1.8 + 0.4;
    }
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geo.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    const mat = new THREE.ShaderMaterial({
        uniforms: { time: { value: 0 }, mouse: { value: new THREE.Vector2(0, 0) } },
        vertexShader: `
      attribute float size;
      uniform float time;
      uniform vec2 mouse;
      varying float vAlpha;
      void main(){
        vec3 p=position;
        float dist=length(p.xy-mouse*80.0);
        p.z+=sin(time*0.4+p.x*0.04)*3.0;
        p.y+=cos(time*0.3+p.z*0.03)*2.0;
        float rep=smoothstep(60.0,0.0,dist);
        p.z+=rep*12.0;
        vAlpha=0.25+rep*0.5+sin(time*0.5+p.x*0.1)*0.1;
        gl_PointSize=size*(1.0+rep*2.0);
        gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.0);
      }
    `,
        fragmentShader: `
      varying float vAlpha;
      void main(){
        float d=length(gl_PointCoord-vec2(0.5));
        if(d>0.5)discard;
        float a=(1.0-d*2.0)*vAlpha;
        gl_FragColor=vec4(0.02,0.71,0.83,a);
      }
    `,
        transparent: true, depthWrite: false, blending: THREE.AdditiveBlending
    });

    const points = new THREE.Points(geo, mat);
    scene.add(points);

    /* Connections */
    const lineGeo = new THREE.BufferGeometry();
    const linePos = [];
    const maxConns = 200;
    let connCount = 0;
    for (let i = 0; i < N && connCount < maxConns; i++) {
        for (let j = i + 1; j < N && connCount < maxConns; j++) {
            const dx = pos[i * 3] - pos[j * 3], dy = pos[i * 3 + 1] - pos[j * 3 + 1], dz = pos[i * 3 + 2] - pos[j * 3 + 2];
            if (Math.sqrt(dx * dx + dy * dy + dz * dz) < 28) {
                linePos.push(pos[i * 3], pos[i * 3 + 1], pos[i * 3 + 2], pos[j * 3], pos[j * 3 + 1], pos[j * 3 + 2]);
                connCount++;
            }
        }
    }
    lineGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(linePos), 3));
    const lineMat = new THREE.LineBasicMaterial({ color: 0x06b6d4, transparent: true, opacity: 0.06 });
    scene.add(new THREE.LineSegments(lineGeo, lineMat));

    let mox = 0, moy = 0;
    const onMouseMove = (e) => { 
        mox = (e.clientX / window.innerWidth) * 2 - 1; 
        moy = -(e.clientY / window.innerHeight) * 2 + 1; 
    };
    document.addEventListener('mousemove', onMouseMove);

    const onResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onResize);

    let t = 0;
    let reqId;
    function animate() {
        reqId = requestAnimationFrame(animate);
        t += 0.008;
        mat.uniforms.time.value = t;
        mat.uniforms.mouse.value.set(mox, moy);
        points.rotation.y = t * 0.04;
        points.rotation.x = Math.sin(t * 0.02) * 0.08;
        camera.position.x += (-mox * 8 - camera.position.x) * 0.04;
        camera.position.y += (moy * 5 - camera.position.y) * 0.04;
        renderer.render(scene, camera);
    }
    animate();

    return () => {
        cancelAnimationFrame(reqId);
        window.removeEventListener('resize', onResize);
        document.removeEventListener('mousemove', onMouseMove);
        renderer.dispose();
        geo.dispose();
        mat.dispose();
        lineGeo.dispose();
        lineMat.dispose();
    };
  }, [mobileLite]);

  if (mobileLite) return null;

  return <canvas id="heroCanvas"></canvas>;
}

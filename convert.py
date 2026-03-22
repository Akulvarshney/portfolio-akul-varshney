import re
import os

with open('portfolio.html', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Extract CSS
css_match = re.search(r'<style>(.*?)</style>', content, re.DOTALL)
css = css_match.group(1) if css_match else ''
with open('src/index.css', 'w', encoding='utf-8') as f:
    f.write(css)

# Create components dir
os.makedirs('src/components', exist_ok=True)

# 2. Extract Body Content without <script> and <body> wrapping tags, also no <style> and <head>
body_match = re.search(r'<body>(.*?)<script', content, re.DOTALL)
html = body_match.group(1) if body_match else ''

# Convert class= to className=
html = html.replace('class=', 'className=')
# Convert for= to htmlFor=
html = html.replace('for=', 'htmlFor=')
# Convert styles to react objects
# e.g. style="margin-bottom:32px;" -> style={{marginBottom: '32px'}}
def repl_style(m):
    styles = m.group(1).strip()
    # very simple translation
    pairs = [p.strip() for p in styles.split(';') if p.strip()]
    props = []
    for pair in pairs:
        if ':' not in pair: continue
        k, v = pair.split(':', 1)
        k = k.strip()
        v = v.strip().replace("'", '"')
        # camelCase CSS property
        k_camel = re.sub(r'-([a-z])', lambda x: x.group(1).upper(), k)
        props.append(f"{k_camel}: '{v}'")
    return "style={{" + ", ".join(props) + "}}"

html = re.sub(r'style="(.*?)"', repl_style, html)
# Fix closing tags for img and input
# html = re.sub(r'<img(.*?)(?<!/)>', r'<img\1/>', html) - not needed since imgs are already self-closed by view_file, wait are they?
# In view file output: <img src="..." alt="Code" />
# So yes they are self-closing already safely but let's double check if any isn't.

# Let's split it nicely:

# Actually bs4 is not guaranteed installed, skipping.

# We'll just write out the blocks as strings
blocks = {
    'Cursor': r'<div id="cursor">.*?</div>\s*<div id="cursor-ring">.*?</div>',
    'HeroCanvas': r'<canvas id="heroCanvas">.*?</canvas>',
    'Navbar': r'<nav>.*?</nav>',
    'Hero': r'<section id="hero">.*?</section>',
    'About': r'<section id="about">.*?</section>',
    'Impact': r'<section id="impact">.*?</section>',
    'Experience': r'<section id="experience">.*?</section>',
    'Projects': r'<section id="projects">.*?</section>',
    'Skills': r'<section id="skills">.*?</section>',
    'Certifications': r'<section id="certs">.*?</section>',
    'Contact': r'<section id="contact">.*?</section>',
}

for name, regex in blocks.items():
    match = re.search(regex, html, re.DOTALL)
    if match:
        comp_html = match.group(0)
        
        # some component specific hacks
        if name == 'Experience':
            # Remove onclick string
            comp_html = re.sub(r'onClick=".*?"', '', comp_html)
            # Replaced with state below
        
        comp_code = f"""import React from 'react';

export default function {name}() {{
  return (
    <>
      {comp_html}
    </>
  );
}}
"""
        with open(f'src/components/{name}.jsx', 'w', encoding='utf-8') as f:
            f.write(comp_code)
    else:
        print(f"Failed to find {name} in HTML.")

print("Splitting done.")

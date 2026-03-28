import React, { useState } from 'react';
import { Button, Divider, Drawer, Space } from 'antd';
import { MenuOutlined, MoonOutlined, SunOutlined } from '@ant-design/icons';
import resume from '../assets/resume.pdf';
import { useTheme } from '../hooks/useTheme';

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#impact', label: 'Impact' },
  { href: '#experience', label: 'Work' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Stack' },
  { href: '#certs', label: 'Certs' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const { dark, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <>
      <nav className="tp-nav">
        <a href="#hero" className="tp-nav__logo">
          <span className="tp-nav__logo-mark" aria-hidden="true">
            ◈
          </span>
          the<span className="dot">Akul</span>Varshney
        </a>

        <ul className="tp-nav__links">
          {LINKS.map(({ href, label }) => (
            <li key={href}>
              <a href={href}>{label}</a>
            </li>
          ))}
        </ul>

        <Space className="tp-nav__actions" size={10} align="center">
          <Button
            type="text"
            shape="circle"
            icon={dark ? <SunOutlined /> : <MoonOutlined />}
            onClick={toggleTheme}
            aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}
          />
          <Button
            className="tp-nav__action--desktop"
            href={resume}
            download="Akul_Varshney_Resume.pdf"
            target="_self"
          >
            Resume
          </Button>
          <Button className="tp-nav__action--desktop" type="primary" href="mailto:akulv.work@gmail.com">
            Contact
          </Button>
          <Button
            className="tp-nav__menu-btn"
            type="default"
            icon={<MenuOutlined />}
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          />
        </Space>
      </nav>

      <Drawer
        title={
          <span style={{ fontFamily: 'var(--mono)', letterSpacing: '0.08em' }}>NAVIGATE</span>
        }
        placement="right"
        onClose={close}
        open={open}
        size={280}
        styles={{ body: { paddingTop: 8 } }}
      >
        <Space orientation="vertical" size="small" style={{ width: '100%' }}>
          {LINKS.map(({ href, label }) => (
            <Button
              key={href}
              type="text"
              block
              href={href}
              onClick={close}
              className="tp-nav__drawer-link"
            >
              {label}
            </Button>
          ))}
          <Divider plain style={{ margin: '12px 0 8px' }} />
          <Button block href={resume} download="Akul_Varshney_Resume.pdf" target="_self" onClick={close}>
            Resume
          </Button>
          <Button type="primary" block href="mailto:akulv.work@gmail.com" onClick={close}>
            Contact
          </Button>
        </Space>
      </Drawer>
    </>
  );
}

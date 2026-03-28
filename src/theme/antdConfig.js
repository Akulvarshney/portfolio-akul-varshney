import { theme } from 'antd';

export function getAntdTheme(isDark) {
  const base = {
    token: {
      colorPrimary: '#22d3ee',
      colorInfo: '#c084fc',
      colorSuccess: '#34d399',
      colorWarning: '#fbbf24',
      borderRadius: 10,
      fontFamily: "'Outfit', system-ui, -apple-system, sans-serif",
      fontFamilyCode: "'JetBrains Mono', ui-monospace, monospace",
      fontSize: 15,
      lineHeight: 1.55,
    },
  };

  if (isDark) {
    return {
      ...base,
      algorithm: theme.darkAlgorithm,
      token: {
        ...base.token,
        colorBgElevated: 'rgba(15, 23, 42, 0.94)',
        colorBgContainer: 'rgba(15, 23, 42, 0.65)',
      },
      components: {
        Button: {
          primaryShadow: '0 0 28px rgba(34, 211, 238, 0.28)',
          fontWeight: 600,
        },
        Card: {
          colorBorderSecondary: 'rgba(34, 211, 238, 0.15)',
        },
        Carousel: {
          dotWidth: 8,
          dotHeight: 8,
        },
        Drawer: {
          colorBgElevated: 'rgba(10, 12, 22, 0.98)',
        },
      },
    };
  }

  return {
    ...base,
    algorithm: theme.defaultAlgorithm,
    token: {
      ...base.token,
      colorPrimary: '#0e7490',
      colorBgContainer: '#ffffff',
    },
    components: {
      Button: { fontWeight: 600 },
    },
  };
}

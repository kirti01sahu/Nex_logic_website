import { useEffect } from 'react';
import { useTheme } from './ThemeContext';

export const useFavicon = () => {
  const { theme } = useTheme();

  useEffect(() => {
    const favicon = document.getElementById('favicon');
    if (favicon) {
      favicon.href = '/favicon.ico';
    }
  }, [theme]);
};

import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const TextLogo = ({
  to = '/',
  wrapperClassName = 'flex items-center gap-3 group',
  logoClassName = 'h-10 md:h-12 w-auto object-contain transition-all duration-300'
}) => {
  const { theme } = useTheme();

  return (
    <Link to={to} className={wrapperClassName}>
      <img
        src={theme === 'dark' ? '/d3.png' : '/44.png'}
        alt="Nexlogic Innovation Private Limited Logo"
        className={logoClassName}
      />
    </Link>
  );
};

export default TextLogo;
import React from 'react';
import { Link } from 'react-router-dom';

const TextLogo = ({
  to = '/',
  titleClassName = 'text-lg md:text-xl font-bold tracking-wider text-charcoal dark:text-sandstone uppercase',
  taglineClassName = 'text-[10px] md:text-xs text-brown-grey dark:text-text-dark-muted italic -mt-1',
  wrapperClassName = 'flex items-center gap-3 group',
}) => {
  return (
    <Link to={to} className={wrapperClassName}>
      <div className="flex flex-col">
        <span className={titleClassName}>Nexlogic</span>
        <span className={taglineClassName}>Where innovation meets execution</span>
      </div>
    </Link>
  );
};

export default TextLogo;
import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = ({ items }) => {
  return (
    <nav aria-label="breadcrumb" className="my-3">
      <ol className="breadcrumb">
        {items.map((item, index) => (
          <li
            key={index}
            className={`breadcrumb-item ${index === items.length - 1 ? 'active' : ''}`}
            aria-current={index === items.length - 1 ? 'page' : undefined}
          >
            {index === items.length - 1 ? (
              item.label
            ) : (
              <Link to={item.href}>{item.label}</Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;

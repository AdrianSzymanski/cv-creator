import React from 'react';

import './Canvas.component.scss';

export const Canvas: React.FC = ({ children }) => (
  <div className={'c-canvas'}>
    {React.Children.map(children, child => child && (
      <div className={'c-canvas__item'}>
        {child}
      </div>
    ))}
  </div>
);

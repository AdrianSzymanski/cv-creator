import React from 'react';

import './Canvas.component.scss';

type Props = {
  children: React.ReactNode;
}

export const Canvas: React.FC<Props> = ({ children }) => (
  <div className={'c-canvas'}>
    {React.Children.map(children, child => child && (
      <div className={'c-canvas__item'}>
        {child}
      </div>
    ))}
  </div>
);

import React from 'react';

import './Stack.component.scss';

export type StackProps = {
  stackDirection?: 'horizontal' | 'vertical';
  columnCount?: number;
}

export const Stack: React.FC<StackProps> = ({
  stackDirection = 'vertical',
  columnCount = 1,
  children,
}) => (
  <div
    className={`c-stack c-stack--direction-${stackDirection}`}
    style={{ '--stack-column-count': String(columnCount) } as React.CSSProperties}
  >
    {React.Children.map(children, child => child && (
      <div className={'c-stack__item'}>
        {child}
      </div>
    ))}
  </div>
);

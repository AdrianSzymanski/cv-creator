import React from 'react';

import './List.component.scss';

export const List: React.FC = ({ children }) => (
  <ul className={'c-list'}>
    {children}
  </ul>
);

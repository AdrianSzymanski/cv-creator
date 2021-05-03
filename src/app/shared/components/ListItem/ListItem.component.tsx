import React from 'react';

import './ListItem.component.scss';

export const ListItem: React.FC = ({ children }) => (
  <li className={'c-list-item'}>
    {children}
  </li>
);

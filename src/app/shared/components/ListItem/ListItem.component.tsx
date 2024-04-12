import React from 'react';

import './ListItem.component.scss';

type Props = {
  children: React.ReactNode;
}

export const ListItem: React.FC<Props> = ({ children }) => (
  <li className={'c-list-item'}>
    {children}
  </li>
);

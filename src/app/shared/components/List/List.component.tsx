import React from 'react';

import './List.component.scss';

type Props = {
  children: React.ReactNode;
}

export const List: React.FC<Props> = ({ children }) => (
  <ul className={'c-list'}>
    {children}
  </ul>
);

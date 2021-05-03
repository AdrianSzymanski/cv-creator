import React from 'react';

import './Badge.component.scss';

type Props = {
  label: string;
}

export const Badge: React.FC<Props> = ({ label }) => (
  <div className={'c-badge'}>
    {label}
  </div>
);

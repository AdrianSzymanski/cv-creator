import React from 'react';

import './Footer.component.scss';

type Props = {
  text: string;
};

export const Footer: React.FC<Props> = ({ text }) => (
  <div className={'c-footer'}>
    {text}
  </div>
);

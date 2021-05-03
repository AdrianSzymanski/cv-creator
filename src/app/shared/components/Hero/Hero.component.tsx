import React from 'react';

import './Hero.component.scss';

type Props = {
  title: string;
  subtitle: string;
}

export const Hero: React.FC<Props> = ({ title, subtitle }) => (
  <div className={'c-hero'}>
    <h1 className={'c-hero__title'}>
      {title}
    </h1>
    <h2 className={'c-hero__subtitle'}>
      {subtitle}
    </h2>
  </div>
);

import React from 'react';

import './Headline.component.scss';

type Props = {
  text: string;
}

export const Headline: React.FC<Props> = ({ text }) => (
  <h3 className={'c-headline'}>
    <div className={'c-headline__inner'}>
      {text}
    </div>
  </h3>
);

import React from 'react';

import './ParagraphGroup.component.scss';

type Props = {
  headline: React.ReactNode;
  text: React.ReactNode;
}

export const ParagraphGroup: React.FC<Props> = ({ headline, text }) => (
  <div className={'c-paragraph-group'}>
    <p className={'c-paragraph-group__headline'}>
      {headline}
    </p>
    <div className={'c-paragraph-group__text'}>
      {text}
    </div>
  </div>
);

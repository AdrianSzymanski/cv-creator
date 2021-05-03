import React from 'react';

import './Sheet.component.scss';

type Props = {
  promo?: React.ReactNode;
  content?: React.ReactNode;
}

export const Sheet: React.FC<Props> = ({ promo, content }) => (
  <div className={'c-sheet'}>
    <div className={'c-sheet__promo'}>
      {promo}
    </div>
    <div className={'c-sheet__content'}>
      {content}
    </div>
  </div>
);

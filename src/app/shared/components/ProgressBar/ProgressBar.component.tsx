import React from 'react';

import './ProgressBar.component.scss';

export type ProgressBarProps = {
  value: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ value }) => (
  <div className={'c-progress-bar'}>
    <span
      className={'c-progress-bar__tracker'}
      style={{ width: String(value * 100 + '%') }}
    />
  </div>
);

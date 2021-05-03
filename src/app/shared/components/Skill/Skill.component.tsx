import React from 'react';
import { ProgressBar, ProgressBarProps } from '../ProgressBar';

import './Skill.component.scss';

type Props = ProgressBarProps & {
  label: string;
}

export const Skill: React.FC<Props> = ({ label, value }) => (
  <div className={'c-skill'}>
    <p className={'c-skill__name'}>
      {label}
    </p>
    <ProgressBar
      value={value}
    />
  </div>
);

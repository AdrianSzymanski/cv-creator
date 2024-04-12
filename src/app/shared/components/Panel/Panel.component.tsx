import classNames from 'classnames';
import React from 'react';

import './Panel.component.scss';

export enum PanelTheme {
  LIGHT = 'light',
  DARK = 'dark',
}

type Props = {
  theme: PanelTheme;
  children: React.ReactNode;
}

export const Panel: React.FC<Props> = ({ theme, children }) => (
  <div className={classNames('c-panel', {
    [`c-panel--theme-${theme}`]: theme,
  })}>
    {children}
  </div>
);

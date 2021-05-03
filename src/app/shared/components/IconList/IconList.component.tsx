import React from 'react';

import './IconList.component.scss';

type Props = {
  list: string[];
}

export const IconList: React.FC<Props> = ({ list }) => (
  <div className={'c-icon-list'}>
    {list.map(img => (
      <img
        className={'c-icon-list__image'}
        src={img}
        alt={''}
        key={img}
      />
    ))}
  </div>
);

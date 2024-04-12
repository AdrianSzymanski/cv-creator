import React from 'react';

import {
  Canvas,
  Panel,
  PanelTheme,
  Sheet,
} from '../../../shared/components';
import { NoirSection } from '../NoirSection';
import { NoirContent } from '../../config';

import './NoirCv.component.scss';

export const NoirCv: React.FC = () => (
  <Canvas>
    {NoirContent.coverLetter && (
      <Sheet
        promo={(
          <Panel theme={PanelTheme.DARK}>
            <div>
              <NoirSection content={NoirContent.hero} />
              <NoirSection content={NoirContent.contact} />
            </div>
          </Panel>
        )}
        content={(
          <Panel theme={PanelTheme.LIGHT}>
            <div>
              <NoirSection content={NoirContent.coverLetter} />
            </div>
            <div>
              <NoirSection content={NoirContent.footer} />
            </div>
          </Panel>
        )}
      />
    )}
    <Sheet
      promo={(
        <Panel theme={PanelTheme.LIGHT}>
          <div>
            <NoirSection content={NoirContent.hero} />
            <NoirSection content={NoirContent.contact} />
          </div>
          <div>
            <NoirSection content={NoirContent.skills} />
            <NoirSection content={NoirContent.strengths} />
            <NoirSection content={NoirContent.languages} />
            <NoirSection content={NoirContent.hobbies} />
          </div>
        </Panel>
      )}
      content={(
        <Panel theme={PanelTheme.DARK}>
          <div>
              <NoirSection content={NoirContent.about} />
              <NoirSection content={NoirContent.experience} />
              <NoirSection content={NoirContent.education} />
          </div>
          <div>
            <NoirSection content={NoirContent.footer} />
          </div>
        </Panel>
      )}
    />
  </Canvas>
);

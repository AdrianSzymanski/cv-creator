import React from 'react';

import {
  Canvas,
  Panel,
  PanelTheme,
  Sheet,
} from '../../../shared/components';
import { NoirSection } from '..';
import { content } from '../../../config/content.config';

import './NoirCv.component.scss';

// @TODO: review markup semantics.

export const NoirCv: React.FC = () => (
  <Canvas>
    {content.coverLetter && (
      <Sheet
        promo={(
          <Panel theme={PanelTheme.DARK}>
            <div>
              <NoirSection content={content.hero} />
              <NoirSection content={content.contact} />
            </div>
          </Panel>
        )}
        content={(
          <Panel theme={PanelTheme.LIGHT}>
            <div>
              <NoirSection content={content.coverLetter} />
            </div>
            <div>
              <NoirSection content={content.footer} />
            </div>
          </Panel>
        )}
      />
    )}
    <Sheet
      promo={(
        <Panel theme={PanelTheme.LIGHT}>
          <div>
            <NoirSection content={content.hero} />
            <NoirSection content={content.contact} />
          </div>
          <div>
            <NoirSection content={content.skills} />
            <NoirSection content={content.strengths} />
            <NoirSection content={content.languages} />
            <NoirSection content={content.hobbies} />
          </div>
        </Panel>
      )}
      content={(
        <Panel theme={PanelTheme.DARK}>
          <div>
            <NoirSection content={content.about} />
            <NoirSection content={content.experience} />
            <NoirSection content={content.education} />
          </div>
          <div>
            <NoirSection content={content.footer} />
          </div>
        </Panel>
      )}
    />
  </Canvas>
);

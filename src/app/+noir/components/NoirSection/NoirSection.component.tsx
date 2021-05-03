import React from 'react';

import {
  Badge,
  Footer,
  Headline,
  Hero,
  IconList,
  List,
  ListItem,
  ParagraphGroup,
  Skill,
} from 'src/app/shared/components';
import { ContentSection, CONTENT_SECTION_TYPE } from '../../../config/content.config';

type Props = {
  content: ContentSection;
};

const renderSectionContent = (content: ContentSection) => {
  switch (content.type) {
    case CONTENT_SECTION_TYPE.FOOTER:
      return (
        <Footer text={content.content} />
      );
    case CONTENT_SECTION_TYPE.HERO:
      return (
        <Hero
          title={content.name}
          subtitle={content.profession}
        />
      );
    case CONTENT_SECTION_TYPE.LIST_ICONS:
      return (
        <IconList list={content.list} />
      );
    case CONTENT_SECTION_TYPE.LIST_NESTED:
      return content.list.map(item => (
        <ParagraphGroup
          headline={item.headline}
          text={(
            <List>
              {item.content.list.map(bulletPoint => (
                <ListItem key={bulletPoint}>{bulletPoint}</ListItem>
              ))}
              {item.content?.badges && (
                <ListItem>
                  <div>
                    {item.content.badges.map(badge => (
                      <Badge
                        label={badge}
                        key={badge}
                      />
                    ))}
                  </div>
                </ListItem>
              )}
            </List>
          )}
          key={item.headline}
        />
      ));
    case CONTENT_SECTION_TYPE.LIST_SIMPLE:
      return content.list.map(item => (
        <ParagraphGroup
          headline={item.headline}
          text={(
            item.href
              ? <a href={item.href} target={'_blank'} rel="noopener noreferrer">{item.content}</a>
              : item.content
          )}
          key={item.headline}
        />
      ));
    case CONTENT_SECTION_TYPE.LIST_SKILLS:
      return content.list.map(item => (
        <Skill
          label={item.headline}
          value={item.content}
          key={item.headline}
        />
      ));
    default:
      return null;
  }
}

export const NoirSection: React.FC<Props> = ({ content }) => (
  <div>
    {content && content.label && (
      <Headline text={content.label} />
    )}
    {renderSectionContent(content)}
  </div>
);

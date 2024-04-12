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
  Stack,
} from '../../../shared/components';
import { NoirContentSection, NOIR_CONTENT_SECTION_TYPE } from '../..';

type Props = {
  content: NoirContentSection;
};

const renderSectionContent = (content: NoirContentSection) => {
  switch (content.type) {
    case NOIR_CONTENT_SECTION_TYPE.FOOTER:
      return (
        <Footer text={content.content} />
      );
    case NOIR_CONTENT_SECTION_TYPE.HERO:
      return (
        <Hero
          title={content.name}
          subtitle={content.profession}
        />
      );
    case NOIR_CONTENT_SECTION_TYPE.LIST_ICONS:
      return (
        <IconList list={content.list} />
      );
    case NOIR_CONTENT_SECTION_TYPE.LIST_NESTED:
      return (
        <Stack
          stackDirection={content.stackDirection}
          columnCount={content.columnCount}
        >
          {content.list.map(item => (
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
          ))}
        </Stack>
      );
    case NOIR_CONTENT_SECTION_TYPE.LIST_SIMPLE:
      return (
        <Stack
          stackDirection={content.stackDirection}
          columnCount={content.columnCount}
        >
          {content.list.map(item => (
            <ParagraphGroup
              headline={item.headline}
              text={(
                item.href
                  ? <a href={item.href} target={'_blank'} rel="noopener noreferrer">{item.content}</a>
                  : item.content
              )}
              key={item.headline}
            />
          ))}
        </Stack>
      );
    case NOIR_CONTENT_SECTION_TYPE.LIST_SKILLS:
      return (
        <Stack
          stackDirection={content.stackDirection}
          columnCount={content.columnCount}
        >
          {content.list.map(item => (
            <Skill
              label={item.headline}
              value={item.content}
              key={item.headline}
            />
          ))}
        </Stack>
      );
    default:
      return null;
  }
}

export const NoirSection: React.FC<Props> = ({ content }) => (
  <div>
    {content.label && (
      <Headline text={content.label} />
    )}
    {renderSectionContent(content)}
  </div>
);

// @TODO: add images as inline svg's to be able to control their color.
// @TODO: move config to +noir.

import imgAstronomy from '../../shared/images/telescope.svg';
import imgJogging from '../../shared/images/jogging.svg';
// import imgMovies from '../../shared/images/movies.svg';
import imgRollerskating from '../../shared/images/rollerskating.svg';
// import imgTaekwondo from '../../shared/images/taekwondo.svg';
import imgTravel from '../../shared/images/suitcase.svg';
import imgChess from '../../shared/images/chess.svg';
import { StackProps } from '../../shared/components';

export enum NOIR_CONTENT_SECTION_TYPE {
  FOOTER = 'footer',
  HERO = 'hero',
  LIST_ICONS = 'list-icons',
  LIST_NESTED = 'list-nested',
  LIST_SIMPLE = 'list-simple',
  LIST_SKILLS = 'list-skills',
  LIST_STRENGTHS = 'list-strengths',
};

type NoirContentBulletPointList = {
  list: string [];
  badges?: string[];
};

type NoirContentListItemBulletPoints = {
  headline: string;
  content: NoirContentBulletPointList;
};

type NoirContentListItemProgressBar = {
  headline: string;
  content: number;
};

type NoirContentListItemSimple = {
  headline: string;
  content: React.ReactNode;
  href?: string;
};

type NoirContentSectionFooter = {
  type: NOIR_CONTENT_SECTION_TYPE.FOOTER;
  label?: string;
  content: string;
};

type NoirContentSectionHero = {
  type: NOIR_CONTENT_SECTION_TYPE.HERO;
  label?: string;
  name: string;
  profession: string;
};

type NoirContentSectionListIcons = {
  type: NOIR_CONTENT_SECTION_TYPE.LIST_ICONS;
  label?: string;
  list: string[];
};

type NoirContentSectionListNested = {
  type: NOIR_CONTENT_SECTION_TYPE.LIST_NESTED;
  label?: string;
  list: NoirContentListItemBulletPoints[];
} & StackProps;

type NoirContentSectionListSimple = {
  type: NOIR_CONTENT_SECTION_TYPE.LIST_SIMPLE;
  label?: string;
  list: NoirContentListItemSimple[];
} & StackProps;

type NoirContentSectionListSkills = {
  type: NOIR_CONTENT_SECTION_TYPE.LIST_SKILLS;
  label?: string;
  list: NoirContentListItemProgressBar[];
} & StackProps;

export type NoirContentSection =
  | NoirContentSectionFooter
  | NoirContentSectionHero
  | NoirContentSectionListIcons
  | NoirContentSectionListSimple
  | NoirContentSectionListSkills
  | NoirContentSectionListNested
  ;

type NoirContentProps = {
  about: NoirContentSection;
  contact: NoirContentSection;
  coverLetter?: NoirContentSection;
  education: NoirContentSection;
  experience: NoirContentSection;
  footer: NoirContentSection;
  hero: NoirContentSection;
  hobbies: NoirContentSection;
  languages: NoirContentSection;
  skills: NoirContentSection;
  strengths: NoirContentSection;
};

export const NoirContent: NoirContentProps = {
  hero: {
    type: NOIR_CONTENT_SECTION_TYPE.HERO,
    name: 'John Doe',
    profession: 'Rocket Engineer',
  },
  contact: {
    type: NOIR_CONTENT_SECTION_TYPE.LIST_SIMPLE,
    list: [
      {
        headline: 'Address',
        content: 'Rocket Road, CA 90250 Hawthorne, California',
      },
      {
        headline: 'Phone',
        content: '+1 234 567 890',
        href: 'tel:+1234567890',
      },
      {
        headline: 'E-mail',
        content: 'john.doe@gmail.com',
        href: 'mailto:john.doe@gmail.com'
      },
      {
        headline: 'LinkedIn',
        content: '/johndoe',
        href: 'https://www.linkedin.com',
      },
      {
        headline: 'Github',
        content: '/johndoe',
        href: 'https://github.com'
      }
    ],
  },
  coverLetter: {
    type: NOIR_CONTENT_SECTION_TYPE.LIST_SIMPLE,
    label: 'Cover letter',
    list: [
      {
        headline: 'Lorem ipsum dolor sit amet',
        content:
          <>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </>
        ,
      },
      {
        headline: 'Lorem ipsum dolor sit amet 2',
        content:
          <>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
            sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
            quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt
            ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit
            laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
            nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
          </>
      },
      {
        headline: 'Lorem ipsum dolor sit amet 3',
        content:
          <>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            <br /><br />
            Sincerely,<br />
            John Doe
          </>
      },
    ],
  },
  about: {
    type: NOIR_CONTENT_SECTION_TYPE.LIST_SIMPLE,
    label: 'About me',
    list: [
      {
        headline: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
        content:
          <>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
            sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.
          </>,
      },
    ],
  },
  experience: {
    type: NOIR_CONTENT_SECTION_TYPE.LIST_NESTED,
    label: 'Experience',
    list: [
      {
        headline: '09.2017 - PRESENT | LOREM IPSUM DOLOR SIT AMET',
        content: {
          list: [
            'sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa',
            'quae ab illo inventore veritatis et quasi architecto beatae vitae dicta',
            'sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem',
            'quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
            'ut labore et dolore magnam aliquam quaerat voluptatem',
            'laboriosam, nisi ut aliquid ex ea commodi consequatur',
            'nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo',
          ],
          badges: ['Lorem', 'Ipsum', 'Dolor', 'Sit', 'Amet', 'Consectetur', 'Adipiscing', 'Elit'],
        },
      },
      {
        headline: '06.2015 - 09.2017 | LOREM IPSUM DOLOR SIT AMET',
        content: {
          list: [
            'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
            'ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
            'dolor in reprehenderit in voluptate velit esse cillum dolore eu',
            'proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
            'et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum',
          ],
          badges: ['Ipsum', 'Dolor', 'Sit', 'Amet', 'Eiusmod', 'Tempor', 'Incididunt'],
        },
      },
    ],
  },
  education: {
    type: NOIR_CONTENT_SECTION_TYPE.LIST_SIMPLE,
    label: 'Education',
    list: [
      {
        headline: '02.2016 - 06.2017 | LOREM IPSUM DOLOR SIT AMET',
        content: 'dolor in reprehenderit in voluptate velit esse cillum dolore eu dolorem ipsum quia dolor sit amet',
      },
      {
        headline: '10.2012 - 01.2016 | LOREM IPSUM DOLOR SIT AMET',
        content: 'dolor in reprehenderit in voluptate velit esse cillum dolore eu',
      },
    ],
  },
  skills: {
    type: NOIR_CONTENT_SECTION_TYPE.LIST_SKILLS,
    label: 'Skills',
    list: [
      {
        headline: 'Ipsum',
        content: 0.85,
      },
      {
        headline: 'Dolor',
        content: 0.95,
      },
      {
        headline: 'Sit',
        content: 0.95,
      },
      {
        headline: 'Amet',
        content: 0.55,
      },
      {
        headline: 'Consectetur',
        content: 0.25,
      },
      {
        headline: 'Adipiscing',
        content: 0.7,
      },
    ],
    stackDirection: 'horizontal',
    columnCount: 2,
  },
  strengths: {
    type: NOIR_CONTENT_SECTION_TYPE.LIST_SIMPLE,
    label: 'Strengths',
    list: [
      {
        headline: 'Ipsum',
        content: 'Lorem ipsum dolor sit amet',
      },
      {
        headline: 'Dolor',
        content: 'Lorem ipsum dolor sit amet',
      },
      {
        headline: 'Sit',
        content: 'Lorem ipsum dolor sit amet',
      },
      {
        headline: 'Amet',
        content: 'Lorem ipsum dolor sit amet',
      },
    ],
    stackDirection: 'horizontal',
    columnCount: 2,
  },
  languages: {
    type: NOIR_CONTENT_SECTION_TYPE.LIST_SIMPLE,
    label: 'Languages',
    list: [
      {
        headline: 'English',
        content: 'native',
      },
      {
        headline: 'Groot',
        content: 'advanced',
      },
    ],
    stackDirection: 'horizontal',
    columnCount: 2,
  },
  hobbies: {
    type: NOIR_CONTENT_SECTION_TYPE.LIST_ICONS,
    label: 'Hobbies',
    list: [
      imgRollerskating,
      imgJogging,
      imgTravel,
      imgAstronomy,
      imgChess,
    ],
  },
  footer: {
    type: NOIR_CONTENT_SECTION_TYPE.FOOTER,
    content: 'I agree to the processing of personal data provided in this document for realising the recruitment process pursuant to the Personal Data Protection Act of 10 May 2018 (Journal of Laws 2018, item 1000) and in agreement with Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons with regard to the processing of personal data and on the free movement of such data, and repealing Directive 95/46/EC (General Data Protection Regulation).',
  },
};

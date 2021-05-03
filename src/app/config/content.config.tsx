// @TODO: add images as inline svg's to be able to control their color.
// @TODO: move config to +noir.

import imgAstronomy from '../shared/images/telescope.svg';
import imgJogging from '../shared/images/jogging.svg';
// import imgMovies from '../shared/images/movies.svg';
import imgRollerskating from '../shared/images/rollerskating.svg';
// import imgTaekwondo from '../shared/images/taekwondo.svg';
import imgTravel from '../shared/images/suitcase.svg';
import imgChess from '../shared/images/chess.svg';

export enum CONTENT_SECTION_TYPE {
  FOOTER = 'footer',
  HERO = 'hero',
  LIST_ICONS = 'list-icons',
  LIST_NESTED = 'list-nested',
  LIST_SIMPLE = 'list-simple',
  LIST_SKILLS = 'list-skills',
};

type ContentBulletPointList = {
  list: string [];
  badges?: string[];
};

type ContentListItemBulletPoints = {
  headline: string;
  content: ContentBulletPointList;
};

type ContentListItemProgressBar = {
  headline: string;
  content: number;
};

type ContentListItemSimple = {
  headline: string;
  content: React.ReactNode;
  href?: string;
};

type ContentSectionFooter = {
  type: CONTENT_SECTION_TYPE.FOOTER;
  label?: string;
  content: string;
};

type ContentSectionHero = {
  type: CONTENT_SECTION_TYPE.HERO;
  label?: string;
  name: string;
  profession: string;
};

type ContentSectionListIcons = {
  type: CONTENT_SECTION_TYPE.LIST_ICONS;
  label?: string;
  list: string[];
};

type ContentSectionListNested = {
  type: CONTENT_SECTION_TYPE.LIST_NESTED;
  label?: string;
  list: ContentListItemBulletPoints[];
};

type ContentSectionListSimple = {
  type: CONTENT_SECTION_TYPE.LIST_SIMPLE;
  label?: string;
  list: ContentListItemSimple[];
};

type ContentSectionListSkills = {
  type: CONTENT_SECTION_TYPE.LIST_SKILLS;
  label?: string;
  list: ContentListItemProgressBar[];
};

export type ContentSection =
  | ContentSectionFooter
  | ContentSectionHero
  | ContentSectionListIcons
  | ContentSectionListSimple
  | ContentSectionListSkills
  | ContentSectionListNested
  ;

type Content = {
  about: ContentSection;
  contact: ContentSection;
  coverLetter: ContentSection;
  education: ContentSection;
  experience: ContentSection;
  footer: ContentSection;
  hero: ContentSection;
  hobbies: ContentSection;
  languages: ContentSection;
  skills: ContentSection;
};

export const content: Content = {
  hero: {
    type: CONTENT_SECTION_TYPE.HERO,
    name: 'John Doe',
    profession: 'Rocket Engineer',
  },
  contact: {
    type: CONTENT_SECTION_TYPE.LIST_SIMPLE,
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
    type: CONTENT_SECTION_TYPE.LIST_SIMPLE,
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
        headline: 'Lorem ipsum dolor sit amet',
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
        headline: 'Lorem ipsum dolor sit amet',
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
    type: CONTENT_SECTION_TYPE.LIST_SIMPLE,
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
    type: CONTENT_SECTION_TYPE.LIST_NESTED,
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
    type: CONTENT_SECTION_TYPE.LIST_SIMPLE,
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
    type: CONTENT_SECTION_TYPE.LIST_SKILLS,
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
      {
        headline: 'Elit',
        content: 0.85,
      },
    ],
  },
  languages: {
    type: CONTENT_SECTION_TYPE.LIST_SIMPLE,
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
  },
  hobbies: {
    type: CONTENT_SECTION_TYPE.LIST_ICONS,
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
    type: CONTENT_SECTION_TYPE.FOOTER,
    content: 'I agree to the processing of personal data provided in this document for realising the recruitment process pursuant to the Personal Data Protection Act of 10 May 2018 (Journal of Laws 2018, item 1000) and in agreement with Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons with regard to the processing of personal data and on the free movement of such data, and repealing Directive 95/46/EC (General Data Protection Regulation).',
  },
};
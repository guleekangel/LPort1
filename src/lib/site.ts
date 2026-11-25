/**
 * Bilingual content model.
 *
 * Every user-facing string carries both languages. Chinese is the primary
 * language; English sits beneath it in a lighter, smaller treatment.
 */
export type Bi = { zh: string; en: string };

export const CATEGORIES = [
  {
    slug: 'living-room',
    label: { zh: '客厅', en: 'Living Room' } as Bi,
    numeral: 'I',
    blurb: {
      zh: '座椅、几案与收纳，被构想为一个完整的构图。',
      en: 'Seating, tables and storage conceived as a single composition.',
    } as Bi,
  },
  {
    slug: 'tea-room',
    label: { zh: '茶室', en: 'Tea Room' } as Bi,
    numeral: 'II',
    blurb: {
      zh: '矮几、坐凳与器皿，为奉茶的仪式而设。',
      en: 'Low tables, stools and vessels for the ritual of tea.',
    } as Bi,
  },
  {
    slug: 'dining-room',
    label: { zh: '餐厅', en: 'Dining Room' } as Bi,
    numeral: 'III',
    blurb: {
      zh: '餐桌与座椅，围绕一餐饭的长度展开。',
      en: 'Tables and chairs built around the length of a meal.',
    } as Bi,
  },
  {
    slug: 'bedroom',
    label: { zh: '卧室', en: 'Bedroom' } as Bi,
    numeral: 'IV',
    blurb: {
      zh: '低伏而安静的居所，围绕休息展开。',
      en: 'Quiet, low-lying rooms built around rest.',
    } as Bi,
  },
  {
    slug: 'single-items',
    label: { zh: '单品', en: 'Single Items' } as Bi,
    numeral: 'V',
    blurb: {
      zh: '独立存在的作品——一把椅子、一盏灯、一层搁架。',
      en: 'Standalone pieces — a chair, a lamp, a shelf.',
    } as Bi,
  },
  {
    slug: 'others',
    label: { zh: '其他', en: 'Others' } as Bi,
    numeral: 'VI',
    blurb: {
      zh: '器物、实验，以及其他无从归类的事物。',
      en: 'Objects, experiments and things that do not fit elsewhere.',
    } as Bi,
  },
] as const;

export type CategorySlug = (typeof CATEGORIES)[number]['slug'];

export const CATEGORY_BY_SLUG = Object.fromEntries(
  CATEGORIES.map((c) => [c.slug, c]),
) as Record<string, (typeof CATEGORIES)[number]>;

export const SITE = {
  name: '设计师',
  nameEn: 'THE DESIGNER',
  role: { zh: '家具设计', en: 'Furniture Designer' } as Bi,
  phone: '+86 138 2874 8722',
  phoneHref: '+8613828748722',
  intro: {
    zh: '我设计为真实生活而存在的家具。每一件作品都从一个材料决定开始——一块板的厚度、一个接合、一道圆角——其余的一切都由此展开。',
    en: 'I design furniture for rooms that are lived in. Each piece begins with a single material decision — a board thickness, a joint, a radius — and everything else follows from it.',
  } as Bi,
};

/** Interface labels, used across nav, sections and footer. */
export const UI = {
  pieces: { zh: '件作品', en: 'pieces' } as Bi,
  collections: { zh: '个系列', en: 'collections' } as Bi,
  contact: { zh: '联系', en: 'Contact' } as Bi,
  piecesLabel: { zh: '作品', en: 'Pieces' } as Bi,
  collectionsLabel: { zh: '系列', en: 'Collections' } as Bi,
  contactLabel: { zh: '联系方式', en: 'Contact' } as Bi,
  skip: { zh: '跳至内容', en: 'Skip to content' } as Bi,
  backToTop: { zh: '回到顶部', en: 'Back to top' } as Bi,
  enquiries: {
    zh: '询价与项目合作，欢迎致电。',
    en: 'For commissions and collaborations, please call.',
  } as Bi,
  contactTitle: { zh: '询价与\n项目合作。', en: 'Commissions and\ncollaborations.' } as Bi,
  contactNote: {
    zh: '若咨询具体作品，请说明作品名称与所属系列。',
    en: 'For enquiries about a specific piece, mention its name and section.',
  } as Bi,
  empty: {
    zh: '此系列暂无作品。',
    en: 'No pieces in this section yet.',
  } as Bi,
};

/* ---------------------------------------------------------------
   About — work experience and selected projects.
   Edit the two arrays below; the About section renders them in order.
   --------------------------------------------------------------- */

export type Experience = {
  period: string;
  role: Bi;
  company: Bi;
  location: Bi;
  summary?: Bi;
  highlights?: Bi[];
};

export type Project = {
  year: string;
  name: Bi;
  client: Bi;
  role: Bi;
  scope: Bi;
};

export const ABOUT = {
  label: { zh: '关于我', en: 'About' } as Bi,
    numeral: 'VII',
    heading: { zh: '关于我', en: 'About' } as Bi,
    intro: {
      zh: '十年以上的家具与室内设计经验，从单品开发到整体空间方案。擅长把材料、工艺与使用习惯放在一起考虑，让家具在长期使用中愈显其价值。',
      en: 'Over a decade of furniture and interior design experience, from standalone product development to complete spatial schemes. My practice brings material, craft and daily habit together so that furniture grows more valuable with use.',
    } as Bi,
    quote: {
      zh: '我设计为真实生活而存在的家具。',
      en: 'I design furniture for rooms that are lived in.',
    } as Bi,
  experienceLabel: { zh: '工作经历', en: 'Experience' } as Bi,
  projectsLabel: { zh: '参与项目', en: 'Selected Projects' } as Bi,
};

export const EXPERIENCE: Experience[] = [
  {
    period: '2021 — 至今',
    role: { zh: '家具设计总监', en: 'Design Director, Furniture' },
    company: { zh: '意式轻奢家居', en: 'Italian Contemporary Living' },
    location: { zh: '深圳', en: 'Shenzhen' },
    summary: {
      zh: '负责客厅、餐厅与卧室三大品类的产品线规划与落地，带领 6 人设计团队。',
      en: 'Led product planning and delivery across living, dining and bedroom categories with a team of six.',
    },
    highlights: [
      {
        zh: '主导 40+ 件量产家具，覆盖沙发、餐台、柜体与休闲椅。',
        en: 'Shipped 40+ production pieces spanning sofas, dining tables, cabinetry and lounge chairs.',
      },
      {
        zh: '建立材料与五金标准库，缩短新品开发周期约 30%。',
        en: 'Built a shared material and hardware library, cutting new-product development time by ~30%.',
      },
    ],
  },
  {
    period: '2018 — 2021',
    role: { zh: '高级家具设计师', en: 'Senior Furniture Designer' },
    company: { zh: '雅格斯丹', en: 'Yagestan' },
    location: { zh: '佛山', en: 'Foshan' },
    summary: {
      zh: '专注单品与系列开发，与工厂协作完成从图纸到量产的全程跟进。',
      en: 'Focused on standalone pieces and collections, following each design from drawing through to production alongside the factory.',
    },
    highlights: [
      {
        zh: '行草系列休闲椅，年度单品销量第一。',
        en: 'The Xingcao lounge chair became the year’s best-selling piece.',
      },
      {
        zh: '参与建立工厂打样流程，缩短打样轮次。',
        en: 'Helped establish the factory prototyping workflow, reducing sample rounds.',
      },
    ],
  },
  {
    period: '2015 — 2018',
    role: { zh: '家具设计师', en: 'Furniture Designer' },
    company: { zh: '独立设计工作室', en: 'Independent Design Studio' },
    location: { zh: '广州', en: 'Guangzhou' },
    summary: {
      zh: '承接住宅与茶空间的定制家具，从测量、设计到监造独立完成。',
      en: 'Delivered bespoke furniture for residential and tea-space projects, handling survey, design and site supervision independently.',
    },
  },
  {
    period: '2012 — 2015',
    role: { zh: '设计助理', en: 'Design Assistant' },
    company: { zh: '室内设计事务所', en: 'Interior Design Practice' },
    location: { zh: '广州', en: 'Guangzhou' },
    summary: {
      zh: '协助方案深化与物料选样，积累空间尺度与工艺基础。',
      en: 'Supported scheme development and material selection, building a foundation in spatial scale and craft.',
    },
  },
];

export const PROJECTS: Project[] = [
  {
    year: '2024',
    name: { zh: '唐潮茶室', en: 'Tangchao Tea Room' },
    client: { zh: '唐潮', en: 'Tangchao' },
    role: { zh: '主设计师', en: 'Lead Designer' },
    scope: { zh: '茶室整体家具：矮几、坐凳、器物架', en: 'Full tea-room furniture: low tables, stools, object shelving' },
  },
  {
    year: '2023',
    name: { zh: '意式轻奢客厅系列', en: 'Italian Contemporary Living Series' },
    client: { zh: '自有品牌', en: 'In-house collection' },
    role: { zh: '设计总监', en: 'Design Director' },
    scope: { zh: '沙发、茶几、地柜与边几共 12 件', en: '12 pieces — sofas, coffee tables, low cabinets and side tables' },
  },
  {
    year: '2023',
    name: { zh: '客厅 A 项目', en: 'Living Room A Project' },
    client: { zh: '私人住宅', en: 'Private residence' },
    role: { zh: '设计 / 监造', en: 'Design & supervision' },
    scope: { zh: '全屋客厅家具定制', en: 'Bespoke living-room furniture throughout' },
  },
  {
    year: '2022',
    name: { zh: '餐台 C', en: 'Dining Table C' },
    client: { zh: '雅格斯丹', en: 'Yagestan' },
    role: { zh: '主设计师', en: 'Lead Designer' },
    scope: { zh: '石材台面餐台，含量产的桌腿结构', en: 'Stone-top dining table including the production leg structure' },
  },
  {
    year: '2022',
    name: { zh: '行草休闲椅', en: 'Xingcao Lounge Chair' },
    client: { zh: '雅格斯丹', en: 'Yagestan' },
    role: { zh: '设计师', en: 'Designer' },
    scope: { zh: '黄铜框架与皮革软包单品', en: 'Brass frame with leather upholstery' },
  },
  {
    year: '2021',
    name: { zh: '展示柜', en: 'Display Cabinet' },
    client: { zh: '私人收藏', en: 'Private collection' },
    role: { zh: '设计与制作', en: 'Design & fabrication' },
    scope: { zh: '玻璃门器物陈列柜', en: 'Glass-fronted cabinet for objects' },
  },
];


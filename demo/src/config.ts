// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

// imported in ./layouts/BaseLayout.astro
export const BASE = {
  SITE_TITLE: "Astro Modern Personal Website Template",
  SITE_DESCRIPTION:
    "Astro Modern Personal Website template with Project Section, CV Section, Paginated Blog, RSS Feed, SEO Friendly, Visual themes and Responsive Design.",
};

// imported in ./components/SideBar.astro
export const SIDEBAR = {
  TEXT: {},
  LINKS: {},
  IMAGES: {
    PROFILE: {
      src: "https://avatars.githubusercontent.com/u/30419176?v=4",
      alt: "profile picture",
    },
  },
};

// imported in ./pages/index.astro
export const HOME = {
  TEXT: {
    SALUTATION: "Hello there 👋",
    H1: "I'm David Buckley",
    SUBTITLE: "CS Teacher and Software Engineer",
    INTRODUCTION: `I made this template as a demostration of loading content from a config file!`,
  },
  LINKS: {
    CONNECT_SOCIAL: {
      href: "https://www.linkedin.com/in/buckldav/",
      content: "Let's connect!",
    },
  },
  IMAGES: {},
};

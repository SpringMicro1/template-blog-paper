# astro-hosting-templates

## Instructions

### 1. Clone the repository and run the demo project.

```bash
git clone https://github.com/SpringMicro1/astro-hosting-templates.git
cd astro-hosting-templates
cd demo
npm install
npm run dev
```

Demo Project Original repository: [https://github.com/manuelernestog/astro-modern-personal-website](https://github.com/manuelernestog/astro-modern-personal-website).

#### ./demo/src/config.ts

Here is where the content is defined for the site.

##### BASE

Contains metadata.

```js
// from config.ts
// imported in ./layouts/BaseLayout.astro
export const BASE = {
  SITE_TITLE: "Astro Modern Personal Website Template",
  SITE_DESCRIPTION:
    "Astro Modern Personal Website template with Project Section, CV Section, Paginated Blog, RSS Feed, SEO Friendly, Visual themes and Responsive Design.",
};
```

##### SIDEBAR, HOME

The pattern Buckley wants to follow is this per page and per component:

```js
export const NAME_OF_PAGE_OR_COMPONENT = {
  TEXT: {
    NAME_OF_TEXT: "",
  },
  LINKS: {
    NAME_OF_LINK: {
      href: "",
      content: "",
    },
  },
  IMAGES: {
    NAME_OF_IMAGE: {
      src: "",
      alt: "",
    },
  },
};
```

See `./demo/src/pages/index.astro` and `./demo/src/components/Sidebar.astro` for examples on how the content is imported and used.

### 2. Make your template with a config file in this repository.

Move or download your template into this repository. By the end of this, we'll have a root file structure like this in our repository.

```
demo/
project1/
project2/
...
README.md
```

Create a `config.ts` in the `src` directory of your template (or whichever directory your project has for its project code). Model it after the demo and then import that data into your components.

### 3. Create a branch and upload your code to GitHub.

In the root of this repository, run these commands.

```bash
# Create a branch to store your code separately
# your-template-name is tailcast or something, e.g. `git checkout -b tailcast`.
# use dashes instead of spaces if needed, all lowercase.
git checkout -b <your-template-name>
# add your files
git add *
# save
git commit -m "Save message goes here"
# upload
git push -u origin
```

#### Working on your branch on a different computer/from home

```bash
# clone
git clone https://github.com/SpringMicro1/astro-hosting-templates.git
cd astro-hosting-templates
git checkout -b <your-branch-name>
# get your current version
git pull
# run npm install, etc.
```

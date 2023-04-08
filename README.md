# Next Starter

[![Node.js CI](https://github.com/C4co/next-starter/actions/workflows/node.js.yml/badge.svg)](https://github.com/C4co/next-starter/actions/workflows/node.js.yml)

Next.js and typescript starter project

### Whats inside

- [NextJS](https://nextjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Tailwind](https://tailwindcss.com/)
- [Jest](https://jestjs.io/)
- [Testing Library](https://testing-library.com/)
- [React i18next](https://react.i18next.com/)
- [React Query](https://react-query-v3.tanstack.com/)
- [Playwright](https://playwright.dev/)

### Layers and features

- Opinated layers
- Light/Dark Theme
- Internacionalization

```
📂 src
├──📁 atoms
├──📁 components
│  ├──📁 shared
│  ├──📁 partials
├──📁 content
├──📁 layouts
├──📁 pages
├──📁 services
├──📁 style
├──📁 types
├──📁 utils
```

- **atoms** - shared state atoms by Jotai
- **components/shared** - components shared for all project
- **components/partials** - components for specific feature
- **content** - isolated content to be translated
- **layouts** - page layouts
- **pages** - next page routes
- **repositories** - consume external content, api calls
- **services** - config for internal/external services
- **style** - global style configuration
- **types** - type layer

### New project

```
npx create-next-app --use-npm --example https://github.com/C4co/next-starter
```

### Commands

start development

```
npm run dev
```

run unitary tests(jest and testing library)

```
npm run test:unit
```

run e2e tests(playwright)

```
npm run test:unit
```

running all tests and checks

```
npm run test:full
```

### Deploy

[![Netlify Status](https://api.netlify.com/api/v1/badges/6172a35e-bbcf-4822-922d-4756f0c99d81/deploy-status)](https://app.netlify.com/sites/next-starter-project/deploys)
[![Vercel](https://therealsujitk-vercel-badge.vercel.app/?app=next-starter-rho-nine)](https://next-starter-rho-nine.vercel.app/)

---

### License

MIT © [C4co](https://github.com/C4co)

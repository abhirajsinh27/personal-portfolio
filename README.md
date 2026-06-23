# personal-portfolio
# Abhirajsinh Vala — Portfolio

Built with React + Vite + Tailwind CSS.

## Edit your content
All editable content lives in two files — no need to touch any component:
- `src/data/profile.js` — name, role, email, phone, social links, summary, skills, experience, education
- `src/data/projects.js` — your projects. Each has a `liveDemo: ""` field.

## Adding a live demo link later
Open `src/data/projects.js`, find the project, and paste the URL:

```js
liveDemo: "https://invhub.netlify.app",
```

That's it. The "Live demo — deploying soon" badge automatically becomes a
working "Live demo →" button. Leave it as `""` for any project that isn't
live yet.

## Run locally
```
npm install
npm run dev
```

## Build for deployment
```
npm run build
```
This outputs static files to `dist/` — drag that folder onto
https://app.netlify.com/drop to deploy, or connect this repo to Netlify
for automatic redeploys on every push.

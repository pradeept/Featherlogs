# FeatherLogs 
<img src="./public/featherlogsLogo.png" height="200" width="200" alt="featherlogs-logo">

A modern Fullstack blog application built with Next.js and React.js (TypeScript). This app provides seamless authentication, dynamic SEO metadata, and rich user experience with animations.

## Tech Stack

```
- Next.js
- React.js with TS
- Nextauth
- Mongoose
- Motion
- CSS modules (styles)
```

## Features ✨

- Authentication using **Credentials** and **Oauth**.
- Protected API.
- **Visitor**, **User** and **Author** modules.
- Dynamically generated metadata for **SEO friendliness**.
- **Animations** for better UX.
- and _much more_..

## Setup ⚒️ and Run ⚙️

- Install the dependencies: `npm i`
- Run the next app: `npm run start`
- create a .env.local in `/` (follow below mentioned example .env)
- Go to http://localhost:3000/

## Example ENV 🗝️

```
MONGO_URL=mongodb://<host>:27017/<dbName>
AUTH_SECRET=<some_secret>
AUTH_GITHUB_ID=<Get from github>
AUTH_GITHUB_SECRET=<Get from github>
AUTH_TRUST_HOST=http://localhost:3000
```

## Learnings 💡

- Oauth using Nextauth.
- API and middleware.
- Protected routes.
- Server actions & useActionState.
- Caching and revalidating.
- and _much more..._

## Folder Structure 📁

- **src**: all the routes, libs and utilities.
- **src/app**: all the routes and API.
- **src/components**: all the UI components.
- **src/lib**: server actions, controller functions, DB models and connection script.
- **src/types**: custom types.
- **src/utility**: animation and Loading files.

--- 
### Author: [Pradeep Tarakar](https://pradeept.netlify.app).

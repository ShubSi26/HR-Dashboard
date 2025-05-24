# Setup Instruction

Software Required - Node.js
## Install Dependencies
```bash
npm i
```

## .env Setup
```bash
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
NEXTAUTH_SECRET=
NEXTAUTH_URL=
```
## Dev Run
```bash
npm run dev
```
## Production Build
```bash
npm run build
```

# Features Implemented

- ## 🔐 Authentication  
  Integrated secure user authentication using **NextAuth.js**, utilizing **Google OAuth** to provide a seamless, reliable, and protected login experience.

- ## 🔍 Search by Department and Rating  
  Enabled intelligent filtering functionality that allows users to search and view employees based on **department** and **individual rating** for efficient data access.

- ## ⚡ Dynamic Data Loading with SSR  
  Leveraged **Next.js Server-Side Rendering (SSR)** to deliver pre-hydrated pages, ensuring faster initial load times and improved SEO by rendering data on the server instead of the client.

- ## 📄 Pagination  
  Implemented efficient **pagination** on the dashboard to prevent excessive data loading, enhance performance, and support **on-demand data fetching** for a smoother user experience.

- ## SSG for Analytics page
  Implemented static site generation for analytics page so on the build time, the page is fully generated and no delay in request.

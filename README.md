This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Dependencies installed

For the following project I have installed the following libraries.

- [Anime.js](https://animejs.com/) - learn about anime.js features.
- [Tailwind css](https://v2.tailwindcss.com/) - learn about tailwind css.
- [Ant Design Library](https://ant.design/) - learn about ant design

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Rationale

Using the SSR, we pre render all the components from the server side so that the client doesn't need to wait. The state of the data that is in the server gets hydrated so that it is synchronized with the client-side redux.
The 

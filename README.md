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
- [Paparse](https://www.papaparse.com/) - for parsing csv files
- react-csv - for downloading files as csv
- [Moment](https://momentjs.com/) - for managing time related features
- [Ant Icons](https://ant.design/components/icon) - this needs to be imported separately

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Rationale

Using the SSR, we pre render all the components from the server side so that the client doesn't need to wait. The state of the data that is in the server gets hydrated so that it is synchronized with the client-side redux.
The features that have been implemented are as follows:
- SplashScreen with Anime.js
- A paginated Table of Vehicle information using ant design library
- Search functionality, Download to csv functionality, Sorting functionality
- Import and parse data functionality
- Favorite car and download functionality
- Responsive

# Paginated Table
A useful table that displays the data using the And design library. Has expandable and select row features

# Search, filter, sort and download functionality
Heavy usage of the ant design library and their documentation to get some of the features working including:
- searching individual columns
- filtering based on the column that has been selected and ascending and descending order
- filtering by specific data information
- downloading with react-csv

# Import and Parse
For the import and parse, I found some online resources that describes that I can use Paparse to parse CSV data. Using basic array manipulation, I was able to check if the data was being imported correctly.

# Favorite car
Using redux, I created a separate slice that will store manipulation of favorite lists. This way it separates the features of vehicle list and favorite list and they won't be abused in terms of usage.
Users can add their favorite cars to the favorite list and when they do they can see it by clicking on the heart icon.
Inside the list of favorites, they have the option to delete items or download the favorite car list they have.
In terms of the actual functionality in relation to redux, I decided that state should not be mutated in the reducer so I have manipulated the data from the client side and dispatched an action that will replace the new list with the current list.

# SplashScreen
Used Anime.js to animate the splash screen.

# Responsive web pages
Used the traditional method of getting the screen size with JavaScript to get this to work. Along with some of the built in classes from tailwind ['sm', 'md', 'lg', etc] I was able to create a responsive design and using isDesktop, I was able to
conditional output different columns such that the table doesn't look overly convoluted.

## References
- [Sorting](https://stackoverflow.com/questions/47998188/how-to-sort-an-object-alphabetically-within-an-array-in-react-js)
- [SSR](https://www.youtube.com/watch?v=WAMqFdCFotY&t=1s)
- [SSR with redux](https://www.youtube.com/watch?v=pstQ7xyg8p8)
- [Screen size conditional](https://stackoverflow.com/questions/46586165/react-conditionally-render-based-on-viewport-size)
- Background Photo by Pixabay: https://www.pexels.com/photo/red-alfa-romeo-c4-on-road-near-trees-210019/
# Inspiration Board

Simple Inspiration Board built with Next, React, Semantic-UI, React Hooks, Sass

## Steps to run the project:

1. Run yarn
2. Run yarn dev
3. Open browser navigate to localhost:3000


## Todo

- Improve styles structure, and fix related warning
- Fix Router issue when running in Production
- Modularize fetching and add loading indicator after pushing new route to improve UX and loading times.
- Add react virtualize to improve performance when too much items
- Fix favicon issue after implementing custom server

## Notes

- Dropmark's api doesn't seem to have way to limit the amount of items retrieved when feching a collection to improve performance.
- Custom server is been used to cache the fetched data. But this caused the favicon to stop loading.
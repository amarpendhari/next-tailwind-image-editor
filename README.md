# Next Tailwind Image Editor

## Project setup

```
npm install
```
## Run App(Scripts added for npm run dev)

```
npm run dev
```
[A demo is worth a thousand words](https://master--next-tailwind-image-editor.netlify.app/auth/login)

## Image Editor 

- Image Editor using Next, Tailwind, JSON Server & Syncfusion

## Project Specifications

- A Simple Next Image Editor using Syncfusion
- JSON Server is a Node Module that you can use to create demo rest json webservice(i.e full fake REST API )
- Auth Implemented
- User can Register and Login
- Email ID connot be used Twice
- User can Edit & Download Edited Image

* Registration

  - All Feilds are Required
  - Used Email Id cannot be used again
  - Errors/Alerts if any Feild left missing or for Invalid Data
  - Submit Registration Form and Log In User

* Login

  - Only Log In for Users who have Registered
  - Fake account cannot Log IN
  - Enter Valid Email Id & Password

* Image Editor

  - Basic dashbaord with interface
  - Syncfusion used for Image Editor
  - Edit Image - add text(change color, font size, bold, underline), filter(change different overlays), crop(crop in multiple dimensions)
  - Download/Save Image - Edited Image can be downloaded and saved I

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

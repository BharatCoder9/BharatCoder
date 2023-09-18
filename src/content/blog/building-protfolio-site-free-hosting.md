---
title: 'Building My Personal Portfolio Site and Hosting for Free'
description: 'Building My Personal Portfolio Site with Astro, Tailwind CSS, Daisy UI, and Hosting on Vercel'
pubDate: 'Sept 15 2023'
---

## Introduction

In the digital age, having a personal portfolio website is essential for showcasing your skills and accomplishments to potential clients or employers. Building a portfolio site used to be a daunting task, but with modern web development tools like Astro, Tailwind CSS, and Daisy UI, creating a stunning website has become more accessible than ever. In this article, I'll walk you through how I built my personal portfolio site and hosted it on Vercel.

### Getting Started

Before diving into the technical details, let's briefly discuss the technologies used in this project:

1. **Astro**: Astro is a modern static site generator that combines the best of both static and server-rendered sites. It offers incredible performance and flexibility while keeping development straightforward.

2. **Tailwind CSS**: Tailwind CSS is a popular utility-first CSS framework that allows you to build responsive and stylish websites with ease. It's highly customizable and minimizes the need for writing custom CSS.

3. **Daisy UI**: Daisy UI is a set of professionally designed UI components for Tailwind CSS. It makes building complex UI elements a breeze and enhances the overall look and feel of your site.

4. **Vercel**: Vercel is a cloud platform for frontend and serverless functions. It's an excellent choice for hosting static websites due to its simplicity, scalability, and integration with popular tools like Git.

### Project Setup

1. **Create a New Astro Project**: To start, I created a new Astro project using the following command:

   ```
   npm init astro
   ```

2. **Install Tailwind CSS and Daisy UI**: Next, I installed Tailwind CSS and Daisy UI as dependencies in my project:

   ```
   npm install tailwindcss daisyui
   ```

   I then followed the setup instructions for Tailwind CSS and Daisy UI to configure them in my project.

3. **Design and Layout**: With Tailwind CSS and Daisy UI in place, I designed the layout of my portfolio site. I used Tailwind's utility classes and Daisy UI components to create a visually appealing and responsive design.

4. **Content Creation**: I added content to my portfolio site, including information about myself, my projects, skills, and contact details. Astro allows me to use components to organize and display this content efficiently.

5. **Building and Testing**: To ensure everything was working correctly, I used Astro's built-in development server to preview my site locally:

   ```
   npm run dev
   ```

   This made it easy to iterate on the design and content until I was satisfied with the result.

### Optimizing for Production

Astro takes care of optimizing the website for production, but there are a few additional steps I took to ensure the best performance:

1. **Bundling and Minification**: Astro automatically bundles and minifies JavaScript and CSS files, reducing the site's load time.

2. **Image Optimization**: I optimized images used on the site to reduce their size and improve load times. Tools like `imagemin` are handy for this task.

3. **Accessibility**: I ensured that my site was accessible to all users by adding alt text to images and using semantic HTML elements.

### Deploying to Vercel

Once my portfolio site was ready for production, I deployed it to Vercel. Here's how I did it:

1. **Create a Vercel Account**: If you don't already have one, sign up for a Vercel account at [vercel.com](https://vercel.com/).

2. **Connect to Git Repository**: I connected my portfolio project's Git repository (e.g., GitHub, GitLab, or Bitbucket) to Vercel. This allows Vercel to automatically deploy updates when I push changes to the repository.

3. **Configure Deployment Settings**: I configured deployment settings in Vercel, specifying the branch to deploy from and any environment variables needed for my project.

4. **Deploy**: With the settings in place, I triggered the initial deployment. Vercel built and deployed my portfolio site automatically.

### Conclusion

Building my personal portfolio site with Astro, Tailwind CSS, Daisy UI, and hosting it on Vercel was a straightforward and enjoyable experience. These tools provided the flexibility and performance I needed while minimizing the complexity of web development. Whether you're a seasoned developer or just starting, these technologies can help you create an impressive portfolio site to showcase your talents to the world.

If you'd like to check out my personal portfolio site built with these tools, visit [https://bharat-coder.vercel.app/](https://bharat-coder.vercel.app/). Happy coding!

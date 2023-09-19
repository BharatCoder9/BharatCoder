---
title: 'Adding a Contact Form to My Site with Formspree for Free'
description: 'Learn how to enhance your website with a free contact form using Formspree. Discover step-by-step instructions for integrating a contact form seamlessly, enabling effective communication with your website visitors and potential clients. Simplify the process and enhance your online presence today!'
pubDate: 'Sept 18 2023'
---

When building a personal portfolio or website, one of the essential elements is a contact form that allows visitors to get in touch with you. Adding a contact form might seem daunting, but with the help of services like Formspree, it's a straightforward process that won't break the bank. In this post, I'll walk you through how I added a contact form to my site for free using Formspree.

## What is Formspree?

[Formspree](https://formspree.io/) is a user-friendly service that simplifies the process of adding forms to your website. It acts as a bridge between your website's HTML form and your email inbox, forwarding form submissions as emails.

Here's how you can add a contact form to your site with Formspree:

### Step 1: Sign Up for a Formspree Account

1. Visit [Formspree](https://formspree.io/) and sign up for a free account. You'll need to verify your email address.

### Step 2: Create a New Form

1. After signing in, click the "New Form" button in your Formspree dashboard.

2. Give your form a name, which will be part of the form's URL (e.g., "contact" for `https://formspree.io/f/contact`).

### Step 3: Configure Form Settings

1. Once your form is created, you'll see a "Settings" tab. Here, you can specify the email address where form submissions will be sent. This is where you'll receive messages from your website visitors.

2. Configure any additional settings as needed. Formspree offers customization options such as redirecting users to a thank-you page after submission and enabling spam protection.

### Step 4: Grab the Form URL

1. In the "Settings" tab, you'll find your Form URL. This URL will be used as the `action` attribute in your HTML form.

### Step 5: Create Your HTML Form

1. Now, it's time to add the contact form to your website. Here's a basic example of an HTML form:

   ```html
   <form action="https://formspree.io/f/your-form-id" method="POST">
     <label for="name">Name:</label>
     <input type="text" name="name" id="name" required>

     <label for="email">Email:</label>
     <input type="email" name="email" id="email" required>

     <label for="message">Message:</label>
     <textarea name="message" id="message" rows="4" required></textarea>

     <button type="submit">Submit</button>
   </form>
   ```

   Replace `"https://formspree.io/f/your-form-id"` with the actual Form URL you obtained from Formspree.

### Step 6: Test Your Form

1. Make sure your website is live, and then visit the page with your contact form. Submit a test message to ensure everything is working correctly.

### Step 7: Receive Contact Form Submissions

1. Whenever someone submits your contact form, you'll receive an email notification at the address you specified in Formspree settings.

That's it! You've successfully added a contact form to your website using Formspree, and you can now engage with your visitors more effectively.

## Why Formspree?

- **Ease of Use**: Formspree simplifies the process of setting up and managing forms on your website. You don't need to write server-side code to handle form submissions.

- **Free Plan**: Formspree offers a free plan that covers the basic needs of most personal websites. You can upgrade to a paid plan for advanced features if necessary.

- **Integration**: Formspree can be integrated with various website builders, CMS platforms, and static site generators, making it a versatile choice.

- **Security**: Formspree provides spam protection and security features to ensure that your contact form remains secure.

Adding a contact form to your website is an excellent way to facilitate communication with your audience and potential clients or employers. Formspree's ease of use and affordability make it a valuable tool for web developers and designers looking to enhance their online presence.

Now that you know how to add a contact form for free, take the next step and make it easier for visitors to reach out to you through your website. Happy coding!
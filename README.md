# Leaf Vegetarian Restaurant - WDI7 Capstone Project

## Big Picture:
For my capstone project I wanted to recreate a website for one of my favorite places to either eat, shop, travel, etc. I searched for hours and decided on my favorite vegetarian restaurant in Boulder Colorado, Leaf Vegetarian Restaurant. My goal for this project was to update the existing styling on their website and add new functionality.

### Trello & Planning:

Here is a link to my [Trello Board](https://trello.com/b/KUqJSxWQ/leaf-vegetarian-restaurant-boulder-wdi7-capstone) for this project.

I was very thorough with my planning process for this project. Since this website will be for a "real-life" business. I took the time to really think through all of the different steps users will take on this website.

### Aproach Taken

I started this project by going through and wireframing what I wanted each page to look like. This really helped me as I went back through and made React components for each part of every page. 

While building the basic outline of the website, I went through tons of photos and found ones that made sense for the website. I used a CDN from Skeleton CSS to create responsive a form.

After getting the fundamentals and photos for the site finished, I tackled my contact form. Creating the form was very easy, but as soon as I had to add the React Logic to the form it became more difficult. I decided to use Google Firebase as my database and spent a lot of time researching how to connect form data to firebase. 

I managed to connect Firebase and my form, but after that decided I wanted to add an Email API called SendGrid to send all of the form data to my email. I had to add Node.js to my project to make this API work. That API and route is hosted on Heroku and I am able to use this API by using Axios in my React App.

### Technical Requirements

- Use a database, whether it's one we've covered in class or one you want to learn.

- Build a full-stack application by making your own back-end and your own front-end.

- Create a complete product, which most likely means multiple related resources and CRUD functionality for each.

- Create a focused product. Know which features are essential to build for your MVP and which to set aside for later.

- Craft thoughtful user stories that are significant enough to help you ensure a pleasing and logical user experience.

- Handle errors gracefully, and provide useful feedback to users when errors or validation failures do occur.

- Make a product that's impressive-looking; up your design and style game to kick your portfolio up a notch.

- Deploy your application online so it's publicly accessible.

### Technologies Used

For this project, I used React, Node, Express and Firebase. 

I also used Skeleton CSS CDN and the SendGrid API

### Obstacles

A few obstacles that I ran into:

- Creating responsive menus that held visual appeal at all sizes
- Connecting the SendGrid API

### Proud Moments

I am very proud of how aesthetically pleasing this website is and how it is mobile responsive. 

I am also proud of the fact that three months ago I would not have a clue to build a website like this.

### Project Continuation

I want to look into using a reservation API that will 

### Deployment

You can find my website deployed on [Surge](http://leafvegetarianboulder.surge.sh/)

My backend is deployed on Firebase and on Heroku](https://github.com/katcozadd/leaf-boulder-backend)
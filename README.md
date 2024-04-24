
# React Components Readme

This repository contains two main React components: `CalculateFactorial` and `Counter`. Additionally, it includes a Dockerfile for deploying the frontend application.

## CalculateFactorial Component

The `CalculateFactorial` component is a powerful tool that calculates the factorial of a given number. Here are its key features:

- **User Input**: The component provides an input field where users can enter a number. This number is used to calculate the factorial.
- **Factorial Calculation**: Upon receiving the user input, the component calculates the factorial of the input number. The factorial of a number `n` is the product of all positive integers less than or equal to `n`.
- **Optimized Performance**: The component uses the `useMemo` hook from React to optimize performance. This hook memorizes the result of the factorial calculation, avoiding unnecessary recalculations if the input number hasn't changed.
- **Result Display**: The component displays the result of the factorial calculation to the user.
- **Click Counter**: The component includes a counter button that keeps track of how many times it's clicked. This can be useful for tracking user interaction.

## Counter Component

The `Counter` component is a simple yet effective tool that allows users to increment or decrement a count value. Here are its key features:

- **Count Display**: The component displays a count value to the user. This value changes as the user interacts with the component.
- **Increment and Decrement Buttons**: The component includes two buttons: one to increment the count value and another to decrement it. These buttons allow the user to interact with the count value directly.

## Dockerfile

The `frontend/Dockerfile` is configured to create a Docker image for deploying the frontend application. It uses Nginx, a high-performance HTTP server and reverse proxy, as the web server. Here's a brief explanation of the Dockerfile:

```Dockerfile
# We start from the nginx:alpine image. Alpine Linux is a security-oriented, lightweight Linux distribution.
FROM nginx:alpine

# We copy the built website files into the appropriate directory in the Docker image.
# Replace './path/to/your/website' with the actual path to your website files.
COPY ./path/to/your/website /usr/share/nginx/html
```

This Dockerfile ensures that your frontend application can be easily deployed using Docker, benefiting from the isolation, scalability, and ease of deployment that Docker provides. Remember to replace `./path/to/your/website` with the actual path to your built website files. 

Please note that you'll need to build your React application before copying the files. You can do this by running `npm run build` in your React application directory. This will create a `build` directory with the static website files that you can copy into your Docker image. 


# React Components Readme

This repository contains two React components and a Dockerfile for deploying the frontend application.

## CalculateFactorial Component

The `CalculateFactorial` component is designed to calculate the factorial of a given number. It includes the following features:

- Allows users to input a number.
- Calculates the factorial of the input number.
- Uses `useMemo` to optimize performance by avoiding unnecessary recalculations.
- Displays the factorial result.
- Includes a counter button to keep track of how many times it's clicked.

## Counter Component

The `Counter` component is a simple counter that allows users to increment or decrement a count value. It includes the following features:

- Displays a count value.
- Includes buttons to increment and decrement the count.

## Dockerfile

The `frontend/Dockerfile` is configured to create a Docker image for deploying the frontend application. It uses Nginx as the web server and copies the built website files into the appropriate directory.

```Dockerfile
FROM nginx:alpine
COPY ./path/to/your/website /usr/share/nginx/html

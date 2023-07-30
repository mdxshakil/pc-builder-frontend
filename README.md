# PC Components Selling Website - PC Empire

This project is a web application for selling PC components. Users can browse through a wide range of PC parts and purchase them. Additionally, registered and logged-in users gain access to a special feature called PC Builder. In the PC Builder, they can select various PC components to build their own custom PC configurations.

## Features
* User can signup using github account
* User can submit their review on each product
* User can submit rating on each product
* User can browse through variety of products
* User can build their own pc by selecting their favourite components and see the total price
* Usage of SSG and SSR
* Used redux toolkit for state management
 

[Frontend Live Link](https://a6-pc-builder-frontend.vercel.app/)

[Frontend Repository Link](https://github.com/mdxshakil/pc-builder-frontend)

[Backend Live Link](https://a6-pc-builder-backend.vercel.app/)

[Backendend Repository Link](https://github.com/mdxshakil/pc-builder-backend)

## Table of Contents

- [Introduction](#pc-components-selling-website---pc-builder)
- [Getting Started](#getting-started)
- [Routes](#routes)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

Make sure you have the following software installed on your machine before proceeding:

- [Node.js](https://nodejs.org) - Download and install Node.js, which includes npm (Node Package Manager).
- [Git](https://git-scm.com) - Version control system for cloning the repository.

### Installation

1. Clone the GitHub repository to your local machine using the following command:

   ```bash
   git clone https://github.com/mdxshakil/pc-builder-frontend
   ```

```bash
cd pc-components-selling
```

Install the project dependencies by running:

```bash
npm install
```

### Installation

Create a .env file at the root of the project and add the necessary credentials:

`GITHUB_ID`

`GITHUB_SECRET`

`NEXTAUTH_SECRET`

`NEXTAUTH_URL`

`SERVER_BASE_URL`

Make sure to replace your_github_id, your_github_secret, your_nextauth_secret, and your_nextauth_url with the actual values you obtained during the application setup and use backend live link as SERVER_BASE_URL.

### Running the Project

To start the development server, run the following command:

```bash
npm run dev
```

This will start the application in development mode. Open your browser and visit http://localhost:3000 to access the website.

For production, build the application using:

```bash
npm run build
```

After the build is complete, start the production server using:

```bash
npm start
```

Your PC Components Selling Website should now be up and running in production mode.

### Routes

Here are the main routes of the PC Components Selling Website:

```
  /login
  /pcbuilder
  /product
  /product/:id
  /pcbuilder/component/:category
```

We welcome contributions you to enhance the PC Components Selling Website. If you find any bugs or want to suggest new features, please open an issue or submit a pull request. We appreciate your help in making this project better.

Before contributing, please read our Code of Conduct to maintain a friendly and inclusive environment for everyone.

_Noroff CSS Frameworks Course Assignment_

# TailwindCSS

---

## Description:

The goal of this project is to style the JS2 assignment using **TailwindCSS**.

# Table of Contents

- [Installation](#installation-)

- [Project Scripts](#project-scripts-)

- [Usage](#usage)

- [Contributing](#contributions-guidelines)

- [Ackowledgements](#acknowledgements)

## Prerequisites :

Before you begin, ensure you have the following installed on your system:

- **Node.js**: v20.11.1 or higher

- **npm**: v10.9.0 or higher

- **git**: v2.43.0 or higher

## Installation :

### Cloning the repo:

```bash
git clone https://github.com/aggicreative555/rat-central.git
```

### Installing dependencies:

This project uses several dependencies for development and testing. Here is the list of all dependencies used:

- **Vite**: Code compiler
- **Eslint**: Code linting
- **Prettier**: Code formatting
- **Tailwindcss**: Styling

**1. Run the following commands to install them:**

```bash
npm install
```

**2. After installation, ensure all dependencies are installed properly:**

```bash
npm list
```

# Tailwind/vite plugin

**1. Install tailwind/vite plugin:**

```bash
npm install tailwindcss @tailwindcss/vite
```

**2. Add plugin to vite.config:**

```json
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})
```

[_Full process on tailwind docs_](https://tailwindcss.com/docs/installation/using-vite)

# Environment variables

The development server runs on PORT=3000. Update it in your .env file if necessary.

## Project Scripts :

### Terminal commands:

**1. Run the developement server:**

```bash
npm run dev
```

**2. Build for production:**

```bash
npm run build
```

**3. Run linting checks:**

```bash
npm run lint
```

**4. Run with prettier**

```bash
npm run prettier
```

**5. Format with eslint and prettier:**

```bash
npm run format
```

## Usage:

### Run project:

**1. Format project :**

```bash
npm run format
```

**2. Run developement :**

```bash
npm run dev
```

**2. Build for production:**

```bash
npm run build
```

## Contributions Guidelines:

1. To contribute, **fork** the repository.

2. Create a **new branch.**

```bash
git checkout -b fork/your-fork-name
```

3. **Commit** your changes.

```bash
git commit -m "Your commit message"
```

5.  Submit a **PR** for review.

### License:

This project uses an **ISC** license.

### Acknowledgements:

This project is a part of my _Noroff Course Assignment_.

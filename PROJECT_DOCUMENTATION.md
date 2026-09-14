# Swiggy Clone

A React and Vite project that recreates the beginning of a Swiggy-style food-ordering interface. The current implementation provides a responsive header with branding, location selection, account links, and a location side menu.

## Tech Stack

- React 19
- Vite 8
- Tailwind CSS 4
- React Icons
- ESLint

## Prerequisites

Install a recent LTS version of [Node.js](https://nodejs.org/). npm is included with Node.js.

## Installation

```bash
git clone <repository-url>
cd swiggy-clone
npm install
```

## Available Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Starts the Vite development server with hot reload. |
| `npm run build` | Creates an optimized production build in `dist/`. |
| `npm run preview` | Serves the production build locally. Run `npm run build` first. |
| `npm run lint` | Checks JavaScript and JSX files with ESLint. |

## Project Structure

```text
swiggy-clone/
├── public/
│   └── Swiggy-logo.png       # Header logo served from the site root
├── src/
│   ├── components/
│   │   └── Header.jsx        # Navigation header and location side menu
│   ├── App.jsx               # Root application component
│   ├── index.css             # Global styles and Tailwind import
│   └── main.jsx              # React application entry point
├── index.html                # Vite HTML entry point
├── package.json              # Dependencies and scripts
└── vite.config.js            # Vite configuration
```

## Current Features

- Swiggy logo loaded from `public/Swiggy-logo.png`.
- Location display with a dropdown caret.
- Location side menu that opens from the caret button.
- Side menu closes through its close button or by clicking the overlay.
- Login and Sign Up links with aligned React Icons.
- Tailwind utility classes for layout, spacing, colors, and responsive behavior.

## Header Component

`src/components/Header.jsx` manages the side menu using React state:

```jsx
const [isSideMenuOpen, setIsSideMenuOpen] = useState(false)
```

The header uses an array of navigation objects. Each object includes a display name, destination, and icon component. Adding another item only requires adding another object to `navLinks`.

```jsx
{ name: 'Login', href: '/login', Icon: FiLogIn }
```

## Styling

Tailwind CSS is imported in `src/index.css`:

```css
@import "tailwindcss";
```

The `.black-overlay` class supplies the translucent background behind the location side menu. Most component styling uses Tailwind utility classes directly in JSX.

## Static Assets

Files placed in `public/` are available at the browser root. For example, the header logo is referenced as:

```jsx
<img src="/Swiggy-logo.png" alt="Swiggy" />
```

Do not use `./Swiggy-logo.png` for a file in `public/`, because Vite serves public files from `/`.

## Verification

Before committing changes, run:

```bash
npm run lint
npm run build
```

Both commands should complete without errors.

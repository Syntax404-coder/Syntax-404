# Portfolio Website - React Version

A modern, responsive portfolio website built with React, Vite, HTML, and CSS.

## Features

- **React-based**: Built with React 18 and modern hooks
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Smooth Animations**: Engaging scroll animations and transitions
- **Modern UI/UX**: Clean, professional design with a beautiful color scheme
- **Interactive Navigation**: Smooth scrolling and active section highlighting
- **Contact Form**: Functional contact form with React state management
- **Skill Progress Bars**: Animated progress bars that reveal on scroll
- **Project Showcase**: Beautiful project cards with hover effects

## Sections

1. **Hero Section**: Eye-catching introduction with call-to-action buttons
2. **About Section**: Personal information, education, and statistics
3. **Experience Section**: Professional experience timeline
4. **Skills Section**: Technical skills with progress indicators
5. **Projects Section**: Portfolio of featured projects
6. **Contact Section**: Contact information and message form

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
Profile Portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Experience.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Customization

### Personal Information
- Update your name, role, and description in `src/components/Hero.jsx`
- Modify the About section in `src/components/About.jsx`
- Update contact information in `src/components/Contact.jsx`

### Colors
Edit the CSS variables in `src/styles.css`:
```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #8b5cf6;
    /* ... other colors */
}
```

### Projects
Add or modify projects in `src/components/Projects.jsx`

### Skills
Update skills and progress percentages in `src/components/Skills.jsx`

### Experience
Update experience entries in `src/components/Experience.jsx`

## Technologies Used

- **React 18**: UI library
- **Vite**: Build tool and dev server
- **CSS3**: Styling with custom properties
- **JavaScript (ES6+)**: Modern JavaScript features

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Free to use and modify for personal or commercial projects.

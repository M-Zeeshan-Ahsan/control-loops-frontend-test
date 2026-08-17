# Control loops Frontend Test

A responsive assignment website built with React.js and Vite.

## Features

- Responsive landing page
- Responsive navigation bar
- Active navigation links
- Smooth scrolling navigation
- Hero section with search form
- Popular destinations
- Tour activities carousel
- Travel choices with category filtering
- Newsletter subscription form
- Responsive desktop, tablet, and mobile layouts
- Reusable React components
- SVG assets and custom fonts

## Tech Stack

- React.js
- Vite
- JavaScript
- CSS
- Swiper.js
- SVG
- Google Fonts

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed.

### Installation

Clone the repository:

```bash
git clone https://github.com/M-Zeeshan-Ahsan/control-loops-frontend-test
```

Navigate to the project directory:

```bash
cd cms-travelers
```

Install dependencies:

```bash
npm install
```

### Run the Project

Start the development server:

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:5173
```

## Build for Production

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## Project Structure

```text
src/
├── assets/
│   ├── images/
│   └── icons/
├── components/
│   ├── layout/
│   │   ├── Header/
│   │   └── Footer/
│   ├── hero/
│   │   ├── Hero/
│   │   └── SearchForm/
│   ├── destinations/
│   │   ├── PopularDestinations/
│   │   └── DestinationCard/
│   ├── activities/
│   │   ├── TourActivities/
│   │   └── ActivityCard/
│   ├── travel/
│   │   ├── TravelChoices/
│   │   └── TravelCard/
│   └── newsletter/
│       └── Newsletter/
├── pages/
│   └── Home/
├── styles/
│   └── globals.css
├── App.jsx
└── main.jsx
```

## Component Architecture

The project follows a reusable component-based architecture.

- `Navbar` — Navigation and responsive mobile menu
- `Hero` — Main hero section
- `SearchForm` — Travel search form
- `PopularDestinations` — Popular destination section
- `DestinationCard` — Reusable destination card
- `TourActivities` — Tour activity carousel
- `ActivityCard` — Reusable activity card
- `TravelChoices` — Travel category filtering and cards
- `TravelCard` — Reusable travel card
- `Newsletter` — Newsletter subscription section
- `Footer` — Website footer

## Responsive Design

The website is optimized for:

- Desktop
- Tablet
- Mobile

Responsive behavior is handled through CSS media queries.

## Notes

The newsletter form currently uses a frontend-only submit handler for demonstration purposes.

Travel and destination content is currently based on static frontend data.

## Author

Muhammad Zeeshan Ahsan

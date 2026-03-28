# Movie App

A modern React application for browsing and managing your favorite movies. Built with Vite, this app allows users to explore popular movies, search for specific films, and maintain a personal list of favorites.

## Features

- **Browse Popular Movies**: View a curated list of currently popular movies from The Movie Database (TMDB)
- **Search Functionality**: Search for movies by title with real-time results
- **Favorites Management**: Add/remove movies to/from your personal favorites list
- **Persistent Storage**: Favorites are saved locally in your browser
- **Responsive Design**: Optimized for both desktop and mobile viewing
- **Fast Performance**: Built with Vite for lightning-fast development and builds

## Tech Stack

- **Frontend**: React 19
- **Routing**: React Router DOM
- **Build Tool**: Vite
- **Styling**: CSS Modules
- **API**: The Movie Database (TMDB) API
- **State Management**: React Context API
- **Linting**: ESLint

## Prerequisites

Before running this project, make sure you have the following installed:

- Node.js (version 16 or higher)
- npm or yarn package manager
- A TMDB API key (see Setup section below)

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd react-movie-site
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up your TMDB API key (see Setup section below)

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:5173`

## Setup

### Getting a TMDB API Key

1. Visit [The Movie Database (TMDB)](https://www.themoviedb.org/)
2. Create a free account or sign in
3. Go to your account settings and navigate to the "API" section
4. Request an API key for personal use
5. Copy your API key

### Configuring the API Key

1. Open `src/services/api.js`
2. Replace the empty `API_KEY` variable with your TMDB API key:
   ```javascript
   const API_KEY = "your_api_key_here";
   ```

## Usage

### Browsing Movies
- On the Home page, you'll see a grid of popular movies
- Each movie card shows the poster, title, and release year
- Click the heart icon to add/remove from favorites

### Searching Movies
- Use the search bar at the top of the Home page
- Enter a movie title and click "Search" or press Enter
- Results will display matching movies

### Managing Favorites
- Click the "Favorites" link in the navigation
- View all your saved favorite movies
- Remove movies from favorites by clicking the heart icon again

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── MovieCard.jsx   # Individual movie display component
│   └── NavBar.jsx      # Navigation component
├── contexts/           # React Context for state management
│   └── MovieContext.jsx # Favorites state management
├── pages/              # Main application pages
│   ├── Home.jsx        # Main page with movie browsing and search
│   └── Favourites.jsx  # Favorites page
├── services/           # API service functions
│   └── api.js          # TMDB API integration
├── css/                # Stylesheets
│   ├── App.css
│   ├── Favourites.css
│   ├── Home.css
│   ├── index.css
│   ├── MovieCard.css
│   └── NavBar.css
├── assets/             # Static assets
├── App.jsx             # Main application component
└── main.jsx            # Application entry point
```

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint for code quality checks

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## API Reference

This app uses The Movie Database (TMDB) API:

- **Popular Movies**: `GET /movie/popular`
- **Search Movies**: `GET /search/movie`

For more information, visit the [TMDB API Documentation](https://developers.themoviedb.org/3/getting-started/introduction).

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Movie data provided by [The Movie Database (TMDB)](https://www.themoviedb.org/)
- Built with [React](https://reactjs.org/) and [Vite](https://vitejs.dev/)

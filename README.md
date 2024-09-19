# WorldWise

WorldWise is an interactive web application that allows users to register and keep track of all the cities they have visited. The application provides a map interface where users can mark cities they've been to, add notes about their trips, and view detailed information about each city. WorldWise is built with modern web technologies, ensuring a smooth and responsive user experience.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Pages](#pages)
- [Screenshots](#screenshots)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Contact Information](#contact-information)

## Project Overview

WorldWise offers a seamless way for users to document their travels. With a simple login system, users can start adding cities to their visited list. The application leverages a map interface, allowing users to click on a city to record their visit, including the date and personal notes. The side navigation provides quick access to both cities and countries, enhancing the user experience by categorizing visits geographically.

## Features

- **City Registration:** Users can add cities they've visited by clicking on the map. The city name is fetched from an external API, and users can add the date of visit and notes about their trip.
- **Interactive Map:** The map interface allows users to view their current location using the geoLocationAPI. The map updates dynamically as users interact with it.
- **City and Country Lists:** A side navigation bar lists all registered cities and countries, with URL routing between `/app/cities` and `/app/countries`.
- **City Details:** Clicking on a city marker or a city from the list brings up detailed information, including a link to the city's Wikipedia page.
- **Delete City:** Users can delete a city from their list, with a loading spinner indicating the process, as the city data is fetched from a fake API.

## Pages

1. **`/product`:** This page provides an overview of the WorldWise app, explaining its purpose and features.
2. **`/pricing`:** Displays fictional pricing information for the WorldWise app.
3. **`/login`:** The login page where users authenticate by entering their email and password.
4. **`/app/cities`:** The main page of the application, listing all cities the user has registered.
5. **`/app/countries`:** Lists all countries, automatically populated based on the registered cities.
6. **`/app/form?lat=123&lng=123`:** A form page that appears when a user clicks on the map to add a new city.
7. **`/app/cities/123?lat=123&lng=123`:** Displays detailed information about a specific city, including visit date, notes, and a Wikipedia link.

## Screenshots

1. **Home Page (`/`)**: ![Home Page Screenshot](screenshots/home%20page%20of%20worldwise.png)
2. **Product Page (`/product`)**: ![Product Page Screenshot](screenshots/about%20page%20of%20worldwise.png)
3. **Pricing Page (`/pricing`)**: ![Pricing Page Screenshot](screenshots/pricing%20page%20of%20worldwise.png)
4. **Login Page (`/login`)**: ![Login Page Screenshot](screenshots/login%20page%20of%20worldwise.png)
5. **Main Application Page (`/app/cities`)**: ![Main Application Page Screenshot](screenshots/main%20page%20of%20worldwise.png)
6. **Cities List (`/app/cities`)**: ![Cities List Screenshot](screenshots/main%20page%20after%20adding%20cities%20on%20the%20map.png)
7. **Countries List (`/app/countries`)**: ![Countries List Screenshot](screenshots/list%20of%20countries%20user%20has%20visited%20in%20worldwise.png)
8. **Add City Form (`/app/form?lat=123&lng=123`)**: ![Screenshot showing the form that appears when a user clicks on the map to add a city](screenshots/add%20form%20worldwise.png)
9. **City Details (`/app/cities/123?lat=123&lng=123`)**: ![Screenshot showing detailed information about a specific city after selection](screenshots/visited%20place%20descritption%20worldwise.png)

## Technologies Used

- ![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white&style=flat) **React 18:** For building the user interface.
- ![Vite](https://img.shields.io/badge/-Vite-646CFF?logo=vite&logoColor=white&style=flat) **Vite:** For fast and efficient development setup.
- ![React Router](https://img.shields.io/badge/-React%20Router-CA4245?logo=react-router&logoColor=white&style=flat) **React Router:** For managing application routing.
- ![CSS Modules](https://img.shields.io/badge/-CSS%20Modules-000000?logo=css-modules&logoColor=white&style=flat) **CSS Modules:** For scoped and maintainable styling.
- ![json-server](https://img.shields.io/badge/-json--server-323330?logo=json&logoColor=white&style=flat) **json-server:** For simulating a REST API.
- ![Leaflet](https://img.shields.io/badge/-Leaflet-199900?logo=leaflet&logoColor=white&style=flat) **Leaflet + React-Leaflet:** For interactive maps and geolocation functionality.

## Setup Instructions

To set up the WorldWise project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/worldwise.git
   cd worldwise
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start the development server:**
   ```bash
   npm run dev
   ```
4. **Access the application:**
   Open your browser and navigate to `http://localhost:5173`.

## Contact Information

For any inquiries or further information, feel free to reach out:

- 📧 **Email**: [hello@paulanik.com](mailto:hello@paulanik.com)
- 🌐 **Portfolio**: [paulanik.com](https://paulanik.com)
- 💼 **LinkedIn**: [LinkedIn Profile](https://www.linkedin.com/in/anik-paul-dev/)
- 📝 **Dev.to**: [Dev.to Profile](https://dev.to/anikpaul)

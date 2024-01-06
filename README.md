Project README
SpaceVue - Space Mission Monitoring Application
SpaceVue Logo

Welcome to SpaceVue, your window to the cosmos! SpaceVue is an innovative space mission monitoring application designed to bring you the latest and most comprehensive data on recent space missions. Whether you are a space enthusiast, a scientist, or just curious about what's happening beyond our atmosphere, SpaceVue provides a user-friendly dashboard that encapsulates the details of recent space missions.

Table of Contents
-Overview

-Features

-Getting Started

-Dependencies

-Usage

-Fork the repository

-Login details

-About the project

#Overview
SpaceVue offers a visually appealing and intuitive interface to explore the wonders of space. The application consists of a dashboard that displays information about recent space missions, including a grid with detailed data and a pie chart representing the success rate of missions.

#Features
User-friendly dashboard
Detailed grid displaying space mission data
Pie chart visualizing the success rate of missions
Quick filtering option for easy data exploration
Login feature


#Getting Started
To get started with SpaceVue, follow these steps:

Clone the repository: git clone [repository_url]
Install dependencies: npm install
Run the application: npm start

#Dependencies
SpaceVue relies on the following dependencies:

ag-grid-react: React component for Ag-Grid, providing grid functionality.
@mui/material: Material-UI components for the user interface.
ag-charts-react: React component for Ag-Charts, enabling the creation of interactive charts.
Make sure to install these dependencies using the package manager of your choice (e.g., npm).

#Usage
To use SpaceVue, follow these steps:

Launch the application using npm start.
Explore the space mission dashboard with the grid and pie chart.
Use the quick filter to easily search and filter mission data.

#Fork the repository.
Create a new branch for your feature or bug fix.
Make your changes and submit a pull request.

#Login details
The login credentials are hard coded into the source code. The credential are simple to use and it is as follows
Username: Admin
password: 1234

##ABOUT THE PROJECT
#Project Structure
The project seems to follow a typical React project structure. The main code is organized into functional components, and it utilizes popular libraries like Material-UI for UI components and Ag-Grid/Ag-Charts for displaying data in a grid and charts, respectively.

#Components
1. Dashboard Component (Dashboard):
This is the main component that represents the dashboard layout.
It contains an app bar with a logo, a "Logout" button, and a container with introductory text.
The GridAndChart component is rendered within the Dashboard component.
2. GridAndChart Component (GridAndChart):
This component is responsible for rendering the grid and pie chart.
It fetches space mission data from a JSON file using the fetch API when the component mounts.
The grid is rendered using AgGridReact, and the pie chart is rendered using AgChartsReact.
The CalculateSuccessfulMissions function calculates the percentage of successful missions and updates the pie chart data accordingly.
Quick filtering is enabled through a text input box, and changes trigger the onFilterTextBoxChanged function.

#Data Fetching
The application fetches space mission data from the Ag-Grid example JSON file using the fetch API.
The fetched data is processed to dynamically generate column definitions (colDefs) for the grid.

#Libraries
Ag-Grid: Used for rendering an interactive grid with space mission data.
Ag-Charts: Used for rendering an interactive pie chart to display the success rate of missions.
Material-UI: Utilized for styling components like the app bar, buttons, and text fields.

#Navigation
The react-router-dom library is used for navigation. The useNavigate hook is employed to navigate to the home page ('/') upon clicking the "Logout" button.

#Styling
The application uses CSS files (App.css) for styling.
Material-UI components come with their default styling.

#Asynchronous Operations
Data fetching and calculations are handled asynchronously using the useEffect hook.
The application provides loading and error messages during data fetching.

#Code Quality
The code is well-organized and follows React best practices.
Functions are modularized, promoting readability and maintainability.
Proper use of hooks like useState, useEffect, useCallback, and useRef for managing state and side effects.


#Conclusion
This React application, SpaceVue, showcases a well-structured and modular codebase for displaying and analyzing space mission data. It leverages popular libraries for efficient UI development and data visualization. Feel free to expand this README with specific details about the application's features, usage, and any additional functionalities.



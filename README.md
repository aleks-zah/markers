## Test Task for TypeScript React Developer

### How to run

To run the application, follow these steps:

1. Clone the repository.
2. Install the dependencies by running the command `npm install`.
3. Start the development server by running the command `npm run dev`.
4. Open your browser and navigate to `http://localhost:5173/`.

### Objective:
Create a simple application that fetches marker data from a mock API and displays it on a map using React and TypeScript. The application should also include a sidebar with a list of markers, and clicking on a marker in the sidebar should focus and zoom the map on the selected marker.

### Requirements:

#### API Integration:
- Use the provided mock API to fetch marker data.
- Display the list of markers in a sidebar on the right side.
- Display the markers on a map on the left side.

#### Map Functionality:
- Use React Leaflet to display the map and markers.
- When a marker in the sidebar is clicked, the map should zoom in and center on the clicked marker.

#### UI/UX:
- Use Material UI for styling the sidebar and any other components..

#### Provided Code:
https://codesandbox.io/p/sandbox/markers-krg68r?file=%2Fsrc%2Findex.ts


#### Expectations:
- Fetch data from the `getMarkersApi` function.
- Display the markers in a sidebar list on the right side of the screen.
- Show the markers on a React Leaflet map on the left side of the screen.
- Implement a click event on the sidebar list items to focus and zoom the map on the selected marker.

#### Tools and Libraries:
- React (required)
- TypeScript (required)
- React Leaflet (required)
- Material UI (preferred for styling)
- Any other libraries that you find useful.


#### Submission:
- Provide a link to a GitHub repository with your code.
- Ensure the repository includes a README file with instructions on how to run the application.

#### Bonus Points:
- Good code organization and readability.
- Responsive design.
- Additional features like marker clustering, custom marker icons, or additional interactivity.
- Add ability to measure distance between 2 markers.
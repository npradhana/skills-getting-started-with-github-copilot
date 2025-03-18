# Mergington High School Activities

This web application allows students to sign up for and unregister from extracurricular activities at Mergington High School.

## Features

- View available activities
- Sign up for an activity
- Unregister from an activity

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/mergington-high-school-activities.git
   ```
2. Navigate to the project directory:
   ```bash
   cd mergington-high-school-activities
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Usage

1. Start the development server:
   ```bash
   npm start
   ```
2. Open your browser and navigate to `http://localhost:3000`.

## Testing

Run the tests using Jest:
```bash
npm test
```

## API Endpoints

- `GET /activities`: Fetch the list of available activities.
- `POST /activities/:activity/signup?email=:email`: Sign up for an activity.
- `POST /activities/:activity/unregister?email=:email`: Unregister from an activity.

## File Structure

- `src/static/index.html`: The main HTML file.
- `src/static/styles.css`: The CSS file for styling.
- `src/static/app.js`: The JavaScript file containing the application logic.
- `src/static/app.test.js`: The JavaScript file containing the tests.

## License

This project is licensed under the MIT License.

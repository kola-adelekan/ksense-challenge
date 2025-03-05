# Webhook Server

This is a simple webhook server built using **Express** and **TypeScript**. It listens for incoming POST requests and stores the payload in a JSON file.

## Features
- Accepts POST requests
- Stores received payload in a `payload.json` file
- Uses async/await for file operations
- Configurable via environment variables

## Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

## Installation
1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd <project-folder>
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

## Configuration
Create a **`.env`** file in the root directory and set the port:
```sh
PORT=8000
```

## Running the Server
### With `nodemon` (Recommended for Development)
```sh
npm run dev
```
### Without `nodemon`
```sh
npm run start
```
Or using `ts-node`:
```sh
npx ts-node src/server.ts
```

## API Endpoint
### **POST /webhook**
- **URL:** `http://localhost:8000/`
- **Headers:** `Content-Type: application/json`
- **Body (JSON Example):**
  ```json
  {
    "fullName": "John Doe",
    "secretMessage": "This is a test message."
  }
  ```
- **Response (Success Example):**
  ```json
  {
    "message": "This is a test message."
  }
  ```
- **Error Responses:**
  - `400 Bad Request`: Payload already received
  - `500 Internal Server Error`: Error saving payload

## Testing with Postman
1. Open [Postman](https://www.postman.com/).
2. Set the request type to **POST**.
3. Enter `http://localhost:8000/` as the URL.
4. In the **Body** tab, select **raw** and choose **JSON** format.
5. Paste the example payload above and send the request.

## Stopping the Server
Press `CTRL + C` in the terminal.

## License
This project is licensed under the MIT License.


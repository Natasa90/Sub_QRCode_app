# QR Code Generation App

This is a Next.js-based application that allows users to generate QR codes by submitting a phone number. The app validates the phone number, calls an API to generate the QR code, and handles errors and loading states.

## Features
- **Phone Number Validation:** Ensures the phone number is valid before generating the QR code.
- **QR Code Generation:** Submits the phone number to an external API and displays the generated QR code.
- **Error Handling:** Displays appropriate error messages for invalid phone numbers or failed API calls.
- **Generate New QR Code:** Users can generate a new QR code by submitting a different phone number.

## Tech Stack
- **Next.js** (React framework)
- **React** (with hooks)
- **QRCode Library:** `react-qr-code` for rendering QR codes
- **UI Library:** `@shadcn/ui` for pre-built UI components

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/Sub_QRCode_app.git
    ```

2. Navigate to the project directory (replace `qr-code-app` with the name of your project folder if different):
    ```bash
    cd qr-code-app
    ```

3. Install dependencies:
    ```bash
    yarn install
    ```

4. Run the development server:
    ```bash
    yarn dev
    ```

5. Open the app in your browser:
    ```
    http://localhost:3000
    ```

## App Structure

- **`hooks` Folder**: Contains custom hooks that handle the QR code generation logic, including API interactions, loading states, and error handling, QR size etc
  
- **`utils/validationNum.ts`**: Helper function to validate the phone number input.

- **Main Form Component**: Contains the form for submitting the phone number and displays the generated QR code or an error message.

## Usage

1. Enter your **phone number** in the input field.
2. Click the **Submit** button to generate the QR code.
3. If the phone number is valid, the QR code will be displayed. If it's invalid, an error message will appear.
4. You can submit a new phone number to generate a new QR code.

## Error Handling

- If the phone number is invalid, an error message will be shown.
- If the QR code generation fails due to an API issue, an error message will be displayed.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature-name`).
6. Open a pull request.


## Troubleshooting

- **QR Code not showing:** Ensure the phone number is valid. Invalid numbers will not generate a QR code.
- **API errors:** Check your network connection or verify the API endpoint for any issues.
- **Error messages:** The app displays error messages to guide the user in case of invalid input or failed QR code generation.


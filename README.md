# Color Change Loop

This project demonstrates a simple color-changing loop that stops when the user presses the first letter of the current color. The loop can be resumed by pressing the spacebar.

## Features
- Automatically changes the background color of a circle element every 2 seconds.
- Stops the color-changing loop when the user presses the first letter of the current color.
- Resumes the color-changing loop when the user presses the spacebar.

## Technologies Used
- HTML
- CSS
- JavaScript

## How It Works
- The `circle` element's background color changes every 2 seconds through a `setInterval` function.
- The `colors` array contains the list of colors that the circle will cycle through.
- An event listener for the `keydown` event checks if the pressed key matches the first letter of the current color.
  - If it matches, the interval is cleared, stopping the color change.
  - If the spacebar is pressed and the loop is not running, the interval is reset, and the loop resumes.

## Usage
1. Clone this repository to your local machine.
2. Open the `index.html` file in a web browser to see the color-changing circle.
3. Press the first letter of the displayed color to stop the loop.
4. Press the spacebar to resume the loop.

You can check out the live version of the project [here](https://dynamic-color-loop.vercel.app/).


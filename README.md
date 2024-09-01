# Digital Clock
This project creates a digital clock that displays the current time on a web page using HTML, CSS, and JavaScript.

## Files

### 1. HTML ('index.html')

Creates a container `<div>` with the ID `clock` where the time will be displayed.

### 2. CSS ('styles.css')
Styles the body to center the clock and sets the clock's font size and color.

### 3. JavaScript('script.js'):
getCurrentTime function creates a new Date object and extracts the current hours, minutes, and seconds. Each value is formatted to ensure it is always two digits long.
setInterval calls getCurrentTime every second to update the time on the page.
The initial call to getCurrentTime ensures the clock shows the correct time immediately when the page loads..

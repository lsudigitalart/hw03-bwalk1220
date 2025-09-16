function setup() {
    createCanvas(800, 800);
    angleMode(DEGREES);
}

function draw() {
    background(0);
    // Set the width and height of each scale
    let scaleWidth = 60;
    let scaleHeight = 50;

    // Set the percentage of scaleHeight that each row overlaps the previous row
    let overlap = 0.5; 

    // Calculate the number of columns needed to fill the canvas horizontally
    let cols = Math.ceil(width / scaleWidth) + 1;

    // Calculate the number of rows needed to fill the canvas vertically, accounting for overlap
    let rows = Math.ceil(height / (scaleHeight * (1 - overlap))) + 1;

    // Increase the mouse over area by a factor (e.g., 1.5 times the original radius)
    let mouseOverRadius = (scaleWidth / 2) * 4.5;

    // Loop through each row
    for (let row = 0; row < rows; row++) {
        // Loop through each column in the current row
        for (let col = 0; col < cols; col++) {
            // Calculate the x position for the current scale
            // Offset every other row by half a scale width for a staggered effect
            let x = col * scaleWidth + (row % 2 === 0 ? 0 : scaleWidth / 2);

            // Calculate the y position for the current scale, accounting for overlap
            let y = row * (scaleHeight * (1 - overlap));

            // Check if mouse is over this scale
            let isMouseOver = dist(mouseX, mouseY, x, y) < mouseOverRadius;

            // Alternate fill colors for each scale to create a pattern
            if ((row * cols + col) % 2 === 0) {
                if (isMouseOver) {
                    fill(120, 50, 180); // shifted color when hovered
                } else {
                    fill(90, 0, 120); // dark purple
                }
            } else {
                if (isMouseOver) {
                    fill(220, 150, 255); // shifted color when hovered
                } else {
                    fill(180, 100, 255); // lighter purple
                }
            }

            // Set the stroke color and weight for the outline of each scale
            stroke(0, 0, 130);
            strokeWeight(2);

            // Draw a circle to represent the scale
            ellipse(x, y, scaleWidth, scaleHeight);
            // Draw an inner circle inside each scale
            noStroke();
            if (isMouseOver) {
                fill(255, 200, 255, 120); // lighter pink when hovered
            } else {
                fill(200, 50, 200, 80); // light pink with some transparency
            }
            ellipse(x, y, scaleWidth * 0.5, scaleHeight * 0.5);
        }
    }
}
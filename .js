function drawDiamond (x, y, size) {
    fill ("#0C3730");
    rect ((x + 80) * size, (y) * size, 80 * size, 20 * size, "fill");
    rect ((x + 60) * size, (y + 20) * size, 20 * size, 20 * size, "fill");
    rect ((x + 40) * size, (y + 40) * size, 20 * size, 20 * size, "fill");
    rect ((x + 20) * size, (y + 60) * size, 20 * size, 40 * size, "fill");
    rect ((x) * size, (y + 100) * size, 20 * size, 80 * size, "fill");
    rect ((x + 20) * size, (y + 180) * size, 20 * size, 40 * size, "fill");
    rect ((x + 40) * size, (y + 220) * size, 20 * size, 20 * size, "fill");
    rect ((x + 60) * size, (y + 240) * size, 120 * size, 20 * size, "fill");
    rect ((x + 180) * size, (y + 220) * size, 20 * size, 20 * size, "fill");
    rect ((x + 200) * size, (y + 180) * size, 20 * size, 40 * size, "fill");
    rect ((x + 220) * size, (y + 120) * size, 20 * size, 60 * size, "fill");
    rect ((x + 200) * size, (y + 80) * size, 20 * size, 40 * size, "fill");
    rect ((x + 160) * size, (y + 20) * size, 20 * size, 40 * size, "fill");
    rect ((x + 180) * size, (y + 40) * size, 20 * size, 40 * size, "fill");
    fill ("white");
    rect ((x + 80) * size, (y + 20) * size, 80 * size, 20 * size, "fill");
    rect ((x + 60) * size, (y + 40) * size, 20 * size, 20 * size, "fill");
    rect ((x + 40) * size, (y + 60) * size, 20 * size, 40 * size, "fill");
    rect ((x + 20) * size, (y + 100) * size, 20 * size, 80 * size, "fill");
    rect ((x + 120) * size, (y + 60) * size, 20 * size, 20 * size, "fill");
    rect ((x + 80) * size, (y + 80) * size, 20 * size, 20 * size, "fill");
    rect ((x + 60) * size, (y + 100) * size, 20 * size, 20 * size, "fill");
    fill ("#D1FFF3");
    rect ((x + 60) * size, (y + 60) * size, 20 * size, 20 * size, "fill");
    rect ((x + 40) * size, (y + 140) * size, 20 * size, 20 * size, "fill");
    rect ((x + 60) * size, (y + 120) * size, 20 * size, 20 * size, "fill");
    rect ((x + 140) * size, (y + 40) * size, 20 * size, 20 * size, "fill");
    rect ((x + 100) * size, (y + 80) * size, 60 * size, 20 * size, "fill");
    fill ("#A2F6E7");
    rect ((x + 80) * size, (y + 40) * size, 40 * size, 40 * size, "fill");
    rect ((x + 120) * size, (y + 40) * size, 20 * size, 20 * size, "fill");
    rect ((x + 60) * size, (y + 80) * size, 20 * size, 20 * size, "fill");
    rect ((x + 40) * size, (y + 100) * size, 20 * size, 40 * size, "fill");
    rect ((x + 80) * size, (y + 100) * size, 80 * size, 60 * size, "fill");
    fill ("#4AEDD1");
    rect ((x + 40) * size, (y + 160) * size, 40 * size, 20 * size, "fill");
    rect ((x + 40) * size, (y + 180) * size, 20 * size, 20 * size, "fill");
    rect ((x + 140) * size, (y + 60) * size, 40 * size, 20 * size, "fill");
    rect ((x + 160) * size, (y + 80) * size, 20 * size, 20 * size, "fill");
    rect ((x + 180) * size, (y + 100) * size, 20 * size, 40 * size, "fill");
    fill ("#2CCDB1");
    rect ((x + 60) * size, (y + 140) * size, 20 * size, 20 * size, "fill");
    rect ((x + 80) * size, (y + 180) * size, 80 * size, 60 * size, "fill");
    rect ((x + 160) * size, (y + 160) * size, 40 * size, 20 * size, "fill");
    rect ((x + 180) * size, (y + 180) * size, 20 * size, 20 * size, "fill");
    fill ("#30DBBD");
    rect ((x + 160) * size, (y + 40) * size, 20 * size, 20 * size, "fill");
    rect ((x + 180) * size, (y + 80) * size, 20 * size, 20 * size, "fill");
    rect ((x + 200) * size, (y + 120) * size, 20 * size, 20 * size, "fill");
    rect ((x + 40) * size, (y + 200) * size, 20 * size, 20 * size, "fill");
    fill ("#209581");
    rect ((x + 60) * size, (y + 220) * size, 20 * size, 20 * size, "fill");
    rect ((x + 80) * size, (y + 160) * size, 80 * size, 20 * size, "fill");
    rect ((x + 160) * size, (y + 220) * size, 20 * size, 20 * size, "fill");
    rect ((x + 180) * size, (y + 200) * size, 20 * size, 20 * size, "fill");
    rect ((x + 200) * size, (y + 160) * size, 20 * size, 20 * size, "fill");
    rect ((x + 160) * size, (y + 100) * size, 20 * size, 60 * size, "fill");
    fill ("#1B7B6B");
    rect ((x + 60) * size, (y + 180) * size, 20 * size, 40 * size, "fill");
    rect ((x + 160) * size, (y + 180) * size, 20 * size, 40 * size, "fill");
    rect ((x + 180) * size, (y + 140) * size, 40 * size, 20 * size, "fill");
}

function drawPlatform(x, y, w, h1, h2, color1, color2) {
    fill (color1);
    rect (x, y, w, h1, "fill");
    fill (color2);
    rect (x, y + h1, w, h2, "fill");
}// h1 is the height of the top rectangle, color 1 is the color of the top rectangle

drawDiamond(2, 2, 2.5);
drawDiamond(3000, 2900, 0.2);

drawPlatform(700, 350, 250, 20, 30, "blue", "black");
drawPlatform(600, 100, 350, 50, 10, "grey", "green");
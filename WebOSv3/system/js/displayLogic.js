

function startResolutionUpdateCycle(interval) {
    setInterval(() => {
        screenWidth = screen.width;
        screenHeight = screen.height;
    }, interval);
}
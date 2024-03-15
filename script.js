document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("horizontalcontent");
    let isScrolling = false;

    container.addEventListener("wheel", (e) => {
        if (!isScrolling) {
            container.scrollLeft += (e.deltaY || e.deltaX) * 5; // Adjust the multiplier for faster scrolling
            e.preventDefault();
            isScrolling = true;

            setTimeout(() => {
                isScrolling = false;
            }, 200); // Adjust the delay as needed
        }
    });
});

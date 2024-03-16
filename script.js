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

document.addEventListener("DOMContentLoaded", function() {
    // Get all elements with the 'title' attribute
    var elementsWithTooltip = document.querySelectorAll('[title]');
    
    // Loop through each element and attach event listener
    elementsWithTooltip.forEach(function(element) {
        // Attach 'mouseover' event listener to show tooltip
        element.addEventListener('mouseover', function() {
            // Save the current title
            var title = this.getAttribute('title');
            // Remove the title attribute
            this.removeAttribute('title');
            // Add it back immediately
            this.setAttribute('title', title);
        });
    });
});

 const fullView = (imgLink) => {
    document.getElementById("fullImage").src = imgLink;
    document.getElementById("fullImageView").style.display = "block";
 }

 const closeFullView = () => {
    document.getElementById("fullImageView").style.display = "none";
    document.getElementById("fullImageView").style.cursor = "pointer";
 }
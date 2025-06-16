document.addEventListener('DOMContentLoaded', function() {
    // Select all navigation links
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Prevent the default anchor link behavior
            e.preventDefault();

            // Get the target element's ID from the href attribute
            let targetId = this.getAttribute('href');
            let targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Calculate the position of the target element
                // We subtract the header height to prevent it from overlapping the section title
                let headerOffset = 70; // Adjust this value if your header height changes
                let elementPosition = targetElement.getBoundingClientRect().top;
                let offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                // Smoothly scroll to the calculated position
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });
});
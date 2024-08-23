document.addEventListener('DOMContentLoaded', () => {
  // Function to handle smooth scrolling
  function handleSmoothScroll(event) {
    const anchor = event.currentTarget;
    const href = anchor.getAttribute('href');

    // Check if href starts with '#'
    if (href && href.startsWith('#')) {
      event.preventDefault();
      
      const targetId = href.substring(1); // Remove '#' from href
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        // Smooth scroll to the target element
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  }

  // Add event listener to all anchor links
  const anchors = document.querySelectorAll('a[href^="#"]');
  anchors.forEach(anchor => {
    anchor.addEventListener('click', handleSmoothScroll);
  });
});

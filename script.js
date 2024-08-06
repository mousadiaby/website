document.addEventListener('DOMContentLoaded', function() {
  // Select all elements with the class 'opening-page'
  const openingPages = document.querySelectorAll('.opening-page');

  // Function to hide all selected elements
  function hideOpeningPage() {
    openingPages.forEach(function(page) {
      page.style.display = 'none';
    });
  }

  // Call the function to hide the elements

});

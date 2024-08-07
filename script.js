document.addEventListener('DOMContentLoaded', function() {
  // Select elements
  const openingPages = document.querySelectorAll('.opening-page');
  const logPressed = document.querySelector('.log-pressed');
  const usernameInput = document.getElementById('usernameid');
  const signInButton = document.getElementById('sign-in-button');
  const submitUser = document.getElementById('submituser');
  const userwarning = document.getElementById('user-warning')

  // Function to hide all opening-page elements
  function hideOpeningPage() {
    openingPages.forEach(function(page) {
      page.style.display = 'none';
    });
  }

  // Function to hide the log-pressed element
  function hideLogPressed() {
    if (logPressed) {
      logPressed.style.display = 'none';
    }
  }

  // Function to show the log-pressed element
  function showLogPressed() {
    if (logPressed) {
      logPressed.style.display = 'flex'; // Changed to 'flex' for better layout control
    }
  }

  // Function to handle button click
  function buttonClicked() {
    if (usernameInput.value.trim() === '') {
      console.log("You must write something"); // Handle empty input
      userwarning.textContent ="You must write something for your user name";
      
    } else {
 // Handle non-empty input
      const usernamevalue = usernameInput.value
  
    }
  }

  // Clear the input field when the user focuses on it
  usernameInput.addEventListener('focus', function() {
    if (usernameInput.value === 'username/email/phone') {
      usernameInput.value = '';
    }
  });

  // Change background color and manage visibility on "sign in" button click
  signInButton.addEventListener('click', function() {
    document.body.style.backgroundColor = 'yellow'; // Change background color to yellow
    hideOpeningPage();
    showLogPressed();
  });

  // Handle submit button click
  submitUser.addEventListener('click', function() {
    buttonClicked();
  });

  // Initially hide the log-pressed element
  hideLogPressed();
});

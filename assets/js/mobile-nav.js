document.addEventListener("DOMContentLoaded", function() {
  console.log("Mobile navigation script loaded");
  
  const nav = document.querySelector('.greedy-nav');
  const toggleButton = nav ? nav.querySelector('button') : null;
  const visibleLinks = nav ? nav.querySelector('.visible-links') : null;
  const hiddenLinks = nav ? nav.querySelector('.hidden-links') : null;
  
  if (!nav || !toggleButton || !visibleLinks || !hiddenLinks) {
    console.error("Mobile nav: Required elements not found", {nav, toggleButton, visibleLinks, hiddenLinks});
    return;
  }
  
  console.log("Mobile nav: All elements found, setting up...");
  
  // Force hamburger button to be visible on mobile
  function ensureButtonVisible() {
    if (window.innerWidth <= 768) {
      toggleButton.style.display = 'block';
      console.log("Mobile nav: Button made visible");
    } else {
      toggleButton.style.display = '';
    }
  }
  
  // Populate hidden links with navigation items on mobile
  function populateHiddenLinks() {
    if (window.innerWidth <= 768) {
      hiddenLinks.innerHTML = '';
      const navItems = visibleLinks.querySelectorAll('.masthead__menu-item:not(.masthead__menu-item--lg)');
      
      console.log("Mobile nav: Found", navItems.length, "navigation items to add to mobile menu");
      
      navItems.forEach(item => {
        const clonedItem = item.cloneNode(true);
        clonedItem.style.display = 'block'; // Ensure visibility
        hiddenLinks.appendChild(clonedItem);
      });
      
      // Ensure the dropdown is hidden initially
      hiddenLinks.classList.add('hidden');
    }
  }
  
  // Toggle hidden menu visibility
  function toggleHiddenMenu() {
    if (window.innerWidth <= 768) {
      const isHidden = hiddenLinks.classList.contains('hidden');
      if (isHidden) {
        hiddenLinks.classList.remove('hidden');
        console.log("Mobile nav: Menu opened");
      } else {
        hiddenLinks.classList.add('hidden');
        console.log("Mobile nav: Menu closed");
      }
    }
  }
  
  // Handle hamburger button click
  toggleButton.addEventListener('click', function(e) {
    console.log("Mobile nav: Button clicked");
    e.preventDefault();
    e.stopPropagation();
    toggleHiddenMenu();
  });
  
  // Close menu when clicking outside
  document.addEventListener('click', function(e) {
    if (!nav.contains(e.target)) {
      hiddenLinks.classList.add('hidden');
    }
  });
  
  // Handle window resize
  window.addEventListener('resize', function() {
    ensureButtonVisible();
    if (window.innerWidth > 768) {
      hiddenLinks.classList.add('hidden');
    } else {
      populateHiddenLinks();
    }
  });
  
  // Initial setup
  ensureButtonVisible();
  populateHiddenLinks();
  
  console.log("Mobile navigation setup complete");
});

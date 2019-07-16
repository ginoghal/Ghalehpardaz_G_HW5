(() => {
  console.log("fired!");

  let mobileNav = document.querySelector('.nav'),
      navPanel = document.querySelector('#burgerCon'),
      navLinks = navPanel.querySelectorAll('a');

  function toggleNav(event){
    //e is the event object, by default anchor tags try to navigate somewhere.
    event.preventDefault();
    console.log('should show nav Dropdown');

    if (this.nodeName == "A"){
       debugger;
      //we clicked on an anchor tag, so do some navigation
      window.scrollTo({
        //we can ask the window to scroll to an element on the page => smoothscroll effect
        //top: this.offsetTop,
        //behavior: 'smooth'
      })
    }

    navPanel.classList.toggle('show-mobile-nav');
  }

  mobileNav.addEventListener('click', toggleNav);
  navLinks.forEach(link => link.addEventListener('click', toggleNav));


})();

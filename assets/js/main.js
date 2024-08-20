let realestate = new Boolean(false)
showRealEstate = () => {
    if (realestate == false) {
        document.getElementById("realestate").innerHTML = `
            <div class="row about">
                <div class="col-lg-6 mt-4">
                    <img src="/assets/img/berkshire-office.png" class="img-fluid" alt="Berkshire Hathaway HomeServices - Real Estate One Professionals" />
                </div>
                <div class="col-lg-6 pt-4 pt-lg-0 mt-4 content">
                    <a href="https://www.bhhs.com/michigan-real-estate-mi301/saginaw/oid-mi301-046" title="Berkshire Hathaway HomeServices - Real Estate One Professionals" target="_blank"><h3>Berkshire Hathaway HomeServices - Saginaw, MI</h3></a>
                    <p>
                        2825 Bay Rd<br>
                        Saginaw, MI 48603
                    </p>
                    <p class="text-smaller">
                        <a class="link" href="#about" title="About me">Michael Mark</a>Salesperson, Agent<br>
                        <a class="link" href="https://www.bhhsmichiganrealestate.com/real-estate-agent/101/joy-schneller" title="Manager Details">Joy Scheller</a>Broker, Owner</br>
                        Cell Phone: <a class="link" href="#contact" title="Contact Details">Contact Me</a><br>
                        Office Phone: 989-790-9292
                    </p>
                </div>
            </div>
      `
        realestate = true;
    } else {
        document.getElementById("realestate").innerHTML = ''
        realestate = false;
    }
}

let code = new Boolean(false)
showCode = () => {
  if (code == false) {
    document.getElementById("code").innerHTML=`<div class="buttons"><br>
      <button>Java</button> 
      <button>C</button> 
      <button>C#</button> 
      <button>C++</button> 
      <button>JavaScript</button><br>
      <button>HTML</button> 
      <button>CSS</button> 
      <button>MySQL</button> <br>
      <button>MATLAB</button> 
      <button>Visual Basic</button> 
      <button>PHP</button></div>
      `
    code = true;
  } else {
    document.getElementById("code").innerHTML=''
    code = false;
  }
}

let handy = new Boolean(false)
showHandy = () => {
  if (handy == false) {
    document.getElementById("handy").innerHTML=`<div class="buttons"><br>
      <button>Plumbing</button> 
      <button>Electrical</button> 
      <button>Drywall</button> 
      <button>Flooring</button> 
      <button>Roofing</button> </a><br>
      <button>HVAC</button> 
      <button>Construction</button> 
      <button>Painting</button> 
      <button>Power Tools</button> <br>
      `
      handy = true;
  } else {
    document.getElementById("handy").innerHTML=''
    handy = false;
  }
}


let music = new Boolean(false)
playMusic = () => {
  if (music == false) {
    document.getElementById("soundcloud").innerHTML='<p><br><div><a href="https://soundcloud.com/michael-mark-829916267/sets/wendy-and-michaels-piano-cd" title="Wendy and Michael&#x27;s Piano CD" target="_blank" style="text-decoration: none;"><h3>Relax and Enjoy My Music</h3></a></div><iframe width="65%" height="350" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/547983393&color=%23ff5500&auto_play=true&hide_related=false&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false"></iframe></p>'
    music = true;
  } else {
    document.getElementById("soundcloud").innerHTML=''
    music = false;
  }
}

(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos,
      behavior: 'smooth'
    })
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('body').classList.toggle('mobile-nav-active')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let body = select('body')
      if (body.classList.contains('mobile-nav-active')) {
        body.classList.remove('mobile-nav-active')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Preloader
   */
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }

  /**
   * Hero type effect
   */
  const typed = select('.typed')
  if (typed) {
    let typed_strings = typed.getAttribute('data-typed-items')
    typed_strings = typed_strings.split(',')
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  /**
   * Skills animation
   */
  let skilsContent = select('.skills-content');
  if (skilsContent) {
    new Waypoint({
      element: skilsContent,
      offset: '80%',
      handler: function(direction) {
        let progress = select('.progress .progress-bar', true);
        progress.forEach((el) => {
          el.style.width = el.getAttribute('aria-valuenow') + '%'
        });
      }
    })
  }

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        portfolioIsotope.on('arrangeComplete', function() {
          AOS.refresh()
        });
      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Initiate portfolio details lightbox 
   */
  const portfolioDetailsLightbox = GLightbox({
    selector: '.portfolio-details-lightbox',
    width: '90%',
    height: '90vh'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

  /**
   * Initiate Pure Counter 
   */
  new PureCounter();

})()
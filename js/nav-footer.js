// ── TRIGERRUS — Common Navbar + Footer injector ──
(function(){
  var path = window.location.pathname;
  var isRoot = path.endsWith('index.html') || path.endsWith('/');
  var base = isRoot ? '' : '../';

  // ── NAVBAR HTML ──
  var navHTML = '<nav class="navbar">'
    + '<a href="' + base + 'index.html" class="logo" style="padding:0;display:flex;align-items:center;gap:0.6rem;text-decoration:none;">'
    + '<img src="' + base + 'assets/logo7.png" alt="TRIGERRUS" style="height:50px;width:auto;object-fit:contain;display:block;">'
    + '<span class="logo-text">TRIGERRUS</span>'
    + '</a>'
    + '<ul class="nav-links" id="navLinks">'
    + '<li><a href="' + base + 'index.html">Home</a></li>'
    + '<li><a href="' + base + 'pages/courses.html">Courses</a></li>'
    + '<li><a href="' + base + 'pages/pricing.html">Pricing</a></li>'
    + '<li><a href="' + base + 'pages/features.html">Features</a></li>'
    + '<li><a href="' + base + 'pages/testimonials.html">Testimonials</a></li>'
    + '<li><a href="' + base + 'pages/contact.html">Contact</a></li>'
    + '</ul>'
    + '<a href="' + base + 'pages/contact.html" class="btn-demo">BOOK A DEMO</a>'
    + '<button class="hamburger" id="hamBtn" aria-label="Menu"><span></span><span></span><span></span></button>'
    + '</nav>';

  // ── FOOTER HTML ──
  var yr = new Date().getFullYear();
  var footerHTML = '<footer>'
    + '<div class="footer-grid">'
    + '<div>'
    + '<a href="' + base + 'index.html" class="logo" style="display:inline-flex;align-items:center;gap:0.6rem;margin-bottom:1rem;padding:0;text-decoration:none;">'
    + '<img src="' + base + 'assets/logo7.png" alt="TRIGERRUS" style="height:50px;width:auto;object-fit:contain;display:block;">'
    + '<span class="logo-text">TRIGERRUS</span>'
    + '</a>'
    + '<p style="color:var(--text-secondary);font-size:1rem;margin-top:1rem;max-width:280px;line-height:1.7;">Next-gen tech institute for RPA, UiPath, AI Agentic & Python Automation careers.</p>'
    + '</div>'
    + '<div><h4 style="color:var(--cyan);font-size:0.8rem;letter-spacing:2px;text-transform:uppercase;margin-bottom:1.2rem;">Quick Links</h4>'
    + '<ul class="footer-links">'
    + '<li><a href="' + base + 'index.html">Home</a></li>'
    + '<li><a href="' + base + 'pages/courses.html">Courses</a></li>'
    + '<li><a href="' + base + 'pages/pricing.html">Pricing</a></li>'
    + '<li><a href="' + base + 'pages/features.html">Features</a></li>'
    + '</ul></div>'
    + '<div><h4 style="color:var(--cyan);font-size:0.8rem;letter-spacing:2px;text-transform:uppercase;margin-bottom:1.2rem;">Company</h4>'
    + '<ul class="footer-links">'
    + '<li><a href="' + base + 'pages/testimonials.html">Testimonials</a></li>'
    + '<li><a href="' + base + 'pages/contact.html">Contact Us</a></li>'
    + '</ul></div>'
    + '<div><h4 style="color:var(--cyan);font-size:0.8rem;letter-spacing:2px;text-transform:uppercase;margin-bottom:1.2rem;">Contact</h4>'
    + '<ul class="footer-links">'
    + '<li><a href="mailto:info.trigerrus@gmail.com">info.trigerrus@gmail.com</a></li>'
    + '<li><a href="tel:+916379568241">+91 63795 68249</a></li>'
    + '<li style="color:var(--text-secondary);">Coimbatore, Tamil Nadu</li>'
    + '</ul></div>'
    + '</div>'
    + '<div class="footer-bottom">'
    + '<span>© ' + yr + ' TRIGERRUS. All rights reserved.</span>'
    + '<span style="color:var(--cyan);">Made by <strong>Sai</strong> ⚡</span>'
    + '</div>'
    + '</footer>';

  document.addEventListener('DOMContentLoaded', function(){

    // ── Inject navbar using insertAdjacentHTML (keeps DOM stable) ──
    var navEl = document.getElementById('navbar-placeholder');
    if(navEl){
      navEl.insertAdjacentHTML('afterend', navHTML);
      navEl.parentNode.removeChild(navEl);
    }

    // ── Inject footer ──
    var footEl = document.getElementById('footer-placeholder');
    if(footEl){
      footEl.insertAdjacentHTML('afterend', footerHTML);
      footEl.parentNode.removeChild(footEl);
    }

    // ── Query elements by ID (guaranteed unique) ──
    var ham    = document.getElementById('hamBtn');
    var nav    = document.getElementById('navLinks');
    var navbar = document.querySelector('.navbar');

    // ── Active link ──
    var page = window.location.pathname.split('/').pop() || 'index.html';
    if(nav){
      nav.querySelectorAll('a').forEach(function(a){
        if((a.getAttribute('href')||'').split('/').pop() === page)
          a.classList.add('active');
      });
    }

    // ── Hamburger toggle ──
    function closeMenu(){
      if(!nav) return;
      nav.classList.remove('open');
      if(ham){
        ham.querySelectorAll('span').forEach(function(s){ s.style.cssText=''; });
        ham.setAttribute('aria-expanded','false');
      }
    }

    function openMenu(){
      if(!nav) return;
      nav.classList.add('open');
      if(ham){
        var spans = ham.querySelectorAll('span');
        spans[0].style.cssText='transform:translateY(7px) rotate(45deg);background:#00f5d4;';
        spans[1].style.cssText='opacity:0;';
        spans[2].style.cssText='transform:translateY(-7px) rotate(-45deg);background:#00f5d4;';
        ham.setAttribute('aria-expanded','true');
      }
    }

    if(ham){
      ham.addEventListener('click', function(e){
        e.preventDefault();
        e.stopPropagation();
        if(nav && nav.classList.contains('open')){ closeMenu(); } else { openMenu(); }
      });
    }

    // Close on nav link click
    if(nav){
      nav.querySelectorAll('a').forEach(function(a){
        a.addEventListener('click', function(){ closeMenu(); });
      });
    }

    // Close on outside click
    document.addEventListener('click', function(e){
      if(!nav || !ham) return;
      if(!navbar.contains(e.target)) closeMenu();
    });

    // ── Scroll navbar shadow ──
    if(navbar){
      window.addEventListener('scroll', function(){
        navbar.classList.toggle('scrolled', window.scrollY > 50);
      });
    }

  });
})();
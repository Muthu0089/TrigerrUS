// ── TRIGERRUS — Common Navbar + Footer injector ──
(function(){
  var path = window.location.pathname;
  var isRoot = path.endsWith('index.html') || path.endsWith('/');
  var base = isRoot ? '' : '../';

  // ── NAVBAR ──
  var navHTML = `
  <nav class="navbar">
    <a href="${base}index.html" class="logo" style="padding:0;">
      <img src="${base}assets/logo2.png" alt="TRIGERRUS" style="height:38px;width:200px;object-fit:contain;display:block;">
    </a>
    <span class="logo-text">TRIGERRUS</span>
    <ul class="nav-links">
      <li><a href="${base}index.html">Home</a></li>
      <li><a href="${base}pages/courses.html">Courses</a></li>
      <li><a href="${base}pages/pricing.html">Pricing</a></li>
      <li><a href="${base}pages/features.html">Features</a></li>
      <li><a href="${base}pages/testimonials.html">Testimonials</a></li>
      <li><a href="${base}pages/contact.html">Contact</a></li>
    </ul>
    <a href="${base}pages/contact.html" class="btn-demo">BOOK A DEMO</a>
    <button class="hamburger" aria-label="Menu"><span></span><span></span><span></span></button>
  </nav>`;

  // ── FOOTER ──
  var yr = new Date().getFullYear();
  var footerHTML = `
  <footer>
    <div class="footer-grid">
      <div>
        <a href="${base}index.html" class="logo" style="display:inline-flex;margin-bottom:1rem;padding:0;">
          <img src="${base}assets/logo2.png" alt="TRIGERRUS" style="height:34px;width:auto;object-fit:contain;display:block;">
        </a>
        <p style="color:var(--text-secondary);font-size:1rem;margin-top:1rem;max-width:280px;line-height:1.7;">
          Next-gen tech institute for RPA, UiPath, AI Agentic & Python Automation careers.
        </p>
      </div>
      <div>
        <h4 style="color:var(--cyan);font-size:0.8rem;letter-spacing:2px;text-transform:uppercase;margin-bottom:1.2rem;">Quick Links</h4>
        <ul class="footer-links">
          <li><a href="${base}index.html">Home</a></li>
          <li><a href="${base}pages/courses.html">Courses</a></li>
          <li><a href="${base}pages/pricing.html">Pricing</a></li>
          <li><a href="${base}pages/features.html">Features</a></li>
        </ul>
      </div>
      <div>
        <h4 style="color:var(--cyan);font-size:0.8rem;letter-spacing:2px;text-transform:uppercase;margin-bottom:1.2rem;">Company</h4>
        <ul class="footer-links">
          <li><a href="${base}pages/testimonials.html">Testimonials</a></li>
          <li><a href="${base}pages/contact.html">Contact Us</a></li>
        </ul>
      </div>
      <div>
        <h4 style="color:var(--cyan);font-size:0.8rem;letter-spacing:2px;text-transform:uppercase;margin-bottom:1.2rem;">Contact</h4>
        <ul class="footer-links">
          <li><a href="mailto:info.trigerrus@gmail.com">info.trigerrus@gmail.com</a></li>
          <li><a href="tel:+916379568241">+91 63795 68241</a></li>
          <li style="color:var(--text-secondary);">Coimbatore, Tamil Nadu</li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© ${yr} TRIGERRUS. All rights reserved.</span>
      <span style="color:var(--cyan);">Made by <strong>Sai</strong> ⚡ </span>
    </div>
  </footer>`;

  document.addEventListener('DOMContentLoaded', function(){
    // Inject navbar
    var navEl = document.getElementById('navbar-placeholder');
    if(navEl) navEl.outerHTML = navHTML;

    // Inject footer
    var footEl = document.getElementById('footer-placeholder');
    if(footEl) footEl.outerHTML = footerHTML;

    // Active link highlight
    var page = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(function(a){
      if((a.getAttribute('href')||'').split('/').pop() === page)
        a.classList.add('active');
    });

    // Hamburger
    var ham = document.querySelector('.hamburger');
    var nav = document.querySelector('.nav-links');
    if(ham) ham.addEventListener('click', function(){ nav.classList.toggle('open'); });
    document.querySelectorAll('.nav-links a').forEach(function(a){
      a.addEventListener('click', function(){ nav.classList.remove('open'); });
    });

    // Scroll navbar
    var navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function(){
      navbar && navbar.classList.toggle('scrolled', window.scrollY > 50);
    });
  });
})();
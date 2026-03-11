// ==================== SPARKLE CANVAS ====================
function initSparkles() {
  const canvas = document.createElement('canvas');
  canvas.id = 'sparkleCanvas';
  Object.assign(canvas.style, {
    position: 'fixed', inset: '0', width: '100%', height: '100%',
    zIndex: '-1', pointerEvents: 'none', userSelect: 'none'
  });
  document.body.insertBefore(canvas, document.body.firstChild);
  const ctx = canvas.getContext('2d');

  function resize() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
  resize();
  window.addEventListener('resize', resize);

  const COLORS = ['rgba(0,245,212,','rgba(168,85,247,','rgba(255,255,255,','rgba(59,130,246,'];

  class Sparkle {
    constructor() { this.reset(true); }
    reset(init = false) {
      this.x = Math.random() * canvas.width;
      this.y = init ? Math.random() * canvas.height : canvas.height + 10;
      this.size = Math.random() * 2.2 + 0.5;
      this.speedY = -(Math.random() * 0.4 + 0.1);
      this.speedX = (Math.random() - 0.5) * 0.25;
      this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
      this.alpha = 0; this.maxAlpha = Math.random() * 0.8 + 0.3;
      this.fadeIn = Math.random() * 0.015 + 0.005;
      this.fadeOut = Math.random() * 0.006 + 0.002;
      this.fading = false;
      this.twinkleSpeed = Math.random() * 0.04 + 0.01;
      this.twinklePhase = Math.random() * Math.PI * 2;
      this.isCross = Math.random() < 0.25;
    }
    update() {
      this.y += this.speedY; this.x += this.speedX; this.twinklePhase += this.twinkleSpeed;
      if (!this.fading) { this.alpha += this.fadeIn; if (this.alpha >= this.maxAlpha) this.fading = true; }
      else { this.alpha -= this.fadeOut; }
      if (this.alpha <= 0 || this.y < -10) this.reset();
    }
    draw() {
      const twinkle = this.alpha * (0.7 + 0.3 * Math.sin(this.twinklePhase));
      ctx.save(); ctx.globalAlpha = Math.max(0, twinkle);
      if (this.isCross) {
        ctx.strokeStyle = this.color + '1)'; ctx.lineWidth = this.size * 0.6;
        ctx.shadowBlur = this.size * 5; ctx.shadowColor = this.color + '0.9)';
        const s = this.size * 3.5;
        ctx.beginPath();
        ctx.moveTo(this.x-s,this.y); ctx.lineTo(this.x+s,this.y);
        ctx.moveTo(this.x,this.y-s); ctx.lineTo(this.x,this.y+s);
        ctx.stroke();
      } else {
        const grd = ctx.createRadialGradient(this.x,this.y,0,this.x,this.y,this.size*3);
        grd.addColorStop(0,this.color+'1)'); grd.addColorStop(0.4,this.color+'0.6)'); grd.addColorStop(1,this.color+'0)');
        ctx.shadowBlur=this.size*8; ctx.shadowColor=this.color+'0.8)';
        ctx.fillStyle=grd; ctx.beginPath(); ctx.arc(this.x,this.y,this.size*3,0,Math.PI*2); ctx.fill();
      }
      ctx.restore();
    }
  }

  const sparkles = Array.from({ length: 90 }, () => new Sparkle());
  function loop() { ctx.clearRect(0,0,canvas.width,canvas.height); sparkles.forEach(s=>{s.update();s.draw();}); requestAnimationFrame(loop); }
  loop();
}

// ==================== TOAST ====================
function showToast(msg, type = 'success') {
  let toast = document.getElementById('trToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'trToast';
    toast.style.cssText = 'position:fixed;bottom:2rem;right:2rem;z-index:99999;padding:1rem 1.5rem;border-radius:12px;font-family:Rajdhani,sans-serif;font-size:1.05rem;font-weight:600;max-width:360px;opacity:0;transform:translateY(20px);transition:all 0.3s ease;pointer-events:none;';
    document.body.appendChild(toast);
  }
  toast.style.background = type === 'success' ? 'rgba(0,245,212,0.15)' : 'rgba(239,68,68,0.15)';
  toast.style.border      = type === 'success' ? '1px solid rgba(0,245,212,0.4)' : '1px solid rgba(239,68,68,0.4)';
  toast.style.color       = type === 'success' ? '#00f5d4' : '#f87171';
  toast.innerHTML = msg;
  toast.style.opacity = '1'; toast.style.transform = 'translateY(0)';
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => { toast.style.opacity='0'; toast.style.transform='translateY(20px)'; }, 4000);
}

// ==================== NAVBAR ====================
function initNavbar() {
 
}

// ==================== SCROLL ANIMATIONS ====================
function initAnimations() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fade-up').forEach(el => io.observe(el));
}

// ==================== COUNTER ====================
function initCounters() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target, target = +el.dataset.count, suffix = el.dataset.suffix || '';
      let cur = 0; const step = Math.ceil(target / 60);
      const t = setInterval(() => {
        cur = Math.min(cur + step, target);
        el.textContent = cur + suffix;
        if (cur >= target) clearInterval(t);
      }, 30);
      io.unobserve(el);
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('[data-count]').forEach(c => io.observe(c));
}

// ==================== INIT ====================
document.addEventListener('DOMContentLoaded', () => {
  initSparkles();
  initNavbar();
  initAnimations();
  initCounters();
  // Auto current year in footer
  var yr = document.getElementById('footerYear');
  if (yr) yr.textContent = new Date().getFullYear();
});
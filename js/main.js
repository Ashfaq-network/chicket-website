// ====== RENDER HELPERS ======

function set(el, html) { const e = document.getElementById(el); if (e) e.innerHTML = html; }

function each(sel, fn) { document.querySelectorAll(sel).forEach(fn); }

function formatPrice(p) { return 'LKR ' + p.toLocaleString(); }

// ====== APPLY CONFIG ======

function applyConfig() {
  const C = CONFIG;

  // Business name / logo
  each('.logo', el => el.innerHTML = C.business.shortName);

  // Footer business info
  set('footer-business', C.business.shortName);
  set('footer-address', C.contact.address);
  set('footer-phone', `<a href="tel:${C.contact.phoneDigits}" style="color:#aaa">${C.contact.phone}</a>`);
  set('footer-hours', C.contact.hours);
  set('footer-year', new Date().getFullYear());

  // WhatsApp float
  each('.whatsapp-float', el => el.href = `https://wa.me/${C.contact.whatsapp}`);

  // Page title
  const titleEl = document.getElementById('page-title');
  if (titleEl) titleEl.textContent = `${C.business.name} — ${C.business.tagline.replace(/<[^>]+>/g, '')} | ${C.contact.addressShort.split(',')[0]}`;

  // Promo banner
  const banner = document.querySelector('.promo-banner span');
  if (banner) banner.innerHTML = C.promoBanner.html;

  // Uber Eats button
  set('uber-eats-btn', C.links.uberEatsText);
  const ueBtn = document.getElementById('uber-eats-btn');
  if (ueBtn) ueBtn.href = C.links.uberEats;

  // Nav links
  const currentPage = location.pathname.split('/').pop() || 'index.html';
  each('nav a', link => {
    const href = link.getAttribute('href');
    if (href === currentPage || ((!currentPage || currentPage === 'index.html') && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // ===== INDEX PAGE =====
  if (document.getElementById('hero-tagline')) {
    set('hero-tagline', C.business.tagline);
    set('hero-desc', C.business.description);

    // Featured
    const fGrid = document.getElementById('featured-grid');
    if (fGrid) {
      fGrid.innerHTML = C.featured.map((item, i) => `
        <div class="featured-card anim-hidden">
          <div class="img-wrap"><img src="${item.image}" alt="${item.alt}" loading="lazy"></div>
          <div class="card-body">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <span class="price">${item.price}${item.badge ? ' <span class="badge">' + item.badge + '</span>' : ''}</span>
          </div>
        </div>
      `).join('');
    }

    // About
    set('about-text', C.aboutText.map(p => `<p>${p}</p>`).join(''));

    // Testimonials
    const tGrid = document.getElementById('testimonial-grid');
    if (tGrid) {
      tGrid.innerHTML = C.testimonials.map(t => `
        <div class="testimonial-card anim-hidden">
          <div class="stars">${'★'.repeat(t.stars)}${'☆'.repeat(5 - t.stars)}</div>
          <blockquote>"${t.text}"</blockquote>
          <cite>— ${t.author}</cite>
        </div>
      `).join('');
    }

    // Gallery
    const gGrid = document.getElementById('gallery-grid');
    if (gGrid) {
      gGrid.innerHTML = C.gallery.map(g => `
        <img src="${g.src}" alt="${g.alt}" loading="lazy" class="anim-hidden">
      `).join('');
    }
  }

  // ===== MENU PAGE =====
  const menuWrap = document.getElementById('menu-wrap');
  if (menuWrap) {
    menuWrap.innerHTML = C.menu.map(cat => `
      <div class="menu-category anim-hidden" data-category="${cat.slug}">
        <h2>${cat.name}</h2>
        ${cat.items.map(item => `
          <div class="menu-item">
            <div>
              <span class="name">${item.name}</span>
              ${item.badge ? '<span class="badge">' + item.badge + '</span>' : ''}
            </div>
            <span class="price">${formatPrice(item.price)}</span>
          </div>
        `).join('')}
      </div>
    `).join('');
  }

  // ===== ORDER PAGE =====
  const orderWrap = document.getElementById('order-form-wrap');
  if (orderWrap) {
    orderWrap.innerHTML = C.menu.map(cat => `
      <div class="form-category">
        <h3>${cat.name}</h3>
        ${cat.items.map(item => `
          <div class="form-item" data-price="${item.price}">
            <div class="item-info">
              <span class="item-name">${item.name}</span>
              <span class="item-price">${formatPrice(item.price)}</span>
            </div>
            <div class="quantity-control">
              <button class="qty-minus">&minus;</button>
              <span class="qty">0</span>
              <button class="qty-plus">+</button>
            </div>
          </div>
        `).join('')}
      </div>
    `).join('');

    // Re-bind quantity controls after rendering
    bindOrderForm();
  }

  // ===== CONTACT PAGE =====
  if (document.getElementById('contact-address')) {
    set('contact-address', C.contact.address);
    set('contact-phone', `<a href="tel:${C.contact.phoneDigits}" style="font-weight:700">${C.contact.phone}</a>`);
    set('contact-hours', `Every Day<br><strong>${C.contact.hoursLabel}</strong>`);

    const mapEl = document.getElementById('map-embed');
    if (mapEl) mapEl.src = C.contact.googleMapsEmbed;
  }
}

// ====== ORDER FORM LOGIC ======

function bindOrderForm() {
  const orderForm = document.querySelector('.order-form');
  if (!orderForm) return;

  const items = orderForm.querySelectorAll('.form-item');
  const totalEl = orderForm.querySelector('.total-amount');
  const customerName = orderForm.querySelector('.customer-name');
  const sendBtn = orderForm.querySelector('.send-order');

  function calcTotal() {
    let total = 0;
    items.forEach(item => {
      total += parseInt(item.dataset.price) * parseInt(item.querySelector('.qty').textContent);
    });
    if (totalEl) totalEl.textContent = 'LKR ' + total.toLocaleString();
    return total;
  }

  items.forEach(item => {
    const minus = item.querySelector('.qty-minus');
    const plus = item.querySelector('.qty-plus');
    const qtyEl = item.querySelector('.qty');

    minus.addEventListener('click', () => {
      let q = parseInt(qtyEl.textContent);
      if (q > 0) qtyEl.textContent = --q;
      calcTotal();
    });

    plus.addEventListener('click', () => {
      let q = parseInt(qtyEl.textContent);
      qtyEl.textContent = ++q;
      calcTotal();
    });
  });

  if (sendBtn) {
    sendBtn.addEventListener('click', () => {
      const name = customerName.value.trim();
      if (!name) { customerName.style.borderColor = 'var(--fire-red)'; customerName.focus(); return; }
      customerName.style.borderColor = '#ddd';

      const lines = [];
      items.forEach(item => {
        const q = parseInt(item.querySelector('.qty').textContent);
        if (q > 0) {
          lines.push(`• ${item.querySelector('.item-name').textContent} x${q} — ${formatPrice(parseInt(item.dataset.price) * q)}`);
        }
      });
      if (!lines.length) return;

      const msg = `*New Pickup Order*\n\n*Name:* ${name}\n\n*Items:*\n${lines.join('\n')}\n\n*Total:* ${formatPrice(calcTotal())}\n\n*Pickup Time:* ASAP`;
      window.open(`https://wa.me/${CONFIG.contact.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank');
    });
  }
}

// ====== PROMO BANNER ======

function initPromoBanner() {
  const banner = document.querySelector('.promo-banner');
  if (!banner) return;
  if (!localStorage.getItem('promoDismissed')) banner.classList.add('show');
  const closeBtn = banner.querySelector('.close-banner');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      banner.classList.remove('show');
      localStorage.setItem('promoDismissed', 'true');
    });
  }
}

// ====== LIGHTBOX ======

function initLightbox() {
  const lb = document.querySelector('.lightbox');
  if (!lb) return;
  const img = lb.querySelector('.lb-img');
  const close = lb.querySelector('.lb-close');
  const prev = lb.querySelector('.lb-prev');
  const next = lb.querySelector('.lb-next');
  const counter = lb.querySelector('.lb-counter');

  let images = [], idx = 0;

  function open(i) { idx = i; img.src = images[idx]; counter.textContent = `${idx + 1} / ${images.length}`; lb.classList.add('open'); document.body.style.overflow = 'hidden'; }
  function closeLb() { lb.classList.remove('open'); document.body.style.overflow = ''; }

  document.querySelectorAll('.gallery-grid img').forEach((el, i) => {
    images.push(el.src);
    el.style.cursor = 'pointer';
    el.addEventListener('click', () => open(i));
  });

  close.onclick = closeLb;
  prev.onclick = () => { idx = (idx - 1 + images.length) % images.length; img.src = images[idx]; counter.textContent = `${idx + 1} / ${images.length}`; };
  next.onclick = () => { idx = (idx + 1) % images.length; img.src = images[idx]; counter.textContent = `${idx + 1} / ${images.length}`; };
  lb.onclick = e => { if (e.target === lb) closeLb(); };
  document.addEventListener('keydown', e => {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape') closeLb();
    if (e.key === 'ArrowLeft') prev.click();
    if (e.key === 'ArrowRight') next.click();
  });
}

// ====== FILTER TABS (menu page) ======

function initFilterTabs() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const categories = document.querySelectorAll('[data-category]');
  if (!filterBtns.length) return;
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const f = btn.dataset.filter;
      categories.forEach(c => c.classList.toggle('hidden', f !== 'all' && c.dataset.category !== f));
    });
  });
}

// ====== SCROLL REVEAL ======

function initScrollReveal() {
  const els = document.querySelectorAll('.anim-hidden');
  if (!els.length) return;
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('anim-visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
  els.forEach(el => obs.observe(el));
}

// ====== BACK TO TOP ======

function initBackToTop() {
  const btn = document.querySelector('.back-to-top');
  if (!btn) return;
  window.addEventListener('scroll', () => btn.classList.toggle('visible', window.scrollY > 400));
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// ====== APPLY CUSTOM COLORS ======

function applyColors() {
  const root = document.documentElement;
  root.style.setProperty('--fire-red', CONFIG.colors.primary);
  root.style.setProperty('--fire-orange', CONFIG.colors.secondary);
  root.style.setProperty('--fire-amber', CONFIG.colors.accent);
  root.style.setProperty('--charcoal', CONFIG.colors.dark);
}

// ====== STRUCTURED DATA ======

function injectStructuredData() {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(CONFIG.structuredData.restaurant);
  document.head.appendChild(script);
}

// ====== INIT ======

document.addEventListener('DOMContentLoaded', () => {
  applyColors();
  applyConfig();
  injectStructuredData();

  initPromoBanner();
  initLightbox();
  initFilterTabs();
  initScrollReveal();
  initBackToTop();
});

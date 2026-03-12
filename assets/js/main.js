// Nav: transparent → solid when scrolled
(function () {
  var nav = document.getElementById('site-nav');
  if (!nav) return;

  function update() {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }

  window.addEventListener('scroll', update, { passive: true });
  update(); // run once on load
})();

// Mobile nav toggle
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.getElementById('nav-links');
  if (!toggle || !links) return;

  toggle.addEventListener('click', function () {
    var open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });

  links.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
})();

// Active nav link on scroll
(function () {
  var sections = document.querySelectorAll('section[id]');
  var navLinks = document.querySelectorAll('.nav-links a');
  if (!sections.length) return;

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        navLinks.forEach(function (a) {
          a.classList.toggle(
            'active',
            a.getAttribute('href') === '/#' + entry.target.id
          );
        });
      });
    },
    { rootMargin: '-40% 0px -55% 0px' }
  );

  sections.forEach(function (s) { observer.observe(s); });
})();

// Fade-in on scroll
(function () {
  if (!('IntersectionObserver' in window)) return;

  var targets = document.querySelectorAll('.card, .pub-list li, .school-entry');

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08 }
  );

  targets.forEach(function (t) {
    t.style.opacity = '0';
    t.style.transform = 'translateY(16px)';
    t.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    observer.observe(t);
  });
})();

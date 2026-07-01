/* ==========================================================================
   County Cutters — shared site behaviour
   Loaded on every page (replaces the per-page inline scripts).
   ========================================================================== */
(function () {
  'use strict';

  /* ----- Mobile menu toggle ----- */
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navMobile = document.querySelector('.nav-mobile');

  if (mobileMenuBtn && navMobile) {
    mobileMenuBtn.addEventListener('click', function () {
      const open = navMobile.classList.toggle('active');
      this.classList.toggle('active', open);
      this.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    navMobile.querySelectorAll('.nav-link-mobile').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileMenuBtn.classList.remove('active');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        navMobile.classList.remove('active');
      });
    });
  }

  /* ----- Smooth scroll for in-page anchors ----- */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const id = this.getAttribute('href');
      if (id.length <= 1) return;
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ----- Header elevation on scroll ----- */
  const header = document.querySelector('.header');
  if (header) {
    const onScroll = function () {
      header.classList.toggle('scrolled', window.pageYOffset > 100);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ----- Retire gallery shimmer skeletons once their photo has loaded ----- */
  document.querySelectorAll('.job-image-wrapper').forEach(function (wrapper) {
    const img = wrapper.querySelector('img');
    if (!img) return;
    const markLoaded = function () { wrapper.classList.add('is-loaded'); };
    if (img.complete && img.naturalWidth > 0) {
      markLoaded();
    } else {
      img.addEventListener('load', markLoaded);
      img.addEventListener('error', markLoaded);
    }
  });

  /* ----- Current year in the footer ----- */
  const yearSpan = document.getElementById('year');
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();
})();

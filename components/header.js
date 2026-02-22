/**
 * Sower - Shared Header Component
 * Usage: <div id="site-header"></div> + <script src="components/header.js"></script>
 * Set data-active attribute on #site-header to highlight the current nav item.
 *   data-active="home" | "features" | "process" | "pricing"
 */
(function () {
  const container = document.getElementById('site-header');
  if (!container) return;

  // Make container sticky so header follows scroll
  container.style.position = 'sticky';
  container.style.top = '0';
  container.style.zIndex = '50';

  const activePage = (container.dataset.active || '').toLowerCase();

  // Determine if we're on index.html or another page
  const isHome = ['home', 'features', 'process'].includes(activePage);

  const navItems = [
    { label: '작동 원리', href: isHome ? '#process' : 'index.html#process', key: 'process' },
    { label: '기능 소개', href: isHome ? '#features' : 'index.html#features', key: 'features' },
    { label: '요금 안내', href: activePage === 'pricing' ? '#' : 'pricing.html', key: 'pricing' },
  ];

  const ctaHref = isHome ? '#cta' : 'index.html#cta';
  const logoHref = isHome ? '#' : 'index.html';

  const navLinks = navItems.map((item) => {
    const isActive = activePage === item.key;
    const cls = isActive
      ? 'text-sm font-bold text-primary transition-colors'
      : 'text-sm font-medium text-text-muted hover:text-primary transition-colors';
    return `<a class="${cls}" href="${item.href}">${item.label}</a>`;
  }).join('\n');

  container.innerHTML = `
<header class="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-surface-dark bg-white/95 dark:bg-background-dark/95 backdrop-blur-md shadow-sm">
  <div class="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
    <a href="${logoHref}" class="flex items-center gap-2 no-underline">
      <div class="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
        <span class="material-symbols-outlined">agriculture</span>
      </div>
      <span class="text-xl font-bold tracking-tight text-text-main dark:text-white">Sower</span>
    </a>
    <nav class="hidden md:flex items-center gap-8">
      ${navLinks}
    </nav>
    <div class="flex items-center gap-4">
      <a class="hidden sm:block text-sm font-medium text-text-main dark:text-white hover:text-primary no-underline" href="${ctaHref}">로그인</a>
      <a href="${ctaHref}" class="flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-bold text-white transition-all hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/20 no-underline">
        무료로 시작하기
      </a>
    </div>
  </div>
</header>`;
})();

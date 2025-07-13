document.addEventListener('scroll', () => {
  const section = document.querySelector('.dynamic-background');
  if (!section) return;

  const rect = section.getBoundingClientRect();
  const scrollPercent = Math.min(Math.max((window.innerHeight - rect.top) / (rect.height + window.innerHeight), 0), 1);

  section.style.setProperty('--bg-position', `${scrollPercent * 100}%`);
});


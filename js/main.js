document.addEventListener('DOMContentLoaded', () => {
  const isRomanianPage = document.documentElement.lang === 'ro';
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'CERVIRON',
    description: isRomanianPage
      ? 'Informații despre dispozitivul medical CERVIRON.'
      : 'Информация о медицинском изделии CERVIRON.',
    inLanguage: isRomanianPage ? 'ro' : 'ru'
  };
  const schemaNode = document.createElement('script');
  schemaNode.type = 'application/ld+json';
  schemaNode.textContent = JSON.stringify(organizationSchema);
  document.head.appendChild(schemaNode);

  document.querySelectorAll('.accordion__trigger').forEach((trigger) => {
    if (trigger.querySelector(':scope > h2')) return;
    const heading = document.createElement('h2');
    heading.append(...Array.from(trigger.childNodes));
    trigger.appendChild(heading);
  });

  document.querySelectorAll('.footer__inner').forEach((footer) => {
    footer.insertAdjacentHTML('beforeend', '<div class="footer__socials"><a href="https://www.facebook.com/perfectcare_" target="_blank" rel="noopener" aria-label="Facebook"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 8h3V4h-3c-3.2 0-5 1.9-5 5v3H6v4h3v8h4v-8h3.1l.9-4H13V9c0-.7.3-1 1-1Z"/></svg></a><a href="https://www.instagram.com/perfectcare_/" target="_blank" rel="noopener" aria-label="Instagram"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 2h10c2.8 0 5 2.2 5 5v10c0 2.8-2.2 5-5 5H7c-2.8 0-5-2.2-5-5V7c0-2.8 2.2-5 5-5Zm0 2C5.3 4 4 5.3 4 7v10c0 1.7 1.3 3 3 3h10c1.7 0 3-1.3 3-3V7c0-1.7-1.3-3-3-3H7Zm5 3.5A4.5 4.5 0 1 1 12 16a4.5 4.5 0 0 1 0-9Zm0 2A2.5 2.5 0 1 0 12 14a2.5 2.5 0 0 0 0-4.5ZM17.3 6a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4Z"/></svg></a></div>');
  });

  const button = document.querySelector('.menu-button');
  const nav = document.querySelector('.nav');
  if (!button || !nav) return;

  button.addEventListener('click', () => {
    const open = nav.classList.toggle('nav--open');
    button.setAttribute('aria-expanded', String(open));
    button.textContent = open ? '×' : '☰';
  });

  document.querySelectorAll('.accordion__item').forEach((item) => {
    item.addEventListener('toggle', () => {
      if (!item.open) return;
      document.querySelectorAll('.accordion__item[open]').forEach((other) => {
        if (other !== item) other.open = false;
      });
    });
  });

});

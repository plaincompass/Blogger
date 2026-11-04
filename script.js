console.log('PlainCompass');

/* 로딩 해제부터 무조건 */

document.documentElement.style.visibility = 'visible';
document.documentElement.style.opacity = '1';
document.documentElement.classList.remove('loading');

document.getElementById('pc-loading')?.remove();

/* Blogger 스타일 제거 */

document.querySelectorAll('style').forEach(style => {

    const css = style.textContent || '';

    if (
        css.includes('gc-bubbleDefault') ||
        css.includes('pls-bubbleTop') ||
        css.includes('navbar')
    ) {
        style.remove();
    }
});



document.documentElement.style.display = 'block';

document.querySelectorAll('style').forEach(style => {

    const css = style.textContent || '';

    if (
        css.includes('gc-bubbleDefault') ||
        css.includes('pls-bubbleTop')
    ) {
        style.remove();
    }
});

const themeToggle = document.getElementById('theme-toggle');

const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeToggle.textContent = '☾';
} else {
    document.documentElement.setAttribute('data-theme', 'light');
    themeToggle.textContent = '☀';
}

themeToggle.addEventListener('click', () => {

    const isDark =
        document.documentElement.getAttribute('data-theme') === 'dark';

    if (isDark) {

        document.documentElement.setAttribute('data-theme', 'light');

        themeToggle.textContent = '☀';

        localStorage.setItem('theme', 'light');

    } else {

        document.documentElement.setAttribute('data-theme', 'dark');

        themeToggle.textContent = '☾';

        localStorage.setItem('theme', 'dark');
    }
});

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

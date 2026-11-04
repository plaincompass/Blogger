console.log('PlainCompass');

document.querySelectorAll('style').forEach(style => {

    const css = style.textContent || '';

    if (css.includes('visibility:hidden')) {
        return;
    }

    style.remove();
});

document.documentElement.style.visibility = 'visible';

document.getElementById('pc-loading')?.remove();

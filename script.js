const styles = document.querySelectorAll('style');

styles.forEach(style => {
    if (!style.closest('#pc-loading')) {
        style.remove();
    }
});

window.addEventListener('load', () => {

    document.documentElement.classList.remove('loading');

    const loader = document.getElementById('pc-loading');

    if(loader){
        loader.remove();
    }

});

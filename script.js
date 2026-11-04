console.log('PlainCompass');

const customCss = document.querySelector(
  'link[href*="plaincompass.github.io/Blogger/style.css"]'
);

customCss.addEventListener("load", () => {

    document.querySelectorAll("style").forEach(style => {

        if(style.innerHTML.includes("visibility:hidden")){
            return;
        }

        style.remove();
    });

    document.documentElement.style.visibility = "visible";
    document.documentElement.style.opacity = "1";
});

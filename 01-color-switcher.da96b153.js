!function(){function t(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))}var e={body:document.querySelector("body"),start:document.querySelector("[data-start]"),stop:document.querySelector("[data-stop]")},o=null;e.stop.disabled=!0;e.start.addEventListener("click",(function(){e.body.style.backgroundColor=t(),o=setInterval((function(){e.body.style.backgroundColor=t()}),1e3),e.stop.toggleAttribute("disabled"),e.start.toggleAttribute("disabled")})),e.stop.addEventListener("click",(function(){return e.stop.toggleAttribute("disabled"),e.start.toggleAttribute("disabled"),clearInterval(o)}))}();
//# sourceMappingURL=01-color-switcher.da96b153.js.map
!function(){var t={start:document.querySelector("button[data-start]"),stop:document.querySelector("button[data-stop]")};t.start.addEventListener("click",(function(){e=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),t.start.setAttribute("disabled",!0),t.stop.removeAttribute("disabled")})),t.stop.addEventListener("click",(function(){clearInterval(e),t.start.removeAttribute("disabled"),t.stop.setAttribute("disabled",!0)}));var e=null}();
//# sourceMappingURL=01-color-switcher.524ef937.js.map

const t={body:document.body,btnStart:document.querySelector("button[data-start]"),btnStop:document.querySelector("button[data-stop]")};let n=null,e=!1;t.btnStart.addEventListener("click",(function(){if(e)return;e=!0,n=setInterval((()=>{t.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),t.btnStart.disadled=!0})),t.btnStop.addEventListener("click",(function(){clearInterval(n),t.btnStop.disadled=!1,e=!1}));
//# sourceMappingURL=01-color-switcher.7a51e612.js.map
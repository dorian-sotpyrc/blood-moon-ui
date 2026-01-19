/* app.js — tiny, dependency-free interactions */
(function(){
  const $$ = (s, r=document) => Array.from(r.querySelectorAll(s));

  // Toggle switches
  $$("[role=switch]").forEach(sw => {
    sw.addEventListener("click", () => {
      const on = sw.getAttribute("aria-checked") === "true";
      sw.setAttribute("aria-checked", String(!on));
    });
    sw.addEventListener("keydown", (e) => {
      if(e.key === "Enter" || e.key === " "){ e.preventDefault(); sw.click(); }
    });
  });

  // Mobile nav dropdown
  const btn = document.querySelector(".nav-toggle");
  const menu = document.querySelector("#navMenu");
  if(btn && menu){
    const close = () => { menu.classList.remove("open"); btn.setAttribute("aria-expanded","false"); };
    const open  = () => { menu.classList.add("open"); btn.setAttribute("aria-expanded","true"); };

    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const expanded = btn.getAttribute("aria-expanded") === "true";
      expanded ? close() : open();
    });

    document.addEventListener("click", (e) => {
      if(!menu.contains(e.target) && e.target !== btn) close();
    });

    document.addEventListener("keydown", (e) => {
      if(e.key === "Escape") close();
    });

    // Close after selecting a menu item
    menu.querySelectorAll("a").forEach(a => a.addEventListener("click", close));
  }
})();

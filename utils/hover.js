export function addHoverEffect() {
  if (typeof window === 'undefined') return;

  window.addEventListener("load", function () {
    const nav = document.querySelector(".navbar-nav");
    if (!nav) return;

    const links = nav.querySelectorAll(".nav-link");
    const underline = document.createElement("div");
    underline.className = "underline";

    nav.appendChild(underline);

    links.forEach(link => {
      link.addEventListener("mouseenter", function () {
        const linkRect = link.getBoundingClientRect();
        const navRect = nav.getBoundingClientRect();

        const left = linkRect.left - navRect.left;
        const width = linkRect.width;

        underline.style.left = `${left}px`;
        underline.style.width = `${width}px`;
      });
    });

    nav.addEventListener("mouseleave", function () {
      underline.style.width = "0";
    });
  });
}


// export function addHoverEffect() {
//   if (typeof window === 'undefined') return;

//   window.addEventListener("load", function () {
//     const nav = document.querySelector(".navbar-nav");
//     if (!nav) return;

//     // Pastikan parent nav punya posisi relative
//     nav.style.position = "relative";

//     const links = nav.querySelectorAll(".nav-link");
//     const underline = document.createElement("div");

//     // Styling underline
//     underline.style.position = "absolute";
//     underline.style.height = "2px";
//     underline.style.backgroundColor = "#9747FF"; // warna ungu
//     underline.style.bottom = "0";
//     underline.style.transition = "left 0.3s ease, width 0.3s ease";
//     underline.style.width = "0";
//     underline.style.pointerEvents = "none";
//     underline.classList.add("underline");

//     nav.appendChild(underline);

//     links.forEach(link => {
//       link.addEventListener("mouseenter", function () {
//         const offsetLeft = link.offsetLeft;
//         const offsetWidth = link.offsetWidth;

//         underline.style.left = `${offsetLeft}px`;
//         underline.style.width = `${offsetWidth}px`;
//       });
//     });

//     // Reset underline saat keluar dari navbar
//     nav.addEventListener("mouseleave", function () {
//       underline.style.width = "0";
//     });
//   });
// }

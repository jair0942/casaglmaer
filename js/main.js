// Casa Glamel — JS principal
// Por ahora el sitio es estático. Este archivo queda listo
// para lógica futura (ej: menú, analytics, año dinámico).

document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.querySelector("[data-year]");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});

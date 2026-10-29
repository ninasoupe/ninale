(function () {
  // Garde le curseur natif sur les écrans tactiles
  if (!window.matchMedia('(pointer: fine)').matches) return;

  var cursor = document.getElementById('custom-cursor');
  if (!cursor) return;

  document.body.classList.add('has-custom-cursor');

  window.addEventListener('mousemove', function (e) {
    // Utilise translate pour déplacer le point instantanément et fluidement
    cursor.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px) translate(-50%, -50%)';
    cursor.style.opacity = '1';
  }, { passive: true });

  document.addEventListener('mouseleave', function () {
    cursor.style.opacity = '0';
  });

  document.addEventListener('mouseenter', function () {
    cursor.style.opacity = '1';
  });
})();

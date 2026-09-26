(function () {
  // On garde le curseur natif sur les écrans tactiles / sans souris précise
  if (!window.matchMedia('(pointer: fine)').matches) return;

  var cursor = document.getElementById('custom-cursor');
  if (!cursor) return;

  document.body.classList.add('has-custom-cursor');

  window.addEventListener('mousemove', function (e) {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    cursor.style.opacity = '1';
  });

  document.addEventListener('mouseleave', function () {
    cursor.style.opacity = '0';
  });

  document.addEventListener('mouseenter', function () {
    cursor.style.opacity = '1';
  });
})();

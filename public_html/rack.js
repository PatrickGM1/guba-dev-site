// Two small jobs. Equipment sits on whole rack units, so pad each panel down
// to the next 48px boundary and the rail's U numbers line up with panel edges.
// And the cabinet lights: the rocker in the top strip flips light/dark and
// remembers it; with nothing stored the OS setting wins.
(function () {
  var U = 48;
  var root = document.documentElement;

  function fit() {
    var panels = document.querySelectorAll('.bezel, .server, .panel');
    var i, el, h, rem, pad;
    for (i = 0; i < panels.length; i++) panels[i].style.paddingBottom = '';
    // innermost first, so a parent measures its children already snapped
    for (i = panels.length - 1; i >= 0; i--) {
      el = panels[i];
      h = el.getBoundingClientRect().height;
      rem = (U - (h % U)) % U;
      if (rem < 0.5) continue;
      pad = parseFloat(getComputedStyle(el).paddingBottom) || 0;
      el.style.paddingBottom = (pad + rem) + 'px';
    }
  }
  fit();
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(fit);
  var t;
  addEventListener('resize', function () { clearTimeout(t); t = setTimeout(fit, 80); });

  var rocker = document.querySelector('.rocker');
  if (!rocker) return;
  function isDark() {
    var set = root.getAttribute('data-theme');
    if (set) return set === 'dark';
    return matchMedia('(prefers-color-scheme: dark)').matches;
  }
  function paint() {
    var dark = isDark();
    rocker.setAttribute('aria-pressed', dark ? 'true' : 'false');
    rocker.setAttribute('aria-label', dark ? 'Switch to the white cabinet' : 'Switch to the black cabinet');
  }
  rocker.addEventListener('click', function () {
    var next = isDark() ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('cabinet', next); } catch (e) {}
    paint();
  });
  matchMedia('(prefers-color-scheme: dark)').addEventListener('change', paint);
  paint();
})();

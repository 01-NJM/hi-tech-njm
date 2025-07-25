document.getElementById('search').addEventListener('input', function() {
  const q = this.value.toLowerCase();
  document.querySelectorAll('.product').forEach(el => {
    const txt = el.querySelector('h3').textContent.toLowerCase();
    el.style.display = txt.includes(q) ? '' : 'none';
  });
});

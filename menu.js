document.addEventListener('keydown', function(event) {
    if (event.code === 'Enter') {
      document.getElementById('menu').style.display = 'block';
    }
  });
document.getElementById('restart').addEventListener('click', function() {
    location.reload();
  });
document.getElementById('close').addEventListener('click', function() {
    window.close();
  });
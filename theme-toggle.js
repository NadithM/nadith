<script>
  document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('toggle-theme');
    const currentMode = localStorage.getItem('theme');
    if (currentMode === 'dark') document.body.classList.add('dark');

    button.addEventListener('click', () => {
      document.body.classList.toggle('dark');
      localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
    });
  });
</script>

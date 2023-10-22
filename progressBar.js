function updateProgressBar(entityId, percent) {
    const progressBar = document.getElementById(entityId + 'ProgressBar');
    progressBar.style.width = percent + '%';
    progressBar.innerHTML = percent + '%';
  }
  updateProgressBar('entity1', 15);
  updateProgressBar('entity2', 20);
  updateProgressBar('entity3', 30);
  updateProgressBar('entity4', 5);
  updateProgressBar('entity5', 10);
  updateProgressBar('entity6', 35);
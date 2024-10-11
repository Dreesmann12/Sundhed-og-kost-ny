function showTruth(id) {
  const truth = document.getElementById(`truth-${id}`);
  if (truth.classList.contains('hidden')) {
      truth.classList.remove('hidden');
  } else {
      truth.classList.add('hidden');
  }
}



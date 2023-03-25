const buttons = document.querySelectorAll('.piano-button');

buttons.forEach(button => {
  const note = button.dataset.note;
  const audio = document.getElementById(note);

  button.addEventListener('click', () => {
    audio.currentTime = 0;
    audio.play();
  });
});

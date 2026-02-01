function startProgressBar() {
  const bar = document.getElementById('progress-bar');
  let progress = 0;

  const interval = setInterval(() => {
    progress += 5;
    bar.style.width = progress + "%";

    if (progress >= 100) {
      clearInterval(interval);
      triggerCompletionAnimation();
    }
  }, 200);
}

function triggerCompletionAnimation() {
  const container = document.getElementById('progress-container');
  container.classList.add("completion-animation");

  const msg = document.getElementById('message');
  setTimeout(() => {
    msg.textContent = "Загрузка завершена!";
    msg.classList.add("show");
  }, 1500);
}

document.addEventListener("DOMContentLoaded", startProgressBar);

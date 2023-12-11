function updateProgress(progressPercentage) {
    const progressBraFill  = document.getElementById('progress');
    progressBarFill.style.width = `${progressPercentage}`;
}
updateProgress(75);
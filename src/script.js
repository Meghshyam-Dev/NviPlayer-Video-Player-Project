const videoElement = document.getElementById('my-video');
const uploadInput = document.getElementById('upload');
const playPauseBtn = document.getElementById('play-pause');
const muteBtn = document.getElementById('mute');
const fullscreenBtn = document.getElementById('fullscreen');

// Function to update video source and display
function updateVideo(file) {
  const videoURL = URL.createObjectURL(file);
  videoElement.src = videoURL;
  videoElement.load();
}

// Event listener for file upload
uploadInput.addEventListener('change', (event) => {
  const selectedFile = event.target.files[0];
  if (selectedFile) {
    updateVideo(selectedFile);
    playPauseBtn.textContent = 'Pause'; // Update button text to Pause
  }
});

// Play/Pause functionality
playPauseBtn.addEventListener('click', () => {
  if (videoElement.paused) {
    videoElement.play();
    playPauseBtn.textContent = 'Pause';
  } else {
    videoElement.pause();
    playPauseBtn.textContent = 'Play';
  }
});

// Mute functionality
muteBtn.addEventListener('click', () => {
  videoElement.muted = !videoElement.muted;
  muteBtn.textContent = videoElement.muted ? 'Unmute' : 'Mute';
});

// Fullscreen functionality (using requestFullscreen)
fullscreenBtn.addEventListener('click', () => {
  if (document.fullscreenElement) {  // Check if already fullscreen
    document.exitFullscreen();
  } else {
    videoElement.parentElement.requestFullscreen();
  }
});

sizeSelect.addEventListener('change', () => {
  const selectedSize = sizeSelect.value;
  switch (selectedSize) {
    case 'small':
      videoElement.style.width = '50%';
      videoElement.style.height = 'auto';
      break;
    case 'medium':
      videoElement.style.width = '75%';
      videoElement.style.height = 'auto';
      break;
    case 'large':
      videoElement.style.width = '100%';
      videoElement.style.height = 'auto';
      break;
  }
});

// Add size options to the select element
const sizeOptions = ['small', 'medium', 'large'];
sizeOptions.forEach(size => {
  const option = document.createElement('option');
  option.value = size;
  option.textContent = size;
  sizeSelect.appendChild(option);
});

// Append the size select element to the controls
const controls = document.querySelector('.controls');
controls.appendChild(sizeSelect);

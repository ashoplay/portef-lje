const cameraVideoStream = document.getElementById('camera-stream');
const shutterButton = document.getElementById('shutter');
const photosButton = document.getElementById('photos-btn');
const gallery = document.querySelector('.gallery-view');
const mediaContainer = document.querySelector('.media-container');
const closeGalleryButton = document.getElementById('close-gallery');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');
const canvas = document.getElementById('canvas');

let width = window.innerWidth;
let height = 0;
let streaming = false;

const capturedImages = [];
const capturedVideos = [];

if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia({ video: true })) {
  navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
    cameraVideoStream.srcObject = stream;
    cameraVideoStream.play();
  });
}

cameraVideoStream.addEventListener(
  "canplay",
  (ev) => {
    if (!streaming) {
      height = cameraVideoStream.videoHeight / (cameraVideoStream.videoWidth / width);

      if (isNaN(height)) {
        height = width / (4 / 3);
      }

      canvas.setAttribute("width", width);
      canvas.setAttribute("height", height);
      cameraVideoStream.setAttribute("width", width);
      cameraVideoStream.setAttribute("height", height);
      streaming = true;
    }
  },
  false
);

function captureImage() {
  const canvasContext = canvas.getContext('2d');
  canvas.width = width;
  canvas.height = height;
  canvasContext.drawImage(cameraVideoStream, 0, 0, width, height);

  const data = canvas.toDataURL('image/png');
  capturedImages.push(data);
  updateGallery();
}

shutterButton.addEventListener('click', () => captureImage());

photosButton.addEventListener('click', () => {
  gallery.classList.add('show-gallery');
  currentMediaIndex = 0;
  updateGallery();
});
closeGalleryButton.addEventListener('click', () => gallery.classList.remove('show-gallery'));

nextButton.addEventListener('click', () => {
  currentMediaIndex++;
  updateGallery();
});
prevButton.addEventListener('click', () => {
  currentMediaIndex--;
  updateGallery();
});

const videoToggleButton = document.getElementById('video-toggle');
const videoSaveButton = document.getElementById('video-save');
let videoStream = null;
let mediaRecorder = null;
let recordedChunks = [];

videoToggleButton.addEventListener('click', () => {
  if (!videoStream) {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then((stream) => {
        videoStream = stream;
        cameraVideoStream.srcObject = videoStream;
        cameraVideoStream.play();
        videoToggleButton.textContent = 'Stop Video';

        mediaRecorder = new MediaRecorder(videoStream);
        mediaRecorder.ondataavailable = handleDataAvailable;
        mediaRecorder.onstop = handleStop;
        recordedChunks = [];
        mediaRecorder.start();
      })
      .catch((err) => {
        console.error('Error accessing camera:', err);
      });
  } else {
    stopVideoCapture();
  }
});

function handleDataAvailable(event) {
  recordedChunks.push(event.data);
}

function handleStop() {
  const blob = new Blob(recordedChunks, { type: 'video/webm' });
  capturedVideos.push(blob);
  updateGallery();

  stopVideoCapture();
  videoToggleButton.textContent = 'Start Video';

  navigator.mediaDevices.getUserMedia({ video: true })
    .then((stream) => {
      cameraVideoStream.srcObject = stream;
      cameraVideoStream.play();
    })
    .catch((err) => {
      console.error('Error accessing camera:', err);
    });
}

function stopVideoCapture() {
  if (mediaRecorder && mediaRecorder.state !== 'inactive') {
    mediaRecorder.stop();
  }
  if (videoStream) {
    videoStream.getTracks().forEach(track => track.stop());
    videoStream = null;
    cameraVideoStream.srcObject = null;
    cameraVideoStream.srcObject = videoStream;
  }
}

videoSaveButton.addEventListener('click', () => {
  if (mediaRecorder && mediaRecorder.state !== 'inactive') {
    mediaRecorder.stop();
  }
});

let currentMediaIndex = 0;

function updateGallery() {
  mediaContainer.innerHTML = '';

  let currentMedia = null;
  if (currentMediaIndex >= 0 && currentMediaIndex < capturedImages.length) {
    currentMedia = capturedImages[currentMediaIndex];
    const image = document.createElement('img');
    image.src = currentMedia;
    mediaContainer.appendChild(image);
  } else if (currentMediaIndex >= capturedImages.length && currentMediaIndex < capturedImages.length + capturedVideos.length) {
    currentMedia = capturedVideos[currentMediaIndex - capturedImages.length];
    const video = document.createElement('video');
    video.src = URL.createObjectURL(currentMedia);
    video.controls = true;
    mediaContainer.appendChild(video);
  }
}

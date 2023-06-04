function volume_sphere(event) {
  event.preventDefault();

  const radiusInput = document.getElementById('radius');
  const radius = parseFloat(radiusInput.value);

  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

  const roundedVolume = volume.toFixed(2); // Round the volume to 2 decimal places

  const volumeInput = document.getElementById('volume');
  volumeInput.value = roundedVolume;
}

window.onload = function() {
  const form = document.getElementById('MyForm');
  form.addEventListener('submit', volume_sphere);
};

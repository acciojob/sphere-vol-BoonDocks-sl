function volume_sphere(event) {
  event.preventDefault(); // Prevent form submission and page reload

  // Retrieve the input value from the radius field
  const radiusInput = document.getElementById('radius');
  const radius = parseFloat(radiusInput.value);

  // Calculate the volume of the sphere using the formula (4/3) * π * r^3
  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

  // Update the volume field with the calculated volume
  const volumeInput = document.getElementById('volume');
  volumeInput.value = volume.toFixed(2);
}

window.onload = function() {
  const form = document.getElementById('MyForm');
  form.addEventListener('submit', volume_sphere);
};

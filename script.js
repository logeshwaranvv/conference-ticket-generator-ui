document.querySelector('form')?.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const username = document.getElementById('username').value.trim();
  const file = document.getElementById('file').files[0];

  if (!name || !email || !username) {
    alert('Please fill in all required fields');
    return false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Please enter a valid email address');
    return false;
  }

  if (!file) {
    alert('Please upload an avatar image');
    return false;
  }

  localStorage.setItem('conf-name', name);
  localStorage.setItem('conf-email', email);
  localStorage.setItem('conf-username', username);

  window.location.href = './ticket.html';
});

document.getElementById('file').addEventListener('change', function(event) {
  console.log('work');
  const file = event.target.files[0];
  const maxSize = 500 * 1024;
  if (file) {
    if (file.size > maxSize) {
      const info = document.getElementById('avatar-info');
      info.textContent  = "File too large. Please upload a photo under 500KB";
      info.classList.remove('avatar-info');
      info.classList.add('error');
      const image = document.getElementById('preview');
      image.classList.remove('preview-image');
      image.classList.add('upload-image');
      document.getElementById('preview').src = "/assets/images/icon-upload.svg";
      return;
    }

    const info = document.getElementById('avatar-info');
    info.textContent  = "Upload your photo (JPG or PNG, max size: 500KB)";
    info.classList.remove('error');
    info.classList.add('avatar-info');

    const reader = new FileReader();
    reader.onload = function(e) {
      console.log(e.target.result);
      localStorage.setItem('avatar-image-conf',e.target.result);
      document.getElementById('preview').src = e.target.result;
    };
    const image = document.getElementById('preview');
    image.classList.remove('upload-image');
    image.classList.add('preview-image');
    reader.readAsDataURL(file);
  }
});
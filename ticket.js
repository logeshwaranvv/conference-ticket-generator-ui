document.addEventListener('DOMContentLoaded', function() {
  const userName = document.getElementById('user-name');
  const userName2 = document.getElementById('user-name-2');
  const userEmail = document.getElementById('user-email');
  const userGitHubName = document.getElementById('github-name');
  const userAvatar = document.getElementById('user-avatar');

  const name = localStorage.getItem('conf-name');
  const email = localStorage.getItem('conf-email');
  const githubname = localStorage.getItem('conf-username');
  const avatarImage = localStorage.getItem('avatar-image-conf');


  if (userName) userName.textContent = name;
  if (userName2) userName2.textContent = name;
  if (userEmail) userEmail.textContent = email;
  if (userGitHubName) userGitHubName.textContent = githubname;
  if (userAvatar && avatarImage) userAvatar.src = avatarImage;
});
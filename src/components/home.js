import loadAvatar from '../avatarLoader.js';

export function renderHome() {
  const appDiv = document.getElementById('app');
  appDiv.innerHTML = `
    <section id="home">
      <div id="avatar-container">
          <div id="avatar-loading">Loading...</div>
      </div>
      <h1 class="hero-title">Welcome</h1>
      <h1>I am <span class='gradient-text'>Leno Bach</span></h1>
      <p>A Business Informatics student with a passion for learning and applying new technologies.</p>
    </section>
  `;
  loadAvatar();
}
  
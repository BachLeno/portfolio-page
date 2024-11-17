export async function renderAPIs() {
  const appDiv = document.getElementById('app');
  appDiv.innerHTML = `
    <section id="apis" class="hero">
      <h1><span class='gradient-text'>Programming Jokes</span></h1>
      <p class="hero-subtitle">Discovering the playful side of programming!</p>
      <div class="joke-container">
        <p id="joke-text">Click the button to get a programming joke!</p>
      </div>
      <button id="fetch-joke-button" class="joke-button">Get a Joke</button>
    </section>
  `;

  const fetchJokeButton = document.getElementById('fetch-joke-button');
  const jokeText = document.getElementById('joke-text');

  fetchJokeButton.addEventListener('click', async () => {
    try {
      const response = await fetch('https://v2.jokeapi.dev/joke/Programming?safe-mode');
      if (!response.ok) throw new Error('Failed to fetch joke');
      const jokeData = await response.json();
      if (jokeData.type === 'single') {
        jokeText.textContent = jokeData.joke;
      } else if (jokeData.type === 'twopart') {
        jokeText.innerHTML = `<strong>${jokeData.setup}</strong><br>${jokeData.delivery}`;
      } else {
        jokeText.textContent = 'Could not load a joke. Please try again.';
      }
    } catch (error) {
      console.error('Error fetching joke:', error);
      jokeText.textContent = 'Error fetching joke. Please try again later.';
    }
  });
}
  
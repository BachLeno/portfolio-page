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
    </section>
    <section id="map-section" class="map-container" class="hero">
      <h1><span class='gradient-text'>Find My Location</span></h1>
      <button id="locate-button" class="map-button">Show My Location on Map</button>
      <div id="map"></div>
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

  // Initialize Leaflet map
  const map = L.map('map').setView([46.94809, 7.44744], 13); // Default center on Bern, Switzerland
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  // Add location functionality
  const locateButton = document.getElementById('locate-button');
  locateButton.addEventListener('click', () => {
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by your browser.');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        map.setView([latitude, longitude], 13); // Center the map on user's location
        L.marker([latitude, longitude])
          .addTo(map)
          .bindPopup('You are here!')
          .openPopup();
      },
      () => {
        alert('Unable to retrieve your location.');
      }
    );
  });
}
  
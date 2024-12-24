export function renderAbout() {
  const appDiv = document.getElementById('app');
  appDiv.innerHTML = `
    <section id="about" class="hero">
      <h1><span class='gradient-text'>About Me</span></h1>
      <p class="hero-subtitle">Discover my journey through education, internships, and experiences!</p>
      <div class="timeline-container">
        <div class="timeline-row">
          <div class="timeline-item">
            <div class="timeline-date">Sep 2023 - Present</div>
            <div class="timeline-content">
              <h3>BSc in Business Informatics</h3>
              <p>Currently pursuing my Bachelor in Business Informatics at BFH.</p>
            </div>
          </div>
        </div>
        <div class="timeline-row">
          <div class="timeline-item">
            <div class="timeline-date">May 2023 - Jul 2023</div>
            <div class="timeline-content">
              <h3>EF Language Travel</h3>
              <p>Attended a language course and explored international cultures.</p>
            </div>
          </div>
        </div>
        <div class="timeline-row">
          <div class="timeline-item">
            <div class="timeline-date">Jul 2022 - Apr 2023</div>
            <div class="timeline-content">
              <h3>Military Truck Driver</h3>
              <p>Served as a truck driver in the military.</p>
            </div>
          </div>
        </div>
        <div class="timeline-row">
          <div class="timeline-item">
            <div class="timeline-date">Aug 2021 - Jul 2022</div>
            <div class="timeline-content">
              <h3>Applications Developer Intern</h3>
              <p>Interned as an Applications Developer at zetcom AG.</p>
            </div>
          </div>
        </div>
        <div class="timeline-row">
          <div class="timeline-item">
            <div class="timeline-date">Aug 2018 - Jul 2022</div>
            <div class="timeline-content">
              <h3>BWD Bern</h3>
              <p>Completed my professional maturity diploma in Business at BWD Bern.</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-date">Aug 2018 - Jul 2022</div>
            <div class="timeline-content">
              <h3>gibb Vocational School Bern</h3>
              <p>Completed my vocational training as an Applications Developer at gibb.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
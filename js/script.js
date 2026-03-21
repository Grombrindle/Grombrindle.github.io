// Project data – based on CV + GitHub repositories (Grombrindle)
const projects = {
  backend: [
    { name: "AI-Integrated Task Manager", desc: "Intelligent task system using AI prompt engineering to convert notes into actionable tasks with role assignment.", tech: ["Laravel", "OpenAI", "MySQL"], repo: "https://github.com/Grombrindle/ai-task-manager", demo: "#" },
    { name: "PDF Editor Research Software", desc: "Complex PDF annotation & variable extraction platform for researchers (Laravel + pdf.js).", tech: ["Laravel", "pdf.js", "JavaScript"], repo: "https://github.com/Grombrindle/pdf-editor-research", demo: "#" },
    { name: "Gym Management Desktop App", desc: ".NET desktop app with fingerprint authentication for membership and attendance.", tech: ["C#", ".NET", "Fingerprint SDK"], repo: "https://github.com/Grombrindle/gym-management", demo: "#" },
    { name: "NestJS REST APIs", desc: "Scalable APIs with TypeScript, JWT, and PostgreSQL for various internal projects.", tech: ["NestJS", "TypeScript", "PostgreSQL"], repo: "https://github.com/Grombrindle/nestjs-api", demo: "#" }
  ],
  frontend: [
    { name: "Dr Calories Dashboard", desc: "Complete overhaul of nutrition tracking dashboard – calorie & nutrient tracking, meal planning.", tech: ["Angular", "Tailwind", "Chart.js"], repo: "https://github.com/Grombrindle/dr-calories-dashboard", demo: "#" },
    { name: "Chery Iraq Website", desc: "Feature enhancements and frontend improvements for official Chery automobiles site.", tech: ["Laravel", "Blade", "Tailwind"], repo: "https://github.com/Grombrindle/chery-iraq", demo: "#" },
    { name: "Livewire Components", desc: "Reusable dynamic components using Laravel Livewire & Alpine.js.", tech: ["Livewire", "Alpine.js", "Tailwind"], repo: "https://github.com/Grombrindle/livewire-components", demo: "#" }
  ],
  devops: [
    { name: "CI/CD Pipelines (TugOnn)", desc: "End-to-end pipelines with GitHub Actions + Docker for Next.js & Express apps. Staging deployments on Vercel/Render.", tech: ["Docker", "GitHub Actions", "Vercel"], repo: "https://github.com/Grombrindle/ci-cd-demo", demo: "#" },
    { name: "Self-Hosted Server", desc: "Personal server automation with Linux, Docker, and open-source tools for task scheduling.", tech: ["Linux", "Docker", "Cron"], repo: "https://github.com/Grombrindle/self-hosted-lab", demo: "#" },
    { name: "GitHub Actions Workflows", desc: "Reusable workflows for linting, testing, and deployment across multiple repos.", tech: ["YAML", "GitHub Actions", "Node.js"], repo: "https://github.com/Grombrindle/gh-actions-templates", demo: "#" }
  ],
  fullstack: [
    { name: "Gouri Distributions (B2B)", desc: "E‑commerce platform on Google Play with Stripe integration. Full-stack from DB planning to deployment.", tech: ["Laravel", "Flutter", "Stripe"], repo: "https://github.com/Grombrindle/gouri-distributions", demo: "https://play.google.com/store/apps/details?id=com.gouri" },
    { name: "BlueBuySale Marketplace", desc: "Job searching & marketplace with real‑time messaging (Laravel Reverb).", tech: ["Laravel", "Reverb", "MySQL"], repo: "https://github.com/Grombrindle/bluebuysale", demo: "#" },
    { name: "AI Task Manager (Full)", desc: "End‑to‑end AI integration: frontend React, backend Laravel, OpenAI API for task parsing.", tech: ["React", "Laravel", "OpenAI"], repo: "https://github.com/Grombrindle/ai-task-manager", demo: "#" },
    { name: "Fingerprint Gym System", desc: "Overhauled APIs + UI for .NET desktop app managing memberships & biometrics.", tech: ["C#", "SQL Server", "WinForms"], repo: "https://github.com/Grombrindle/fingerprint-gym", demo: "#" }
  ]
};

function renderProjects(containerId, projectList) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = projectList.map(p => `
    <div class="project-card">
      <h3>${p.name}</h3>
      <p>${p.desc}</p>
      <div class="project-tech">${p.tech.map(t => `<span>${t}</span>`).join('')}</div>
      <div class="project-links">
        <a href="${p.repo}" target="_blank"><i class="fab fa-github"></i> Repository</a>
        ${p.demo !== '#' ? `<a href="${p.demo}" target="_blank"><i class="fas fa-external-link-alt"></i> Live Demo</a>` : ''}
      </div>
    </div>
  `).join('');
}

// Tab switching logic
function initTabs() {
  const tabs = document.querySelectorAll('.tab-btn');
  const panes = document.querySelectorAll('.tab-pane');
  tabs.forEach(btn => {
    btn.addEventListener('click', () => {
      const tabId = btn.getAttribute('data-tab');
      tabs.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      panes.forEach(pane => pane.classList.remove('active'));
      document.getElementById(tabId).classList.add('active');
    });
  });
}

// Dark mode
function initDarkMode() {
  const toggle = document.getElementById('darkModeToggle');
  const isDark = localStorage.getItem('theme') === 'dark';
  if (isDark) document.body.classList.add('dark');
  toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
  });
}

// Contact form (demo: opens mail client)
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
      window.location.href = `mailto:haydraalio000@gmail.com?subject=Portfolio contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}%0A%0AReply to: ${email}`;
      alert('Your message has been opened in your email client. Thank you!');
      form.reset();
    });
  }
}

// CV download (fake link, you can replace with actual PDF)
function initDownloadCV() {
  const btn = document.getElementById('downloadCV');
  if (btn) {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      alert('CV download is simulated. Replace with actual PDF link in production.');
    });
  }
}

// Load all projects
renderProjects('backendProjects', projects.backend);
renderProjects('frontendProjects', projects.frontend);
renderProjects('devopsProjects', projects.devops);
renderProjects('fullstackProjects', projects.fullstack);

initTabs();
initDarkMode();
initContactForm();
initDownloadCV();
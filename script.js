// ===== Dark / Light Mode Toggle =====
function toggleMode(){
  document.body.classList.toggle('light');
  document.body.classList.toggle('dark');
  document.querySelector('.mode-toggle').textContent = 
    document.body.classList.contains('dark') ? '🌙' : '☀️';
}

// ===== Alerts Auto-hide =====
document.querySelectorAll('.alert').forEach((alert, i) => {
  setTimeout(() => { alert.style.opacity = 0; }, 4000 + i * 1000);
});

// ===== Toggle Project Expand / Collapse =====
function toggleProject(header){
  const card = header.parentElement;
  card.classList.toggle('active');
  const arrow = header.querySelector('.arrow');
  arrow.style.transform = card.classList.contains('active') ? "rotate(180deg)" : "rotate(0deg)";
}

// ===== Switch Tabs Inside Project Cards =====
function switchTab(e, btn){
  e.stopPropagation(); // prevent card collapse
  const card = btn.closest('.project-card');
  const tabs = card.querySelectorAll('.tab-content');
  const buttons = card.querySelectorAll('.tab-btn');

  buttons.forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  tabs.forEach((tab, i) => {
    if(i === Array.from(buttons).indexOf(btn)) tab.classList.add('active');
    else tab.classList.remove('active');
  });
}

// ===== Filter Projects by Type =====
function filterProjects(type){
  document.querySelectorAll('#projectsContainer .project-card').forEach(card => {
    if(type === 'all') card.style.display = 'block';
    else card.style.display = card.classList.contains(type) ? 'block' : 'none';
  });
}

// ===== Interactive Console / Terminal =====
const input = document.getElementById("console-input");
const output = document.getElementById("console-output");

input.addEventListener("keydown", e => {
  if(e.key === "Enter"){
    const cmd = input.value.toLowerCase();
    output.textContent += "\n> " + cmd;

    switch(cmd){
      case "whoami":
        output.textContent += "\nCybersecurity Analyst";
        break;
      case "skills":
        output.textContent += "\nWeb, Network, Cloud, IoT Security";
        break;
      case "projects":
        output.textContent += "\nProjects: Enterprise Web, Password Audit, Network Simulation, IoT Audit";
        break;
      case "help":
        output.textContent += "\nCommands: whoami, skills, projects, help";
        break;
      default:
        output.textContent += "\nUnknown command";
    }

    input.value = "";
    output.scrollTop = output.scrollHeight;
  }
});

// ===== Removed Charts / Skill Heatmap =====
// All previous drawCharts() code is deleted since skill map is not needed.
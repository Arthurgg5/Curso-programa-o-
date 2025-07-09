
// script.js simplificado com base nos módulos enviados
// Substitua este conteúdo pelo conteúdo completo que inclui todos os módulos
const modules = [
  {
    id: 1,
    title: "Módulo 1: Lógica de Programação do Zero",
    lessons: [
      {
        id: 1,
        title: "O que é Programação?",
        content: "<p>Programação é o processo de criar um conjunto de instruções...</p>"
      }
    ]
  }
  // Outros módulos seguem aqui...
];

const modulesList = document.getElementById("modulesList");
const content = document.getElementById("content");

function clearActiveButtons() {
  const buttons = document.querySelectorAll(".sidebar button");
  buttons.forEach((btn) => btn.classList.remove("active"));
}

function showModuleLessons(moduleId) {
  const module = modules.find((m) => m.id === moduleId);
  if (!module) return;

  content.innerHTML = `<h2>${module.title}</h2>`;
  const ul = document.createElement("ul");
  ul.style.listStyle = "none";
  ul.style.paddingLeft = "0";

  module.lessons.forEach((lesson) => {
    const li = document.createElement("li");
    li.style.marginBottom = "10px";

    const btn = document.createElement("button");
    btn.textContent = lesson.title;
    btn.style.width = "100%";
    btn.style.background = "#2563eb";
    btn.style.color = "white";
    btn.style.border = "none";
    btn.style.padding = "10px";
    btn.style.borderRadius = "4px";
    btn.style.cursor = "pointer";
    btn.style.textAlign = "left";

    btn.addEventListener("click", () => {
      content.innerHTML = `<button id='backButton'>← Voltar</button><h2>${lesson.title}</h2>${lesson.content}`;
      document.getElementById("backButton").addEventListener("click", () => {
        showModuleLessons(moduleId);
      });
    });

    li.appendChild(btn);
    ul.appendChild(li);
  });

  content.appendChild(ul);
}

modules.forEach((module) => {
  const li = document.createElement("li");
  const btn = document.createElement("button");
  btn.textContent = module.title;

  btn.addEventListener("click", () => {
    clearActiveButtons();
    btn.classList.add("active");
    showModuleLessons(module.id);
  });

  li.appendChild(btn);
  modulesList.appendChild(li);
});

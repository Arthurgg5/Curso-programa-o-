const modules = [
  {
    id: 1,
    title: "Módulo 1: Lógica de Programação do Zero",
    lessons: [
      {
        id: 1,
        title: "O que é Programação?",
        content: "<p>Programação é o processo de criar um conjunto de instruções que um computador pode entender e executar para realizar tarefas específicas.</p>"
      },
      {
        id: 2,
        title: "Variáveis e Tipos de Dados",
        content: "<p>Variáveis são como caixas onde você armazena informações. Os tipos de dados dizem que tipo de informação está guardada, como números, texto, etc.</p>"
      }
    ]
  },
  {
    id: 2,
    title: "Módulo 2: HTML e CSS Básico",
    lessons: [
      {
        id: 1,
        title: "Introdução ao HTML",
        content: "<p>HTML é a linguagem que usamos para criar páginas da web.</p>"
      },
      {
        id: 2,
        title: "Estilos com CSS",
        content: "<p>CSS é o que dá estilo e aparência às páginas HTML.</p>"
      }
    ]
  }
];

const modulesList = document.getElementById('modulesList');
const content = document.getElementById('content');

function showModules() {
  content.innerHTML = `<h2>Bem-vindo ao curso!</h2><p>Selecione um módulo para começar.</p>`;
  modulesList.innerHTML = '';

  modules.forEach(mod => {
    const li = document.createElement('li');
    const btn = document.createElement('button');
    btn.textContent = mod.title;
    btn.onclick = () => showLessons(mod.id);
    li.appendChild(btn);
    modulesList.appendChild(li);
  });
}

function showLessons(moduleId) {
  const mod = modules.find(m => m.id === moduleId);
  if (!mod) return;

  content.innerHTML = `<h2>${mod.title}</h2><ul id="lessonsList"></ul><button id="backButton">← Voltar</button>`;
  document.getElementById('backButton').onclick = () => showModules();

  const lessonsList = document.getElementById('lessonsList');
  mod.lessons.forEach(lesson => {
    const li = document.createElement('li');
    const btn = document.createElement('button');
    btn.textContent = lesson.title;
    btn.onclick = () => showLessonContent(moduleId, lesson.id);
    li.appendChild(btn);
    lessonsList.appendChild(li);
  });
}

function showLessonContent(moduleId, lessonId) {
  const mod = modules.find(m => m.id === moduleId);
  if (!mod) return;

  const lesson = mod.lessons.find(l => l.id === lessonId);
  if (!lesson) return;

  content.innerHTML = `
    <button id="backButton">← Voltar</button>
    <h2>${lesson.title}</h2>
    <div>${lesson.content}</div>
  `;

  document.getElementById('backButton').onclick = () => showLessons(moduleId);
}

showModules();

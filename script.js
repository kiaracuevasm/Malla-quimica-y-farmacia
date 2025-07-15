const ramos = [
  // Semestre 1
  { nombre: "Química general I", semestre: 1 },
  { nombre: "Técnicas de laboratorio químico", semestre: 1 },
  { nombre: "Mecánica", semestre: 1 },
  { nombre: "Introducción al cálculo", semestre: 1 },
  { nombre: "El químico farmacéutico y su acción", semestre: 1 },
  { nombre: "CFG", semestre: 1 },
  { nombre: "Inglés I", semestre: 1 },

  // Semestre 2
  { nombre: "Química general II", semestre: 2, prereq: ["Química general I"] },
  { nombre: "Laboratorio de química general", semestre: 2, prereq: ["Química general I", "Técnicas de laboratorio químico"] },
  { nombre: "Electromagnetismo", semestre: 2, prereq: ["Mecánica", "Introducción al cálculo"] },
  { nombre: "Cálculo diferencial e integral", semestre: 2, prereq: ["Introducción al cálculo"] },
  { nombre: "Biología general", semestre: 2 },
  { nombre: "El medicamento y su evolución", semestre: 2, prereq: ["El químico farmacéutico y su acción"] },
  { nombre: "Inglés II", semestre: 2, prereq: ["Inglés I"] },
  { nombre: "CFG", semestre: 2 },

  // Semestre 3
  { nombre: "Química orgánica I", semestre: 3, prereq: ["Química general II"] },
  { nombre: "Química analítica", semestre: 3, prereq: ["Química general II"] },
  { nombre: "Laboratorio de química orgánica", semestre: 3, prereq: ["Química general II", "Laboratorio de química general"] },
  { nombre: "Estadística y análisis de datos", semestre: 3, prereq: ["Cálculo diferencial e integral"] },
  { nombre: "Fisiología celular", semestre: 3, prereq: ["Química general I", "Electromagnetismo", "Biología general"] },
  { nombre: "Investigación para las ciencias farmacéuticas", semestre: 3, prereq: ["El medicamento y su evolución"] },
  { nombre: "Inglés III", semestre: 3, prereq: ["Inglés II"] },
  { nombre: "CFG", semestre: 3 },

  // Semestre 4
  { nombre: "Química orgánica II", semestre: 4, prereq: ["Química orgánica I"] },
  { nombre: "Laboratorio de análisis químico", semestre: 4, prereq: ["Química analítica", "Laboratorio de química general", "Estadística y análisis de datos"] },
  { nombre: "Fisicoquímica I", semestre: 4, prereq: ["Mecánica", "Cálculo diferencial e integral", "Química orgánica I"] },
  { nombre: "Fisiología de sistemas", semestre: 4, prereq: ["Fisiología celular"] },
  { nombre: "Practica intermedia", semestre: 4, prereq: ["Investigación para las ciencias farmacéuticas"] },
  { nombre: "Inglés IV", semestre: 4, prereq: ["Inglés III"] },
];
ramos.push(
  // Semestre 5
  { nombre: "Laboratorio de análisis instrumental", semestre: 5, prereq: ["Laboratorio de análisis químico", "Química analítica"] },
  { nombre: "Botánica y farmacognosia", semestre: 5, prereq: ["Química orgánica II", "Química analítica"] },
  { nombre: "Química de heterocíclicos y análisis espectroscópico", semestre: 5, prereq: ["Química orgánica II"] },
  { nombre: "Bioquímica", semestre: 5, prereq: ["Química orgánica II", "Fisicoquímica I"] },
  { nombre: "Farmacología general", semestre: 5, prereq: ["Laboratorio de análisis instrumental", "Fisiología de sistemas"] },
  { nombre: "Gestión de calidad", semestre: 5, prereq: ["Investigación para las ciencias farmacéuticas"] },

  // Semestre 6
  { nombre: "Microbiología", semestre: 6, prereq: ["Bioquímica"] },
  { nombre: "Farmacoquímica I", semestre: 6, prereq: ["Química de heterocíclicos y análisis espectroscópico", "Farmacología general"] },
  { nombre: "Farmacología de sistemas I", semestre: 6, prereq: ["Farmacología general"] },
  { nombre: "Fisiopatología molecular", semestre: 6, prereq: ["Fisiología de sistemas", "Bioquímica"] },
  { nombre: "Legislación farmacéutica", semestre: 6, prereq: ["Practica intermedia", "Gestión de calidad"] },
  { nombre: "Fisicoquímica farmacéutica", semestre: 6, prereq: ["Fisicoquímica I"] },

  // Semestre 7
  { nombre: "Fisiopatología y semiología", semestre: 7, prereq: ["Fisiopatología molecular"] },
  { nombre: "Farmacoquímica II", semestre: 7, prereq: ["Farmacoquímica I"] },
  { nombre: "Farmacológica de sistemas II", semestre: 7, prereq: ["Microbiología", "Farmacología de sistemas I"] },
  { nombre: "Salud publica", semestre: 7, prereq: ["Legislación farmacéutica"] },
  { nombre: "Tecnología farmacéutica I", semestre: 7, prereq: ["Legislación farmacéutica", "Fisicoquímica farmacéutica"] },
  { nombre: "Operaciones unitarias para química y farmacia", semestre: 7, prereq: ["Fisicoquímica farmacéutica"] }
);
ramos.push(
  // Semestre 8
  { nombre: "Análisis de medicamentos, doping y drogas de abuso", semestre: 8, prereq: ["Farmacoquímica II", "Laboratorio de análisis instrumental"] },
  { nombre: "Nutrición clínica", semestre: 8, prereq: ["Fisiopatología y semiología"] },
  { nombre: "Bioquímica clínica", semestre: 8, prereq: ["Fisiopatología y semiología"] },
  { nombre: "Biofarmacia y farmacocinética", semestre: 8, prereq: ["Farmacología general", "Tecnología farmacéutica I"] },
  { nombre: "Tecnología farmacéutica II", semestre: 8, prereq: ["Tecnología farmacéutica I", "Operaciones unitarias para química y farmacia"] },
  { nombre: "Administración y gestión farmacéutica", semestre: 8, prereq: ["Tecnología farmacéutica I"] },
  { nombre: "Estadística farmacéutica", semestre: 8, prereq: ["Salud publica", "Estadística y análisis de datos"] },

  // Semestre 9
  { nombre: "Farmacología clínica", semestre: 9, prereq: ["Farmacológica de sistemas II", "Bioquímica clínica", "Biofarmacia y farmacocinética"] },
  { nombre: "Bromatología", semestre: 9, prereq: ["Laboratorio de análisis instrumental", "Nutrición clínica"] },
  { nombre: "Toxicología", semestre: 9, prereq: ["Farmacológica de sistemas II", "Bioquímica clínica"] },
  { nombre: "Farmacia asistencial", semestre: 9, prereq: ["Salud publica", "Administración y gestión farmacéutica"] },
  { nombre: "Tecnología cosmética", semestre: 9, prereq: ["Tecnología farmacéutica II"] },
  { nombre: "Electivos especializados", semestre: 9 },

  // Semestre 10
  { nombre: "Farmacia clínica", semestre: 10, prereq: ["Farmacología clínica"] },
  { nombre: "Práctica profesional en farmacia comunitaria", semestre: 10, prereq: ["Administración y gestión farmacéutica", "Farmacología clínica", "Toxicología"] },
  { nombre: "Biotecnología farmacéutica", semestre: 10, prereq: ["Tecnología farmacéutica II", "Fisiopatología molecular"] },
  { nombre: "Economía en salud y marketing farmacéutico", semestre: 10, prereq: ["Salud publica", "Administración y gestión farmacéutica", "Farmacología clínica"] },
  { nombre: "Innovación y proyectos", semestre: 10, prereq: ["Estadística farmacéutica"] },
  { nombre: "Electivos especializados", semestre: 10 },

  // Semestre 11
  { nombre: "Actividad final de titulación", semestre: 11, prereq: ["Farmacia clínica", "Práctica profesional en farmacia comunitaria", "Biotecnología farmacéutica", "Economía en salud y marketing farmacéutico", "Innovación y proyectos"] }
);
// Estado: ramos aprobados
let ramosAprobados = new Set(JSON.parse(localStorage.getItem("ramosAprobados") || "[]"));

function crearMalla() {
  const malla = document.getElementById("malla");
  malla.innerHTML = "";

  // Agrupamos ramos por semestre
  const semestres = {};
  for (const ramo of ramos) {
    if (!semestres[ramo.semestre]) semestres[ramo.semestre] = [];
    semestres[ramo.semestre].push(ramo);
  }

  // Ordenar semestres
  Object.keys(semestres).sort((a, b) => a - b).forEach(sem => {
    const titulo = document.createElement("h2");
    titulo.textContent = `Semestre ${sem}`;
    titulo.style.color = "#cc6699";
    malla.appendChild(titulo);

    semestres[sem].forEach(ramo => {
      const div = document.createElement("div");
      div.className = "ramo";
      div.textContent = ramo.nombre;
      div.dataset.nombre = ramo.nombre;
      div.dataset.tooltip = generarTooltip(ramo);

      if (ramosAprobados.has(ramo.nombre)) {
        div.classList.add("aprobado");
      }

      div.addEventListener("click", () => {
        if (ramosAprobados.has(ramo.nombre)) {
          ramosAprobados.delete(ramo.nombre);
        } else {
          ramosAprobados.add(ramo.nombre);
        }
        guardarEstado();
        crearMalla();
      });

      malla.appendChild(div);
    });
  });
}

function generarTooltip(ramo) {
  const prereq = ramo.prereq?.length ? `Prerrequisitos:\n- ${ramo.prereq.join("\n- ")}` : "Sin prerrequisitos";
  return `${ramo.nombre}\n${prereq}`;
}

function guardarEstado() {
  localStorage.setItem("ramosAprobados", JSON.stringify([...ramosAprobados]));
}

crearMalla();

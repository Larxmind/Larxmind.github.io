// proyectos.js

const listaProyectos = [
    {
        id: 1,
        "titulo": "Student Dropout Predictor AI",
    "categoria": "end-to-end",
    "tags": ["#MACHINE_LEARNING", "#MLOPS", "#WEB_DASHBOARD"],
    "descripcionCorta": "Ecosistema integral de IA para la detección temprana y prevención del abandono escolar en entornos académicos.",
    "descripcionLarga": "Este proyecto aborda el ciclo completo de un sistema inteligente de monitorización. Diseñé un pipeline de ingesta y ETL en Python para procesar logs de actividad estudiantil y datos sociodemográficos. Para la predicción, implementé un modelo Random Forest Classifier optimizado mediante GridSearchCV enfocado en maximizar el F1-Score (alcanzando un 0.9569). El despliegue incluye un pipeline de MLOps integrado con Hugging Face Hub para la distribución del artefacto serializado (.pkl), una interfaz de inferencia rápida en Gradio y un dashboard analítico completo que consume la API para priorizar la intervención de los coordinadores. <span style=\"color: #ff6b6b;\" font-weight=\"bold\">La Demo de gradio solo muestra el porcentaje de riesgo de abandono, no hay inferencia con los LLMs.</span>",
    "imagen": "./assets/proyectos/student-dropout-project.webp",
    "github": "https://github.com/Larxmind/seguimiento_alumnado",
    "demo": "https://larxmind-demo-churn.hf.space", 
    "stackDetallado": {
        "Frontend": "HTML5, CSS3, JavaScript nativo para el Dashboard analítico y Gradio para la interfaz de inferencia.",
        "Backend & IA": "Python, Scikit-Learn (Random Forest), Joblib para serialización y Hugging Face Hub para almacenamiento del modelo.",
        "Data & Infra": "Pandas y NumPy para la ingeniería de variables, y validación cronológica Out-Of-Time (OOT) para evitar data leakage."
        }
    },
    {
        id: 2,
        titulo: "Motor de Recomendación E-com",
        categoria: "ia",
        tags: ["#NEXTJS", "#BIGDATA", "#RECOMMENDER"],
        descripcionCorta: "Sistema de recomendación personalizado basado en historial de navegación y filtrado colaborativo procesando 1TB de logs.",
        descripcionLarga: "Desarrollo de un sistema de recomendación híbrido para una tienda electrónica virtual. Utiliza técnicas de filtrado colaborativo y basado en contenido para sugerir productos a los usuarios en tiempo real. La arquitectura está diseñada para escalar, permitiendo simular el procesamiento de grandes volúmenes de datos de interacción (logs de clicks y compras).",
        imagen: "./assets/recommender-project.jpg",
        github: "https://github.com/... ",
        demo: "https://demo... ",
        stackDetallado: {
            "Algoritmo": "Filtrado colaborativo implementado con Python y Scikit-Learn.",
            "Procesamiento": "Simulación de tuberías de datos estructuradas para análisis eficiente.",
            "Interfaz": "Next.js con Server-Side Rendering para optimizar el SEO de los productos recomendados."
        }
    }
];

// Función para renderizar los proyectos en el HTML
function renderizarProyectos(categoriaFiltro = "todos") {
    const contenedor = document.getElementById("contenedor-proyectos");
    if (!contenedor) return;
    
    contenedor.innerHTML = ""; // Limpiar contenedor

    // Filtrar proyectos
    const proyectosFiltrados = listaProyectos.filter(proy => 
        categoriaFiltro === "todos" || proy.categoria === categoriaFiltro
    );

    // Generar el HTML de las tarjetas
    proyectosFiltrados.forEach(proyecto => {
        const tarjeta = document.createElement("article");
        tarjeta.className = "project-card";
        // Añadimos un evento click para abrir el "Deep Dive" (puedes programar un modal más adelante)
        tarjeta.onclick = () => abrirDetalleProyecto(proyecto.id);
        
        tarjeta.innerHTML = `
            <div class="project-visual">
                <img src="${proyecto.imagen}" alt="${proyecto.titulo}" onerror="this.style.display='none';">
                <span class="mono placeholder-text">[ VIEW ARCHITECTURE & DEMO ]</span>
            </div>
            <div class="project-content">
                <div class="project-tags mono">
                    ${proyecto.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <h3>${proyecto.titulo}</h3>
                <p class="text-muted" style="margin-top: 0.5rem;">${proyecto.descripcionCorta}</p>
                <div class="project-footer mono">
                    <span class="link-icon">Ver detalles técnicos -></span>
                </div>
            </div>
        `;
        contenedor.appendChild(tarjeta);
    });
}

// Función auxiliar para manejar los botones de filtro
function inicializarFiltros() {
    const botones = document.querySelectorAll(".filter-btn");
    botones.forEach(boton => {
        boton.addEventListener("click", (e) => {
            // Cambiar clase activa visualmente
            botones.forEach(b => b.classList.remove("active"));
            e.target.classList.add("active");
            
            // Filtrar los proyectos
            const filtro = e.target.getAttribute("data-filter");
            renderizarProyectos(filtro);
        });
    });
}

// Inicializar cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", () => {
    renderizarProyectos();
    inicializarFiltros();
});

// Función para mostrar la información profunda (puedes conectarla a un modal)
function abrirDetalleProyecto(id) {
   const proyecto = listaProyectos.find(p => p.id === id);
    if (!proyecto) return;

    const modal = document.getElementById("project-modal");
    const modalBody = document.getElementById("modal-dynamic-body");

    // Construimos el HTML del Deep Dive interactivo
    modalBody.innerHTML = `
        <div class="project-tags mono" style="margin-bottom: 1rem;">
            ${proyecto.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
        
        <h2 style="font-size: 2.5rem; margin-bottom: 1.5rem;">${proyecto.titulo}</h2>
        
        <p style="font-size: 1.1rem; margin-bottom: 2rem;">${proyecto.descripcionLarga}</p>
        
        <h3 class="mono" style="font-size: 1.2rem; border-bottom: 1px solid #333; padding-bottom: 0.5rem;">
            [ ARQUITECTURA Y DESGLOSE TÉCNICO ]
        </h3>
        
        <div class="modal-grid-stack mono">
            <div class="stack-section">
                <h4>./Capas_Visuales</h4>
                <p style="font-size: 0.9rem; color: var(--text-muted);">${proyecto.stackDetallado["Frontend"] || 'N/A'}</p>
            </div>
            <div class="stack-section">
                <h4>./Lógica_&_Modelos</h4>
                <p style="font-size: 0.9rem; color: var(--text-muted);">${proyecto.stackDetallado["Backend & IA"] || 'N/A'}</p>
            </div>
            <div class="stack-section">
                <h4>./Datos_&_Entorno</h4>
                <p style="font-size: 0.9rem; color: var(--text-muted);">${proyecto.stackDetallado["Data & Infra"] || proyecto.stackDetallado["Algoritmo"] || 'N/A'}</p>
            </div>
        </div>

        <div class="project-footer mono" style="margin-top: 2.5rem; font-size: 1rem;">
            <a href="${proyecto.github}" target="_blank" class="link-icon" style="margin-right: 20px;">-> Código en GitHub</a>
            <a href="${proyecto.demo}" target="_blank" class="link-icon">-> Demo de la Aplicación</a>
        </div>
    `;

    // Mostrar el modal
    modal.style.display = "block";
    document.body.style.overflow = "hidden"; // Evita el scroll de fondo mientras lee
}

// Lógica para cerrar el modal
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("project-modal");
    const closeBtn = document.querySelector(".close-modal-btn");

    if(closeBtn && modal) {
        closeBtn.onclick = () => {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        };

        // Cerrar también si hace clic fuera de la caja del contenido
        window.onclick = (event) => {
            if (event.target == modal) {
                modal.style.display = "none";
                document.body.style.overflow = "auto";
            }
        };
    }
});
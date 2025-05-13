// Definimos un arreglo para almacenar las preguntas y otro paralelo para los votos. Inicialmente están vacíos.
let preguntas = [];
let votos = [];

// Declaración de función para crear la encuesta
const crearEncuesta = () => {
    preguntas = []; // Limpiamos el arreglo de preguntas.
    votos = []; // Limpiamos el arreglo de votos.
    
    const cantidadPreguntas = 8; // Establecemos el número fijo de preguntas en 8.

    // Usamos un ciclo para crear las preguntas (no es necesario preguntar por cuántas preguntas)
    Array.from({ length: cantidadPreguntas }).forEach((_, i) => { 
        let pregunta = prompt(`Ingresa el texto de la pregunta ${i + 1}`);
        
        // Bucle con el que validamos que la pregunta no esté vacía o sea solo espacios (con "trim").
        while (!pregunta || pregunta.trim() === "") {
            alert("La pregunta no puede estar vacía ni contener solo espacios.");
            pregunta = prompt(`Ingresa el texto de la pregunta ${i + 1}`);
        }

        let opciones = []; // Arreglo para almacenar las opciones de respuesta de la pregunta actual.
        let numOpciones = prompt(`¿Cuántas opciones quieres para la pregunta "${pregunta}"? (Mínimo 2)`); // Libertad al usuario para elegir el número de opciones.
        
        // Validamos que el número ingresado sea un número >= 2
        while (isNaN(numOpciones) || numOpciones < 2) {
            alert("Debes ingresar un número válido, mínimo 2.");
            numOpciones = prompt(`¿Cuántas opciones quieres para la pregunta "${pregunta}"? (Mínimo 2)`);
        }
        
        numOpciones = parseInt(numOpciones);
        
        Array.from({ length: numOpciones }).forEach((_, j) => {
            let opcion = prompt(`Ingresa la opción ${j + 1} para la pregunta "${pregunta}"`);
        
            // Validar que la opción no esté vacía ni repetida
            while (!opcion || opcion.trim() === "" || opciones.includes(opcion)) {
                if (!opcion || opcion.trim() === "") {
                    alert("La opción no puede estar vacía ni contener solo espacios.");
                } else if (opciones.includes(opcion)) {
                    alert("Esa opción ya fue ingresada. Ingresa una diferente.");
                }
                opcion = prompt(`Ingresa la opción ${j + 1} para la pregunta "${pregunta}"`);
            }
        
            opciones.push(opcion);
        });
        // Agregamos un objeto con el texto de la pregunta y las opciones al arreglo preguntas.
        preguntas.push({
            texto: pregunta,
            opciones: opciones
        });

        votos.push(new Array(opciones.length).fill(0)); // Creamos un arreglo con el mismo número de opciones que la pregunta, inicializado a 0.
    });
    
    console.clear(); // Limpiamos consola para mayor orden
    console.log("¡Encuesta creada exitosamente!");
    mostrarEncuesta();
}

// Función para mostrar la encuesta creada en consola
const mostrarEncuesta = () => {
    preguntas.forEach((pregunta, index) => {
        console.log(`Pregunta ${index + 1}: ${pregunta.texto}`);
        pregunta.opciones.forEach((opcion, idx) => {
            console.log(`  Opción ${idx + 1}: ${opcion}`);
        });
    });
}  

// Función para votar
const votar = () => {
    if (preguntas.length === 0) {
        alert("Primero debes crear la encuesta."); // Validación para evitar que se vote sin preguntas.
        return;
    }

    preguntas.forEach((pregunta, i) => {
        let seleccion = prompt(`Pregunta ${i + 1}: ${pregunta.texto}\n${pregunta.opciones.map((opcion, idx) => `${idx + 1}: ${opcion}`).join('\n')}`);
        
        // Validación de la selección
        while (!pregunta.opciones[parseInt(seleccion) - 1]) {
            alert("Por favor, selecciona un número válido.");
            seleccion = prompt(`Pregunta ${i + 1}: ${pregunta.texto}\n${pregunta.opciones.map((opcion, idx) => `${idx + 1}: ${opcion}`).join('\n')}`);
        }
        
        votos[i][parseInt(seleccion) - 1]++;
    });

    mostrarResultados();
}

// Función para mostrar resultados
const mostrarResultados = () => {
    console.clear(); // Limpiamos consola para no saturarla
    console.log("Resultados de la encuesta:");
    let totalVotantes = votos.reduce((total, voto) => total + voto.reduce((suma, v) => suma + v, 0), 0);
    console.log(`Total de personas que han votado: ${totalVotantes}\n`);

    preguntas.forEach((pregunta, index) => {
        let total = votos[index].reduce((a, b) => a + b, 0);
        console.log(`Pregunta ${index + 1}: ${pregunta.texto}`);
        pregunta.opciones.forEach((opcion, idx) => {
            let porcentaje = total === 0 ? 0 : ((votos[index][idx] / total) * 100).toFixed(2);
            console.log(`  ${opcion}: ${votos[index][idx]} votos (${porcentaje}%)`);
        });
        console.log(""); // Espacio entre preguntas
    });
}

// Función para reiniciar los votos sin eliminar las preguntas
const reiniciarVotos = () => {
    if (votos.length === 0) {
        alert("No hay votos para reiniciar."); 
        return;
    }
    votos = votos.map((voto, i) => new Array(preguntas[i].opciones.length).fill(0)); // Reiniciamos los votos según el número de opciones
    console.log("Todos los votos han sido reiniciados a cero.");
}

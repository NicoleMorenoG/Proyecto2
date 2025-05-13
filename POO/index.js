// Aquí definimos la clase Encuesta que contendrá las preguntas y opciones.
class Encuesta {
    constructor() {
        this.preguntas = []; // Se inicializa array vacío para almacenar las preguntas.
        this.votos = []; // Array paralelo a preguntas. Guarda los votos para cada opción por pregunta.
    }

    // Método para agregar una pregunta y sus opciones.
    agregarPregunta(pregunta, opcion1, opcion2) {
        this.preguntas.push({  // Aquí se agrega un objeto a this.preguntas.
            texto: pregunta,  // Texto de la pregunta.
            opciones: [opcion1, opcion2]  // Array de opciones.
        });

        // Iniciamos el conteo de votos en 0 para cada una de las 2 opciones.
        this.votos.push([0, 0]);
    }

    // Método para mostrar las preguntas y opciones en la consola.
    mostrarPreguntas() {
        console.log("Preguntas y opciones:");
        this.preguntas.forEach((preg, i) => { // Recorre todo el array de preguntas y muestra cada una de ellas con sus opciones. 
                                              // Función flecha anónima utilizada como callback del método forEach.
            console.log(`Pregunta ${i + 1}: ${preg.texto}`);
            console.log(`  1) ${preg.opciones[0]}`);
            console.log(`  2) ${preg.opciones[1]}`);
        });
    }

    // Método para votar
    votar() {
        if (this.preguntas.length === 0) { // Verificamos si hay preguntas, en caso de que no, pide que primero se cree la encuesta.
            alert("Primero debes crear la encuesta.");
            return;
        }

        alert("Comenzaremos la votación. Debes contestar todas las preguntas para ver los resultados en la consola."); // Explicativo para el usuario.

        for (let i = 0; i < this.preguntas.length; i++) { // Bucle que recorre todas las preguntas.
            let preg = this.preguntas[i]; // Se guarda la pregunta actual en una variable.
            let respuesta;

            do {
                respuesta = prompt( // Se muestra un cuadro de diálogo para que el usuario vote.
                    `Pregunta ${i + 1}:\n${preg.texto}\n1) ${preg.opciones[0]}\n2) ${preg.opciones[1]}\n\nEscribe 1 o 2 para votar:`
                );

                if (respuesta !== "1" && respuesta !== "2") {
                    alert("Opción no válida. Debes ingresar 1 o 2 para continuar."); // Si la respuesta no es válida, se repite el bucle.
                }
            } while (respuesta !== "1" && respuesta !== "2");

            this.votos[i][parseInt(respuesta) - 1]++; // Si la respuesta es válida, se registra el voto.
        }

        this.mostrarResultados(); // Al finalizar el bucle, se muestran los resultados.
    }

    // Método para mostrar los resultados actuales en la consola
    mostrarResultados() {
        console.log("RESULTADOS ACTUALES:");
        this.preguntas.forEach((preg, i) => { // Función flecha anónima utilizada como callback del método forEach.
                                              // Al igual que la de más arriba, pero esta vez para mostrar los resultados actuales y con %.
            let votos1 = this.votos[i][0];
            let votos2 = this.votos[i][1];
            let total = votos1 + votos2;
            let porcentaje1 = total > 0 ? ((votos1 / total) * 100).toFixed(1) : 0;
            let porcentaje2 = total > 0 ? ((votos2 / total) * 100).toFixed(1) : 0;

            console.log(`Pregunta ${i + 1}: ${preg.texto}`);
            console.log(`  ${preg.opciones[0]}: ${votos1} voto(s) (${porcentaje1}%)`);
            console.log(`  ${preg.opciones[1]}: ${votos2} voto(s) (${porcentaje2}%)`);
        });

        alert("Gracias por participar en la votación. Cierra esta ventana para que otras personas puedan votar."); // Mensaje para usuario al finalizar la votación.
    }

    // Método para limpiar las preguntas y los votos si se crea una nueva encuesta
    limpiarEncuesta() {
        this.preguntas = [];
        this.votos = [];
    }
}

// Clase para gestionar la creación y votación de encuestas
class GestorEncuesta {
    constructor() {
        this.encuesta = new Encuesta();
    }

    // Método auxiliar privado para pedir una opción (para evitar duplicación de código)
    pedirOpcion(texto) {
        let opcion;
        do { // Este bucle se repite hasta que el usuario ingresa una opción válida.
            opcion = prompt(texto);
            if (!opcion) {
                alert("Debes ingresar una opción válida.");
            }
        } while (!opcion);
        return opcion;
    }

    // Método para crear una encuesta de 8 preguntas
    crearEncuesta() {
        this.encuesta.limpiarEncuesta();  // Limpiamos las preguntas y los votos de una encuesta anterior, si existía.

        for (let i = 0; i < 8; i++) {
            let numero = i + 1; 
            let pregunta = prompt(`Pregunta ${numero} de 8:\nIngresa el texto de la pregunta:`); // Pide la pregunta. Si está vacía, avisa y repite la iteración.

            if (!pregunta) {
                alert("Debes ingresar una pregunta válida.");
                i--;
                continue;
            }

            // Usamos método auxiliar para pedir las opciones sin duplicar el código.
            let opcion1 = this.pedirOpcion(`Pregunta ${numero} de 8:\nIngresa la primera opción:`);
            let opcion2 = this.pedirOpcion(`Pregunta ${numero} de 8:\nIngresa la segunda opción:`);

            // Usamos el método de la clase Encuesta para agregar la pregunta y sus opciones.
            this.encuesta.agregarPregunta(pregunta, opcion1, opcion2);
        }

        console.log("¡Encuesta creada con éxito!"); //Muestra un mensaje en la consola para confirmar que la encuesta fue creada.
        this.encuesta.mostrarPreguntas();
        alert("Encuesta creada. Ahora puedes presionar el botón 'Votar' para comenzar a votar."); // Mensaje para el usuario para avisar que la encuesta fue creada exitosamente.
    }

    // Método para votar
    votar() {
        this.encuesta.votar();
    }
}

// Instanciamos el gestor de encuestas
const gestorEncuesta = new GestorEncuesta();

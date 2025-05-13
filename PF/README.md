# Proyecto2 - PF
Sistema de Encuestas - Proyecto 2 | PROGRAMACIÓN FUNCIONAL

Este proyecto consiste en un sistema interactivo de creación de encuestas y votación, que funciona desde la consola del navegador. Fue desarrollado usando Programación Funcional (PF) con JavaScript.

Cómo funciona?
El sistema se visualiza a través del navegador pero toda la interacción ocurre en la consola. Por eso, es importante seguir los pasos detallados abajo.

Instrucciones de uso:
1. Abre el archivo `index.html` en tu navegador.
2. Presiona `F12` para abrir las herramientas del desarrollador.
3. Selecciona la pestaña `Consola`.
4. Presiona el botón `Crear Encuesta`.
5. Se te pedirá que ingreses 8 preguntas y elijas la cantidad de opciones que desees (mínimo 2).
6. Luego, presiona el botón `Votar` para comenzar la votación.
7. Cada persona podrá ingresar sus respuestas una a una.
8. Al final de cada votación, se mostrará un resumen en consola con:
   - Cantidad de votos por opción.
   - Porcentaje de votación por opción.
9. Si se desea resetear la votación, apretar el botón `Reiniciar Votos`
   
💡 Consejo: Cada votante debe cerrar la ventana de votación para que otro pueda participar desde cero.

A tomar en cuenta:
A diferencia de la versión en POO, aquí dejamos abierta la opción para que el usuario indique la cantidad de opciones para cada pregunta, aunque mantuvimos el número de preguntas en 8. El número de preguntas igualmente se puede cambiar directamente en el código, o también se puede programar para que consulte el número de preguntas antes de crear la encuesta.

Cambios en esta versión:
- Botón para reiniciar los votos.
- Posibilidad de escoger el número de opciones.
- `Console Clear`, que la consola borre lo anterior al haber una nueva entrada, para resultados más limpios.
- Dos o más opciones para una pregunta no pueden ser iguales.
- No se puede ingresar como contenido a una pregunta u opción, "espacio", lo toma como inválido, al igual que si no se ingresa nada.

Uso de PF en este código:
En este proyecto usamos programación funcional al organizar todo en funciones que hacen tareas específicas y al trabajar los datos sin modificarlos directamente. También usamos formas más modernas de recorrer listas, como map y forEach, que hacen que el código sea más claro y ordenado.

Nicole Moreno. @NicoleMorenoG


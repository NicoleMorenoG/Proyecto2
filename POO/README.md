# Proyecto2 - POO
Sistema de Encuestas - Proyecto 2 | PROGRAMACIÓN ORIENTADA A OBJETOS

Este proyecto consiste en un sistema interactivo de creación de encuestas y votación, que funciona desde la consola del navegador. Fue desarrollado usando Programación Orientada a Objetos (POO) con JavaScript.

Cómo funciona?
El sistema se visualiza a través del navegador pero toda la interacción ocurre en la consola. Por eso, es importante seguir los pasos detallados abajo.

Instrucciones de uso:
1. Abre el archivo `index.html` en tu navegador.
2. Presiona `F12` para abrir las herramientas del desarrollador.
3. Selecciona la pestaña `Consola`.
4. Presiona el botón `Crear Encuesta`.
5. Se te pedirá que ingreses 8 preguntas y 2 opciones para cada una.
6. Luego, presiona el botón `Votar` para comenzar la votación.
7. Cada persona podrá ingresar sus respuestas una a una.
8. Al final de cada votación, se mostrará un resumen en consola con:
   - Cantidad de votos por opción.
   - Porcentaje de votación por opción.
   
💡 Consejo: Cada votante debe cerrar la ventana de votación para que otro pueda participar desde cero.

A tomar en cuenta:
Se decidió hacer que el número de preguntas (8) y de opciones (2) sean fijos, pero que todo el contenido de éstos, puedan ser definidos por el usuario. Si se desea reutilizar el código para usarlo con encuestas con otro número de preguntas u opciones, se puede modificar el código, o también se puede cambiar para que al inicio pregunte la cantidad de cada uno, y cree todo en base a ello.

Uso de POO en este código:
Este proyecto usa clases para organizar el código de manera sencilla. La clase Encuesta guarda las preguntas y los votos, mientras que la clase GestorEncuesta ayuda a crear la encuesta y a gestionar el proceso de votación. De esta forma, se divide el trabajo en partes pequeñas y fáciles de manejar, haciendo el código más claro y organizado.

Dentro del código puedes encontrar comentarios para comprender cada sección y el uso de la programación.

Nicole Moreno. @NicoleMorenoG


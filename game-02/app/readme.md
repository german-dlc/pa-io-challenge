# Gilded Rose - Solución

## Análisis

Dadas las restricciones del reto, donde no podemos modificar las clases definidas inicialmente, la cantidad de reglas para cada categoría y el requerimiento de agregar una nueva categoría con sus propias reglas, se observa que el método `updateQuality()` contiene las reglas de negocio definidas y agrupadas por reglas en común que comparten las categorías. Esto dificulta la comprensión ya que se eleva el nivel de abastracción de las condicionales y el nivel de anidado del código.

## Propuesta

Se propone cambiar el criterio de agrupamiento de las reglas de negocio para que cada categoria siga sus propias reglas aun cuando esto signifique tener un poco de codigo repetido, adicionalmente se propone abstraer las operaciones booleanas para que se guarden en constantes con nombres descriptivos, estos cambios nos darán una funcion que primero verifica el valor de cada `item.name` y ejecutará las reglas de negocio de esta categoría.

## Mejora continua

Dentro de las futuras mejoras a la refactorizacion de este proyecto, se puede implementar encapsulacion para que las propiedades de un item solo pueda ser modificado internamente por los metodos de la propia clase. Tambien se podría separar las reglas más repetidas en un file tipo `util` para mantener la logica más pesada fuera de la definición de las clases, entre otras mejoras.

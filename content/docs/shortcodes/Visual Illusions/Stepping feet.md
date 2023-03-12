---
weight: 1
---

# "Stepping feet" Motion Illusion

## Explicación del efecto

El _"Stepping feet" Motion Illusión_ es un fenómeno de percepción del movimiento en el que intervienen dos "autobuses", que se mueven horizontalmente por una "calle" formada por rayas blancas y negras. Aunque ambos autobuses se mueven a una velocidad constante, su velocidad percibida varía drásticamente.

Cuando el 1er autobús se encuentra sobre las rayas blancas, el contraste es alto (negro frente a blanco) y fácilmente visible, por lo que parece moverse más rápido que su velocidad real.Por el contrario, cuando el autobús blanco se encuentra contra las rayas negras, el contraste es bajo (negro frente a negro) y más difícil de ver, por lo que su velocidad percibida varía drásticamente. Los dos autobuses parecen un par de pies en movimiento, lo que da nombre a la ilusión.

En general, los movimientos de mayor contraste parecen más rápidos que los de menor contraste. El efecto desaparece cuando se elimina la textura rayada de la calle porque no queda contraste, lo que demuestra que el fondo de un objeto puede tener un efecto significativo en su velocidad percibida.

{{< p5-iframe sketch="/showcase/sketches/VisualIllusions/steepFeetIllusion.js" width="700" height="425" >}}

## Qué observar

Observe el movimiento de los pies o autobuses, como prefieras. Los pies parecen pisar alternativamente, como diminutos pies que hacen tip-tap-tip-tap... Esto es más pronunciado si no se mira directamente a los pies, sino entre ellos.

En realidad, su movimiento es siempre simultáneo. Este fenómeno me parece especialmente simpático.

## Funcionamiento

Al activar la casilla "Hi-cont", se reduce el contraste de la rejilla, lo que demuestra que los autobuses no avanzan en desfase.

El paso "barras/pie" fija el número de barras por pie. Está preajustado a 4, el efecto se produce también en todos los demás valores pares. Para valores impares, por ejemplo 5, el movimiento también se vuelve extraño: en lugar de pisar alternativamente, los pies parecen moverse como gusanos, extendiéndose y acortándose. 

El menú desplegable debajo de "Alto contraste" le permite seleccionar otras combinaciones de colores, a saber, rojo-verde y tonos grises. Para el rojo-verde, el contraste de la rejilla se reduce un poco, haciendo la oscuridad más clara, pero sigue necesitando un rojo muy oscuro (=marrón) para igualar la luminancia.

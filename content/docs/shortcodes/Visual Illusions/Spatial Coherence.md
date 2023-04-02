---
weight: 2
---

# Spatial Coherence

### Instrucciones

- Presionar la tecla 'ESPACIO' para cambiar los modos.
- Activar la 'Camara' del computador para visualizar el efecto.

{{< p5-iframe sketch="/showcase/sketches/VisualIllusions/SpatialCoherence/VideoPixelator.js" width="660" height="500" >}}

## Color AVG

"Color avg" es una abreviatura de "color average" o "color promedio" en español. En el contexto de un pixelator, se refiere al color resultante de la combinación de varios píxeles vecinos de una imagen para crear un nuevo píxel más grande.

Por ejemplo, si un pixelator de 10x10 está siendo utilizado en una imagen, entonces cada píxel en la imagen se agrupará con sus vecinos más cercanos en un área de 10x10 píxeles, y se tomará el promedio de los valores de rojo, verde y azul de esos píxeles para crear el nuevo píxel. Este nuevo píxel tendrá el color promedio de los píxeles agrupados y será utilizado para representar ese área de la imagen en el pixelator.

El color promedio es una forma de simplificar una imagen y reducir su detalle, lo que puede crear un efecto artístico interesante o ayudar a resaltar las formas y patrones generales en una imagen.

## Spatial Coherence

"Coherencia espacial" o "Spatial coherence" en inglés, se refiere a la propiedad de una imagen en la que los píxeles adyacentes tienden a tener valores de color similares o relacionados.

En el contexto de un pixelator, la coherencia espacial puede ser utilizada para crear una versión simplificada de una imagen que mantiene la información esencial y la estructura visual de la imagen original, mientras que se reduce su complejidad. Para lograr esto, en lugar de simplemente promediar los valores de color de los píxeles adyacentes, se busca mantener la coherencia espacial en las áreas agrupadas de píxeles.

Por ejemplo, si un pixelator de 10x10 está siendo utilizado en una imagen, en lugar de tomar el promedio de los valores de color de los 100 píxeles adyacentes, se pueden utilizar técnicas de procesamiento de imágenes para analizar la coherencia espacial de los píxeles en cada área. Luego, se puede utilizar esta información para generar un nuevo píxel que mantenga la coherencia espacial dentro de esa área, lo que resulta en una imagen simplificada pero que conserva la estructura y la información esencial de la imagen original.

La coherencia espacial es una técnica avanzada que puede producir resultados muy efectivos y atractivos en la reducción de imágenes y en la creación de versiones simplificadas de una imagen.

## Color AVG VS Spatial Coherence

La principal diferencia entre un "Color AVG pixelator" y un "spatial coherence pixelator" es la forma en que manejan los píxeles adyacentes al crear una versión simplificada de una imagen.

Un pixelator promedia los valores de color de los píxeles adyacentes para crear un nuevo píxel más grande que represente esa área en la imagen. Esto puede resultar en una versión simplificada de la imagen original, pero no necesariamente mantiene la estructura visual y la coherencia espacial de la imagen original.

Por otro lado, un spatial coherence pixelator utiliza técnicas de procesamiento de imágenes para analizar la coherencia espacial de los píxeles adyacentes y crea un nuevo píxel que mantiene la coherencia espacial dentro de esa área. Esto puede resultar en una versión simplificada de la imagen original que mantiene la estructura visual y la información esencial de la imagen original, mientras que se reduce la complejidad de la imagen.

En resumen, mientras que un pixelator simplemente promedia los valores de color de los píxeles adyacentes, un spatial coherence pixelator utiliza técnicas avanzadas de procesamiento de imágenes para crear una versión simplificada de la imagen original que mantiene la coherencia espacial y la estructura visual de la imagen.

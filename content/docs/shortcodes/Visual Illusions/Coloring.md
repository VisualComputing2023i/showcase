
---
weight: 2
---

# Coloring

## Color Mapping 

{{< hint info >}}

**Exercise** <br/>
Implement a color mapping application that helps people who are color blind see the colors around them.

{{< /hint >}}

El programa recibe una imagen como argumento y realiza una transformación en sus píxeles para mejorar su visualización para personas con distintos tipos de daltonismo.
Para ello, la función recorre todos los píxeles de la imagen y para cada uno de ellos, obtiene los valores de rojo, verde y azul (RGB) y calcula nuevos valores para estos componentes. Los cálculos que realiza para cada uno de ellos son específicos para corregir la percepción alterada de los colores en personas con cada tipo de daltonismo. Luego, los nuevos valores se ajustan para que se encuentren dentro del rango de 0 a 255, que es el rango de valores que se pueden representar en una imagen en escala de grises.

Finalmente, la función actualiza los píxeles de la imagen con los nuevos valores calculados.

Finalmente se muestran los resultados a partir de la imagen suministrada, en este caso la imagen suministrada es la siguiente:

<img src="../i2.jpg" alt="Imagen Original de referencia" />

### Como resultado tenemos la imagen adaptada a diferentes tipos de daltonismo:

{{< p5-iframe sketch="/showcase/sketches/VisualIllusions/colorblind.js" width="820" height="625" >}}


## HSL, HSB, XYZ

{{< hint info >}}

**Exercise** <br/>
Research other color models such as HSL, HSB, XYZ.

{{< /hint >}}


### ¿Qué es un modelo de color?

Las computadoras entienden el lenguaje binario, es decir, 0 y 1. Los colores también son 0 y 1 dentro de una computadora. Pero al diseñar algo digital, no le decimos a la computadora que queremos usar el color 01011101. Obviamente, no usamos el código binario. Aquí usamos un modelo de color para especificar un color en términos de algunos parámetros que a su vez enviarán los 0 y 1 a la pantalla y le dirán qué color mostrar para cada píxel deseado.

En resumen, un modelo de color es un sistema para representar un color. Por ejemplo, en el modelo RGB (0-255, 0-255, 0-255), un color puede ser representado por la cantidad de rojo, verde y azul que tiene.

De manera similar, el mismo color puede ser representado por otro sistema de color, como HSB, al representar qué tono lleva (que va desde 0º a 360º), qué tan saturado está y qué brillo tiene. Este tipo de sistema es más amigable para los humanos, ya que es así como percibimos los colores en realidad.


Los términos HSL, HSB y XYZ son espacios de color utilizados en la representación y manipulación de colores. A continuación, se describe cada uno de ellos:

### HSL:
HSL significa matiz, saturación y luminosidad (Hue, Saturation, Lightness en inglés). Es un espacio de color cilíndrico que representa el color como un matiz (un ángulo en un círculo de colores), una saturación (la pureza del color) y una luminosidad (la cantidad de luz en el color). En HSL, el matiz varía de 0 a 360 grados, la saturación varía de 0 a 100%, y la luminosidad varía de 0 a 100%. Este espacio de color es especialmente útil para manipular el brillo y la saturación de los colores.

{{< p5-iframe sketch="/showcase/sketches/VisualIllusions/hs.js" width="430" height="430" >}}



### HSB:
HSB significa matiz, saturación y brillo (Hue, Saturation, Brightness en inglés). Es un espacio de color cilíndrico similar a HSL, pero en lugar de luminosidad, utiliza brillo. En HSB, el matiz varía de 0 a 360 grados, la saturación varía de 0 a 100%, y el brillo varía de 0 a 100%. El espacio de color HSB es útil para controlar el brillo y la saturación de los colores.


{{< p5-iframe sketch="/showcase/sketches/VisualIllusions/hsb.js" width="430" height="700" >}}


### XYZ:
El espacio de color XYZ se utiliza para representar el color como una combinación de tres valores: X, Y y Z. Estos valores representan las respuestas del ojo humano a diferentes longitudes de onda de luz y se utilizan como una forma de describir los colores de manera objetiva. El espacio de color XYZ se utiliza a menudo como un espacio de color intermedio para convertir entre diferentes espacios de color, como RGB y CMYK.


{{< p5-iframe sketch="/showcase/sketches/VisualIllusions/xyz.js" width="430" height="430" >}}


En resumen, HSL y HSB son espacios de color cilíndricos que representan el color como una combinación de matiz, saturación y luminosidad o brillo, mientras que XYZ es un espacio de color tridimensional que describe los colores de manera objetiva utilizando los valores X, Y y Z.
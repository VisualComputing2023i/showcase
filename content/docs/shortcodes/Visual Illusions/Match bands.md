---
weight: 2
---

# Match bands

## Terrain with Perlin Noise

{{< hint info >}}

**Exercise** <br/>
Develop a terrain visualization application. Check out the 3D terrain generation with Perlin noise coding train tutorial.

{{< /hint >}}

{{< p5-iframe sketch="/showcase/sketches/VisualIllusions/matchBands/matchBands.js" width="700" height="700" >}}

### ¿Por qué tiene la forma de un terreno montañoso?

Esto se debe al algortimo usado en la producción, el algoritmo de _Perlin Noise_. Es un tipo de ruido de gradiente desarrollado por Ken Perlin en 1983. Tiene muchos usos, incluidos, entre otros, generar terreno de forma procesal, aplicar variaciones pseudoaleatorias a las variables y ayudar en la creación de texturas de imágenes.

El ruido Perlin es una textura primitiva de procedimiento, un tipo de ruido degradado utilizado por los artistas de efectos visuales para aumentar el realismo en los gráficos por computadora. La función tiene una apariencia pseudoaleatoria, pero todos sus detalles visuales son del mismo tamaño. Esta propiedad facilita el control; se pueden conectar múltiples copias escaladas del ruido de Perlin en expresiones matemáticas para crear varias texturas de procedimiento.

También se usa a menudo para generar texturas cuando la memoria es extremadamente limitada. A menudo se usa en videojuegos para crear un terreno generado por procedimientos de aspecto natural.

## Referencias

[1] Perlin, Ken. "Making Noise" [Online]. noisemachine.com. Ken Perlin. Archived from the original on October 8, 2007. Available in <https://web.archive.org/web/20071011035810/http://noisemachine.com/talk1>

[2] Shiffman, Daniel. "Reto de Programación # 11: Generación de terreno en 3D con Perlin Noise con Processing" _The Coding Train_. 4 de may. de 2016. [video en línea]. Disponible en <https://www.youtube.com/watch?v=IKB1hWWedMk>.

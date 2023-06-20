---
weight: 2
---

# Texturing

{{< hint info >}}

**Exercise** <br/>

1.  Implement other [coloring brightness tools](https://en.wikipedia.org/wiki/HSL_and_HSV#Disadvantages) such as HSV value V, HSL lightness L or Component average.
2.  Implement texture tinting by mixing [color](https://visualcomputing.github.io/docs/shaders/coloring/) and texel interpolated data.

{{< /hint >}}

## Muestreo de texturas

El muestreo de texturas consiste en asignar coordenadas de una textura a cada vértice de un objeto y luego interpolar esas coordenadas a lo largo de las caras del objeto. Estas coordenadas de textura definen cómo se envolverá la textura alrededor del objeto, lo que crea la ilusión de detalle y realismo en la representación gráfica.

Claro está, cuando hablamos de texturas, nos referimos a la posibilidad de agregar detalles visuales a los objetos renderizados, ya sean patrones de color, filtros de imagen, texturas realistas o efectos de iluminación. Al aplicar una textura a un objeto, se pueden simular superficies rugosas, metálicas, de madera, entre muchas otras posibilidades. Las texturas pueden ser fotografías digitales, imágenes generadas por ordenador o incluso patrones procedurales generados algorítmicamente.

{{< p5-iframe sketch="/showcase/sketches/shaders/texturing/luma.js" lib1="https://cdn.jsdelivr.net/gh/VisualComputing/p5.treegl/p5.treegl.js" width="700" height="540" >}}

Para realizar el muestreo de texturas, se utilizan técnicas como el [mapeo de coordenadas UV](https://es.wikipedia.org/wiki/Mapeo_de_texturas#:~:text=Mapeado%20UV%3A%20se%20asigna%20una,Mapeado%20de%20Texturas%20por%20defecto.), donde se asignan coordenadas bidimensionales a los vértices del objeto y se ajusta la textura para que se ajuste a esas coordenadas. Además, se pueden aplicar técnicas de filtrado y mapeo de texturas para mejorar la calidad y la apariencia visual de la textura en el objeto renderizado.

Vamos a ver un snippet de código para entender mejor:

{{< details "¿Cómo funciona `vertex()` en luma.js?" close >}}

```javascript
beginShape()
vertex(-1, -1, 0, 0, 1)
vertex(1, -1, 0, 1, 1)
vertex(1, 1, 0, 1, 0)
vertex(-1, 1, 0, 0, 0)
endShape()
```

Aquí, la función [vertex](https://p5js.org/es/reference/#/p5/vertex) se puede definir bajo cualquiera de las siguientes formas:

```javascript
vertex(x, y)
vertex(x, y, [z])
vertex(x, y, [z], [u], [v])
```

Con los siguientes parámetros:

-   `x` [número] coordenada x del vértice
-   `y` [número] coordenada y del vértice
-   `z` [número] z-coordinate of the vertex
-   `u` [número] \(Optional) the vertex's texture u-coordinate
-   `v` [número] \(Optional) the vertex's texture v-coordinate

```javascript
//         y                  v
//         |                  |
// (-1,1,0)|   (1,1,0)        (0,1)     (1,1)
//   *_____|_____*            *__________*
//   |     |     |            |          |        
//   |____NDC____|__x         | texture  |        
//   |     |     |            |  space   |
//   *_____|_____*            *__________*___ u
// (-1,-1,0)   (1,-1,0)       (0,0)    (1,0) 
//
```

Nota: si te fijas bien en la relación de coordenadas ([x,y,z]->[u,v]) debemos interpretar el espacio uv de la abscisa (u) hacia abajo.

{{< /details >}}

## Transformaciones de RGB a Luma, HSV, y HSL

Las transformaciones de RGB a Luma, HSV y HSL son técnicas utilizadas en el procesamiento de imágenes para convertir los valores de los componentes de color (rojo, verde y azul) en diferentes sistemas de representación. La transformación a Luma, por ejemplo, es usada con mucha frecuencia porque permite obtener una versión en escala de grises de la imagen, mientras que la transformación a HSV y HSL permite representar el color en términos de tono, saturación y luminosidad, ofreciendo herramientas para ajustar y manipular los colores de manera más precisa.

### Transformación RGB a Luma

La luma codifica la luminosidad de la imagen y, junto con la crominancia, forma la señal de vídeo compuesto utilizada en diversas aplicaciones. Estas dos pueden transmitirse juntas o por separado.

{{< details "`float luma()` in luma.frag" close >}}

```GLSL
float luma(vec4 texel) {
  return (0.299 * texel.r) + (0.587 * texel.g) + (0.114 * texel.b); 
}
```

{{< /details >}}

### Transformación RGB a HSV

Dado que MAX es el valor máximo entre los componentes (R, G, B) y MIN es el valor mínimo de esos mismos componentes, los componentes del espacio HSV se pueden calcular de la siguiente manera:

{{< details "`float hsv()` in luma.frag" close >}}

```GLSL
float hsv(vec4 texel){
  return max( max(texel.r, texel.g), max(texel.g, texel.b));
}
```

{{< /details >}}

### Transformación RGB a HSL

Los valores (R, G, B) deben estar en el rango de 0 a 1. MAX representa el valor máximo entre (R, G, B), mientras que MIN representa el valor mínimo de esos mismos componentes.

{{< details "`float hsl()` in luma.frag" close >}}

```GLSL
float hsl(vec4 texel){
  return 0.5 *(max( max(texel.r, texel.g), max(texel.g, texel.b)))
             + min( min(texel.r, texel.g), min(texel.g, texel.b));
}
```

{{< /details >}}

## Referencias

[1] "Luma (video)", Wikipedia. [En línea]. Disponible en: <https://es.wikipedia.org/wiki/Luma_(video)>. [Accedido: 10 de mayo de 2023].

[2] "YCbCr", Wikipedia. [En línea]. Disponible en: <https://es.wikipedia.org/wiki/YCbCr>. [Accedido: 10 de mayo de 2023].

[3] "Modelo de color HSV", Wikipedia. [En línea]. Disponible en: <https://es.wikipedia.org/wiki/Modelo_de_color_HSV>. [Accedido: 12 de mayo de 2023].

[4] "Modelo de color HSL", Wikipedia. [En línea]. Disponible en: <https://es.wikipedia.org/wiki/Modelo_de_color_HSL>. [Accedido: 13 de mayo de 2023].

[5] "Mapeo de texturas", Wikipedia. [En línea]. Disponible en: <https://es.wikipedia.org/wiki/Mapeo_de_texturas#:~:text=Mapeado%20UV%3A%20se%20asigna%20una,Mapeado%20de%20Texturas%20por%20defecto>. [Accedido: 10 de mayo de 2023].

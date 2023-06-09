---
weight: 2
---

# Coloring

{{< hint info >}}

**Exercise** <br/>

1. Figure it out the js code of the above sketches.
2. Implement other blending modes. Take this [reference](https://p5js.org/reference/#/p5/blendMode) as starting point.

{{< /hint >}}
## Color blending

La combinación de dos colores se implementa haciendo una multiplicación por componentes (RGB) entre ellos:

{{< p5-iframe sketch="/showcase/sketches/shaders/coloring/blend.js" lib1="https://cdn.jsdelivr.net/gh/VisualComputing/p5.treegl/p5.treegl.js" width="320" height="330" >}}

## Explorando el código

### Configuración de precisión de cálculos en la GPU.

Echemos un vistazo al código del shader `blend.frag`.

{{< details "blend.frag" close >}}

```GLSL
precision lowp float; 

uniform float brightness;
uniform vec4 uMaterial1;
uniform vec4 uMaterial2;

void main() {
  vec4 material = uMaterial1 * uMaterial2;

  // brightness affects only rgb but no the alpha channel
  gl_FragColor = vec4(brightness * material.rgb, material.a);
}
```

{{< /details >}}

Arranquemos detallando la primera línea de código, `precision lowp float;` determina cuánta precisión utiliza la GPU al calcular números de punto flotante. Al usar el valor `highp` hablamos de alta precisión, y por supuesto más intensiva que `mediump` (precisión media) y `lowp` (baja precisión).

Si un sistema no admite `highp`, significa que el código que utiliza números de punto flotante de alta precisión no funcionará en ese sistema. Incluso en sistemas que admiten `highp`, su uso puede afectar el rendimiento. Por lo tanto, se recomienda utilizar `mediump` y `lowp` siempre que sea posible para minimizar este impacto. Una buena regla general es utilizar la mayor precisión necesaria para una tarea determinada sin comprometer el rendimiento aceptable.

-   `highp` para posiciones de vértices,
-   `mediump` para coordenadas de textura,
-   `lowp` para colores.

### Coloreando pixeles

Ahora hablemos de `gl_FragColor`, la variable de la linea 11, esta especifica el color del fragmento que utilizará la canalización de funcionalidad fija subsiguiente. Si la funcionalidad fija subsiguiente consume el color del fragmento y una ejecución del ejecutable del sombreador de fragmentos no escribe un valor en `gl_FragColor`, entonces el color del fragmento consumido está `undefined`.

## Referencias

[1] Stack Overflow, "What does precision mediump float mean?", Stack Overflow, 2012, [en línea]. Disponible en: <https://stackoverflow.com/questions/13780609/what-does-precision-mediump-float-mean>. [Accedido en: 10 de mayo de 2023].

[2] Stack Overflow, "Using gl_FragColor vs out vec4 color", Stack Overflow, 2018, [en línea]. Disponible en: <https://stackoverflow.com/questions/51459596/using-gl-fragcolor-vs-out-vec4-color>. [Accedido en: 10 de mayo de 2023].

---
weight: 3
---

## Visual masking

### Introducción

El enmascaramiento visual, también conocido como visual masking, es un fenómeno que afecta a la percepción visual. Se produce cuando la visibilidad de una imagen objetivo se ve disminuida por la presencia de otra imagen, que se llama máscara. En estas situaciones, el objetivo puede resultar invisible o apreciarse con menos contraste o nitidez.

Un caso particular son los patrones de moiré, estos son patrones de interferencia a gran escala que se producen cuando un patrón regular, parcialmente opaco con espacios transparentes, se superpone a otro patrón similar. Para que aparezca un patrón de moire, los dos patrones no pueden ser idénticos, sino que deben cambiarse, rotarse o tener tonos ligeramente diferentes.

### Antecedentes

El término viene del moire **\[[Wiki](https://en.wikipedia.org/wiki/Moire_(fabric))]**, un textil tradicionalmente hecho de seda pero ahora también hecho de algodón o fibras sintéticas que tienen una apariencia ondulada. El muaré, o "tela de agua", se fabrica presionando dos capas de tela mientras está húmeda. El espaciado de hilos, similar pero no perfecto, crea un patrón característico que persiste después de que la tela se seca.

Los patrones de muaré son a menudo artefactos de imágenes producidos por diversas técnicas de imágenes digitales y gráficos por computadora. Estas líneas pueden representar fibras en seda corrugada o líneas dibujadas en papel o en una pantalla de computadora.

#### Linea Moiré

En este caso el patrón moiré aparece al superponer dos capas transparentes que contienen patrones opacos relacionados. El moiré de líneas se produce cuando el patrón superpuesto consta de líneas rectas o curvas.

<center>
<img src="https://upload.wikimedia.org/wikipedia/commons/2/2b/070309-moire-a5-a4-parallel-lines.png" width="40%" />
{{< p5-iframe sketch="/showcase/sketches/VisualIllusions/masking/lineMoire.js" width="300" height="274" >}}
</center>

#### Moiré de forma

Este consiste en un patrón que ilustra el fenómeno de ampliación de moiré. El patrón moiré de linea es un caso simplificado del patrón moiré de forma. Los patrones de linea pueden ser generados al superponer una capa opaca que contiene pequeñas líneas horizontales transparentes sobre una capa que tiene una forma compleja que se repite periódicamente a lo largo del eje vertical; mientras que los patrones de moiré de forma consisten de figuras complejas o secuencias de símbolos incrustados en una de las capas que se crean con el patrón de la figura.

<center>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/070320-a6-shape-moire-pr-gt-pb.gif/330px-070320-a6-shape-moire-pr-gt-pb.gif" width="50%" />
{{< p5-iframe sketch="/showcase/sketches/VisualIllusions/masking/shapeMoire.js" width="300" height="274" >}}
</center>

### Ejercicios

{{< hint info >}}

**Exercise** <br/>
Implement a kinegram and some moiré patterns which are close related visual phenomena to masking.

{{< /hint >}}

{{< p5-iframe sketch="/showcase/sketches/VisualIllusions/masking/kinegram.js" width="700" height="624" >}}

### Códigos

{{< details "kinegram.js" open >}}

```javascript
function draw() {
    background(255)
    noStroke()
    image(imgBkg, (width - 600) / 2, 0, 600, 600)

    fill(color(0, 0, 0))
    for (let i = 0; i < 80; i++) {
        mouseIsPressed
            ? rect((widthRects * 2 * i) + (mouseX - 350), 0, widthRects, height)
            : rect((widthRects * 2 * i) + speed, 0, widthRects, height)
    }
    speed = ((speed + 0.2) % (width / 3))
} 
```

{{< /details >}}

### Conclusiones

* Los kinegramas son una fascinante forma de arte cinético que combina patrones visuales para crear imágenes en movimiento sorprendentes. Son, a su vez, una demostración de que ciertos efectos artísticos pueden resultar más útiles, en la cotidianidad, de lo que muchas personas creen; claro ejemplo de eso es el efecto presente en los sellos de autentidad en los documentos oficiales.

## Referencias

[1] Ogmen H, Breitmeyer B (2007). "Visual masking". Scholarpedia. 2 (7): 3330. Bibcode:2007SchpJ...2.3330B. Avaliable in <https://doi.org/10.4249%2Fscholarpedia.3330>

[2] Hutley, M.C.; Stevens, R.F. ( 1999-11-16 ). Inspección óptica de matrices y estructuras periódicas utilizando aumento de muaré. Coloquio IEE, microingeniería en óptica y optoelectrónica.

[3] Kamal, Hala; Völkel, Reinhard; Alda, Javier ( Noviembre de 1998 ). "Propiedades de los lupas Moiré"( PDF ). Ingeniería óptica. 37 ( 11 ): 3007 -- 3014. Código Bib:1998 OptEn..37.3007K. doi:10.1117 / 1.601889. Avaliable in <https://www.spiedigitallibrary.org/journals/optical-engineering/volume-37/issue-11/0000/Properties-of-moire-magnifiers/10.1117/1.601889.short?SSO=1>.

[4] Sarcone, Gianni. "GianniSarcone.com" [Online]. Archived from the original on March 27, 2023. Avaliable in <https://web.archive.org/web/20220628022823/https://www.giannisarcone.com/Kinegrams.html>

[5] Banco de la República de Colombia, "Billete de 20 mil pesos, cinco pasos para reconocerlo" [Online]. Archived from the original on March 5, 2023. Avaliable in <https://web.archive.org/web/20230305011614/banrep.gov.co/es/billetes-monedas/billete-20-mil-pesos-cinco-pasos-para-reconocerlo>

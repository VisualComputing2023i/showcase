precision mediump float;

// uniforms are defined and sent by the sketch
uniform bool lightness;
uniform bool brightness;
uniform bool intensity;
uniform bool uv;

uniform sampler2D texture; //textura recibida desde el sketch

// interpolated texcoord (same name and type as in vertex shader)
varying vec2 texcoords2;  //vector-variable de 2 dimensiones, representa mi textura

// returns luma of given texel
//https://es.wikipedia.org/wiki/Luma_(video)
float luma(vec4 texel) {
  // alpha channel (texel.a) is just discarded
  return (0.299 * texel.r) + (0.587 * texel.g) + (0.114 * texel.b); 
}

//returns brightness (V) of RGB -> HSV transformation 
//https://es.wikipedia.org/wiki/Modelo_de_color_HSV
float hsv(vec4 texel){
  return max(max(texel.r, texel.g), max(texel.g, texel.b));
}

//returns intensity (L) of RGB -> HSL transformation 
//https://es.wikipedia.org/wiki/Modelo_de_color_HSL
float hsl(vec4 texel){
  return 0.5*(max(max(texel.r, texel.g), max(texel.g, texel.b))) + min(min(texel.r, texel.g), min(texel.g, texel.b));
}

void main() {
  // texture2D(texture, texcoords2) samples texture at texcoords2 and returns the normalized texel color
  vec4 texel = texture2D(texture, texcoords2);
  
  if(uv){
                      //red 🔚            green 🔝          blue (back)
    gl_FragColor = vec4(texcoords2.x, texcoords2.y, 0.0, 1.0);
  } else if(brightness){
    gl_FragColor = vec4(vec3(hsv(texel)), 1.0);
  } else if(lightness){
    gl_FragColor = vec4(vec3(luma(texel)), 1.0);
  } else if(intensity){
    gl_FragColor = vec4(vec3(hsl(texel)), 1.0);
  } else{
    gl_FragColor = texel;
  }
}
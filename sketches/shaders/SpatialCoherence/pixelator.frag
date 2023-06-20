#ifdef GL_ES
precision mediump float;
#endif

uniform sampler2D u_texture;
uniform float u_pixelSize;
varying vec2 v_texCoord;

void main() {
  // vec2 texelSize = vec2(1.0) / textureSize(u_texture, 0);
  vec2 texelSize = vec2(1.0);
  vec4 color = vec4(0.0);
  
  // loop through each pixel within the specified pixel size
  for (float i = -u_pixelSize; i <= u_pixelSize; i++) {
    for (float j = -u_pixelSize; j <= u_pixelSize; j++) {
      vec2 offset = vec2(i, j) * texelSize;
      color += texture2D(u_texture, v_texCoord + offset);
    }
  }
  
  // calculate the average color
  float count = (2.0 * u_pixelSize + 1.0) * (2.0 * u_pixelSize + 1.0);
  vec4 avgColor = color / count;
  
  gl_FragColor = avgColor;
}
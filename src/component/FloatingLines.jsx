import { useEffect, useRef } from "react";
import {
  Clock,
  Mesh,
  OrthographicCamera,
  PlaneGeometry,
  Scene,
  ShaderMaterial,
  Vector3,
  WebGLRenderer
} from "three";

const vertexShader = `
precision highp float;
void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const fragmentShader = `
precision highp float;

uniform float iTime;
uniform vec3 iResolution;

void main() {
  vec2 uv = gl_FragCoord.xy / iResolution.xy;

  // Center
  uv -= 0.5;

  float wave = sin(uv.x * 15.0 + iTime * 2.0) * 0.2;

  float line = abs(uv.y - wave);

  vec3 color = vec3(0.0);

  // glowing lines
  color += vec3(0.2, 0.5, 1.0) / (line * 30.0);

  gl_FragColor = vec4(color, 1.0);
}
`;

export default function FloatingLines() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new Scene();

    const camera = new OrthographicCamera(-1, 1, 1, -1, 0, 1);
    camera.position.z = 1;

    const renderer = new WebGLRenderer({ alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setClearColor(0x000000, 1);

    container.appendChild(renderer.domElement);

    const geometry = new PlaneGeometry(2, 2);

    const uniforms = {
      iTime: { value: 0 },
      iResolution: {
        value: new Vector3(
          container.clientWidth,
          container.clientHeight,
          1
        )
      }
    };

    const material = new ShaderMaterial({
      uniforms,
      vertexShader,
      fragmentShader
    });

    const mesh = new Mesh(geometry, material);
    scene.add(mesh);

    const clock = new Clock();

    const animate = () => {
      uniforms.iTime.value = clock.getElapsedTime();
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    // Resize fix
    const handleResize = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;
      renderer.setSize(width, height);
      uniforms.iResolution.value.set(width, height, 1);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      if (renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        height: "100vh",
        position: "absolute",
        top: 0,
        left: 0
      }}
    />
  );
}
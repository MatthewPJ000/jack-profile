'use client'
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import Stats from 'stats.js';
import { FontLoader } from './files/FontLoader';
import { TextGeometry } from './files/TextGeometry';

const LinesPage = () => {
  const containerRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    let renderer, scene, camera, stats;
    let line, uniforms;

    const loader = new FontLoader();
    loader.load('/fonts/helvetiker_bold.typeface.json', (font) => {
      init(font);
    });

    const vertexShader = `
      uniform float amplitude;
      attribute vec3 displacement;
      attribute vec3 customColor;
      varying vec3 vColor;
      void main() {
        vec3 newPosition = position + amplitude * displacement;
        vColor = customColor;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
      }
    `;

    const fragmentShader = `
      uniform vec3 color;
      uniform float opacity;
      varying vec3 vColor;
      void main() {
        gl_FragColor = vec4(vColor * color, opacity);
      }
    `;

    const init = (font) => {
      camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 1, 10000);
      camera.position.z = 500;

      scene = new THREE.Scene();
      scene.background = new THREE.Color(0x0F172A);

      uniforms = {
        amplitude: { value: 5.0 },
        opacity: { value: 0.3 },
        color: { value: new THREE.Color(0x777777) },
      };

      const shaderMaterial = new THREE.ShaderMaterial({
        uniforms: uniforms,
        vertexShader: vertexShader,
        fragmentShader: fragmentShader,
        blending: THREE.AdditiveBlending,
        depthTest: false,
        transparent: true,
      });

      const geometry = new TextGeometry('Matthew.Jack', {
        font: font,
        size: 50,
        height: 8,
        curveSegments: 5,
        bevelThickness: 2,
        bevelSize: 1,
        bevelEnabled: true,
        bevelSegments: 5,
      });

      geometry.center();

      const count = geometry.attributes.position.count;

      const displacement = new THREE.Float32BufferAttribute(count * 3, 3);
      geometry.setAttribute('displacement', displacement);

      const customColor = new THREE.Float32BufferAttribute(count * 3, 3);
      geometry.setAttribute('customColor', customColor);

      const color = new THREE.Color(0xffffff);

      for (let i = 0, l = customColor.count; i < l; i++) {
        color.setHSL(i / l, 0.5, 0.5);
        color.toArray(customColor.array, i * customColor.itemSize);
      }

      line = new THREE.Line(geometry, shaderMaterial);
      line.rotation.x = 0.2;
      scene.add(line);

      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setPixelRatio(window.devicePixelRatio);
      
      // Set the canvas size
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      renderer.setSize(width, height);

      containerRef.current.appendChild(renderer.domElement);

      stats = new Stats();
      statsRef.current.appendChild(stats.dom);

      window.addEventListener('resize', onWindowResize);
      renderer.setAnimationLoop(animate);
    };

    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      
      // Resize the renderer and the canvas element
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      renderer.setSize(width, height);
    };

    const animate = () => {
      renderScene();
      stats.update();
    };

    const renderScene = () => {
      const time = Date.now() * 0.001;

      line.rotation.y = 0.1 * time;

      uniforms.amplitude.value = Math.sin(0.5 * time);
      uniforms.color.value.offsetHSL(0.0005, 0, 0);

      const attributes = line.geometry.attributes;
      const array = attributes.displacement.array;

      for (let i = 0, l = array.length; i < l; i += 3) {
        array[i] = 0.5 * (0.5 - Math.random());
        array[i + 1] = 0.5 * (0.5 - Math.random());
        array[i + 2] = 0.5 * (0.5 - Math.random());
      }

      attributes.displacement.needsUpdate = true;

      renderer.render(scene, camera);
    };

    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', onWindowResize);
      if (renderer) {
        renderer.dispose();
      }
    };
  }, []);

  return (
    <div>
      <h2 className="heading">MY NAME</h2>
      <div ref={containerRef} className="w-[50vw] h-[30vh] relative bg-slate-800" />
      <div ref={statsRef} />
    </div>
  );
};

export default LinesPage;
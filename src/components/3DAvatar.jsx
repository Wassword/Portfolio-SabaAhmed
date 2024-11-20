import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const ThreeDAvatar = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    
    renderer.setSize(400, 400);
    mountRef.current.appendChild(renderer.domElement);

    // Load 3D model
    const loader = new GLTFLoader();
    loader.load(
      '/path-to-your-3d-model.glb',
      (gltf) => {
        scene.add(gltf.scene);
      }
    );

    // Lighting
    const light = new THREE.AmbientLight(0xffffff);
    scene.add(light);

    camera.position.z = 5;

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Add your animation logic here
      if (scene.children.length > 0) {
        scene.children[0].rotation.y += 0.01;
      }
      
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} />;
};

export default ThreeDAvatar;
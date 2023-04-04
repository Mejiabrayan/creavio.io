'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const TriangleObject = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) {
      return;
    }

    // Set up Three.js scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(
      containerRef.current.clientWidth,
      containerRef.current.clientHeight
    );
    containerRef.current.appendChild(renderer.domElement);

    // Create triangle geometry and material
    const triangleShape = new THREE.Shape();
    triangleShape.moveTo(0, 1);
    triangleShape.lineTo(-1, -1);
    triangleShape.lineTo(1, -1);
    triangleShape.lineTo(0, 1);
    const extrudeSettings = {
      depth: 0.1,
      bevelEnabled: false,
    };
    const triangleGeometry = new THREE.ExtrudeGeometry(
      triangleShape,
      extrudeSettings
    );
    triangleGeometry.computeVertexNormals();
    const triangleMaterial = new THREE.MeshNormalMaterial({
      depthWrite: false,
      depthTest: false,
      transparent: true,
    });

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.2);
    directionalLight.position.set(0, 0, 5);
    scene.add(ambientLight);
    scene.add(directionalLight);

    // Create triangle mesh and add to scene
    const triangleMesh = new THREE.Mesh(triangleGeometry, triangleMaterial);
    scene.add(triangleMesh);

    // Set camera position and render scene
    camera.position.z = 5;
    const animate = () => {
      requestAnimationFrame(animate);
      triangleMesh.rotation.x += 0.005;
      triangleMesh.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();

    // Clean up Three.js scene on unmount
    return () => {
      if (!containerRef.current) {
        return;
      }
      renderer.dispose();
      containerRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div className='absolute top-0 left-0 w-full h-full' ref={containerRef} />
  );
};

export default TriangleObject;

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

function createRoundedRectShape(width, height, radius) {
  const x = -width / 2;
  const y = -height / 2;
  const shape = new THREE.Shape();
  shape.moveTo(x + radius, y);
  shape.lineTo(x + width - radius, y);
  shape.quadraticCurveTo(x + width, y, x + width, y + radius);
  shape.lineTo(x + width, y + height - radius);
  shape.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  shape.lineTo(x + radius, y + height);
  shape.quadraticCurveTo(x, y + height, x, y + height - radius);
  shape.lineTo(x, y + radius);
  shape.quadraticCurveTo(x, y, x + radius, y);
  return shape;
}

export default function HeroScene() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      preserveDrawingBuffer: true
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    camera.position.set(0, 0.4, 9);

    const root = new THREE.Group();
    scene.add(root);

    const ambient = new THREE.AmbientLight(0xffffff, 1.3);
    scene.add(ambient);

    const key = new THREE.DirectionalLight(0xffc94a, 2.2);
    key.position.set(4, 5, 6);
    scene.add(key);

    const blue = new THREE.DirectionalLight(0x4cc9f0, 1.2);
    blue.position.set(-4, -2, 5);
    scene.add(blue);

    const globe = new THREE.Group();
    root.add(globe);

    const sphere = new THREE.Mesh(
      new THREE.SphereGeometry(1.6, 48, 48),
      new THREE.MeshStandardMaterial({
        color: 0x08254d,
        metalness: 0.18,
        roughness: 0.48,
        transparent: true,
        opacity: 0.78
      })
    );
    globe.add(sphere);

    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0xf5b400,
      transparent: true,
      opacity: 0.72,
      side: THREE.DoubleSide
    });
    [0, Math.PI / 3, -Math.PI / 3].forEach((rotation) => {
      const ring = new THREE.Mesh(new THREE.TorusGeometry(1.92, 0.01, 8, 120), ringMaterial);
      ring.rotation.set(Math.PI / 2, rotation, 0);
      globe.add(ring);
    });

    const points = [];
    for (let i = 0; i < 140; i += 1) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const radius = 1.72 + Math.random() * 0.08;
      points.push(
        radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.sin(phi) * Math.sin(theta),
        radius * Math.cos(phi)
      );
    }
    const pointGeometry = new THREE.BufferGeometry();
    pointGeometry.setAttribute("position", new THREE.Float32BufferAttribute(points, 3));
    globe.add(
      new THREE.Points(
        pointGeometry,
        new THREE.PointsMaterial({ color: 0xffffff, size: 0.025, transparent: true, opacity: 0.88 })
      )
    );

    const cardGroup = new THREE.Group();
    root.add(cardGroup);
    const cardShape = createRoundedRectShape(1.8, 0.78, 0.08);
    const cardGeometry = new THREE.ShapeGeometry(cardShape);
    const cardMaterials = [
      new THREE.MeshStandardMaterial({ color: 0xffffff, metalness: 0.05, roughness: 0.42 }),
      new THREE.MeshStandardMaterial({ color: 0x102c59, metalness: 0.12, roughness: 0.38 }),
      new THREE.MeshStandardMaterial({ color: 0xf5b400, metalness: 0.1, roughness: 0.36 })
    ];
    for (let i = 0; i < 5; i += 1) {
      const card = new THREE.Mesh(cardGeometry, cardMaterials[i % cardMaterials.length]);
      card.position.set(2.25 + i * 0.08, 1.25 - i * 0.62, -0.25 + i * 0.08);
      card.rotation.set(0.02 * i, -0.22, -0.06);
      cardGroup.add(card);

      const line = new THREE.Mesh(
        new THREE.BoxGeometry(1.12, 0.035, 0.02),
        new THREE.MeshBasicMaterial({ color: i % 2 ? 0xffffff : 0x0a2249 })
      );
      line.position.set(card.position.x + 0.02, card.position.y + 0.1, card.position.z + 0.03);
      line.rotation.copy(card.rotation);
      cardGroup.add(line);
    }

    const paper = new THREE.Group();
    const planeShape = new THREE.Shape();
    planeShape.moveTo(0, 0.34);
    planeShape.lineTo(1.04, 0);
    planeShape.lineTo(0, -0.34);
    planeShape.lineTo(0.18, 0);
    planeShape.lineTo(0, 0.34);
    const paperMesh = new THREE.Mesh(
      new THREE.ShapeGeometry(planeShape),
      new THREE.MeshStandardMaterial({ color: 0xffc328, metalness: 0.2, roughness: 0.28, side: THREE.DoubleSide })
    );
    paper.add(paperMesh);
    paper.position.set(-2.4, -1.45, 0.25);
    paper.rotation.set(0.24, -0.38, 0.2);
    root.add(paper);

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const width = Math.max(1, rect.width);
      const height = Math.max(1, rect.height);
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      const compact = width < 620;
      root.position.set(compact ? -0.15 : -0.95, compact ? -0.15 : -0.02, 0);
      root.scale.setScalar(compact ? 0.72 : 0.9);
    };

    let raf = 0;
    const clock = new THREE.Clock();
    const animate = () => {
      const t = clock.getElapsedTime();
      globe.rotation.y = t * 0.23;
      globe.rotation.x = Math.sin(t * 0.45) * 0.05;
      cardGroup.position.y = Math.sin(t * 0.9) * 0.08;
      paper.position.x = -2.4 + Math.sin(t * 0.8) * 0.18;
      paper.position.y = -1.45 + Math.cos(t * 0.7) * 0.1;
      paper.rotation.z = 0.2 + Math.sin(t * 0.6) * 0.08;
      renderer.render(scene, camera);
      raf = requestAnimationFrame(animate);
    };

    resize();
    animate();
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      renderer.dispose();
      cardGeometry.dispose();
      sphere.geometry.dispose();
      pointGeometry.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} className="hero-canvas" aria-label="Sawaed 3D job matching scene" />;
}

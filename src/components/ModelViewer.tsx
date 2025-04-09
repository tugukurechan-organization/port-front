import React, { useEffect, useState } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { GLTFLoader } from 'three-stdlib';
import "../css/ModelViewer.css";  // CSS を適用

const Model: React.FC = () => {
  const [model, setModel] = useState<THREE.Group | null>(null);

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load(
      "/assets/elmo_rigged.glb",  // Viteの場合は public フォルダに配置
      (gltf) => {
        const loadedModel = gltf.scene;
        loadedModel.scale.set(15, 15, 15);
        loadedModel.rotation.x = Math.PI / 4;
        loadedModel.rotation.y = Math.PI / 4;
        setModel(loadedModel);
      },
      undefined,
      (error) => {
        console.error("An error occurred while loading the model", error);
      }
    );
  }, []);

  useFrame(() => {
    if (model) {
      model.rotation.y += 0.01; // アニメーションの回転速度を調整
      model.rotation.z += 0.01;
    }
  });

  return model ? <primitive object={model} /> : null;
};

const ModelViewer: React.FC = () => {
  return (
    <div className="model-viewer-container">
      <Canvas className="model-canvas">
        <ambientLight intensity={0.5} />
        <directionalLight position={[20, 20, 20]} />
        <Model />
      </Canvas>
    </div>
  );
};

export default ModelViewer;

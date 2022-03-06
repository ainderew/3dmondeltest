import { React, useEffect } from "react";
import "./App.css";

import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

// model file url
// import fileModelUrl from "./model_starbucks/scene.gltf"

const App = () => {
  // console.log(fileModelUrl);
  // console.log("test");
  useEffect(() => {
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      1,
      100
    );
    camera.position.z = 96;

    const canvas = document.getElementById("canvasID");
    const sec = document.querySelector(".sec-1");
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
    });

    renderer.setSize(sec.offsetWidth, sec.offsetHeight);
    sec.appendChild(renderer.domElement);
    // renderer.setClearColor( 0xffffff, 0);

    // renderer.setSize(window.innerWidth, window.innerHeight);
    // document.body.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    ambientLight.castShadow = true;
    scene.add(ambientLight);

    const spotLight = new THREE.SpotLight(0xffffff, 1);
    spotLight.castShadow = true;
    spotLight.position.set(1, 64, 32);
    scene.add(spotLight);

    let model;
    // let url = fileModelUrl;
    // console.log(url)
    const loader = new GLTFLoader();

    loader.load(
      "../model_starbucks/scene.gltf",
      (gltf) => {
        // gltf.scene.scale.set(0.1, 0.12, 0.1);
        gltf.scene.scale.set(5, 5, 5);
        gltf.scene.position.set(0, -20, 0);
        model = gltf.scene;
        scene.add(model);
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
      },
      undefined,
      (error) => {
        console.error(error);
      }
    );

    const animate = () => {
      if (model) {
        // model.rotation.x += 0.01;
        model.rotation.y += 0.01;
      }
      renderer.render(scene, camera);
      window.requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div className="App">
      {/* <canvas ref={canvas} id="canvasID"></canvas> */}
      <h1 className="sec-1-h1">TEST</h1>
      <div className="sec-1">
        <canvas id="canvasID"></canvas>
      </div>
    </div>
  );
};

export default App;

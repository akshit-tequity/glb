// "use client";
// import { Canvas, useThree } from "@react-three/fiber";
// import { useGLTF, OrbitControls, Environment } from "@react-three/drei";
// import { useRef, useEffect } from "react";
// import { MeshStandardMaterial, ReinhardToneMapping } from "three";

// const Model = ({ url }) => {
//   const { scene } = useGLTF(url);
//   const ref = useRef();

//   useEffect(() => {
//     if (ref.current) {
//       ref.current.traverse((child) => {
//         if (child.isMesh) {
//           const originalMaterial = child.material.clone();

//           const newMaterial = new MeshStandardMaterial({
//             metalness: 1,
//             roughness: 0.4,
//             transparent: true,
//           });
//           newMaterial.color.copy(originalMaterial.color);

//           child.material = newMaterial;
//         }
//       });
//     }
//   }, [ref]);

//   return <primitive object={scene} ref={ref} />;
// };

// const SetToneMapping = () => {
//   const { gl } = useThree();
//   useEffect(() => {
//     gl.toneMapping = ReinhardToneMapping;
//     gl.toneMappingExposure = 1;
//   }, [gl]);

//   return null;
// };

// const ThreeScene = ({ modelUrl }) => {
//   return (
//     <Canvas>
//       <Model url={modelUrl} />
//       <OrbitControls />
//       {/* <SetToneMapping /> */}
//       {/* <Environment preset="apartment" /> */}
//       {/* Environment preset property = // sunset // apartment // warehouse // studio */}
//     </Canvas>
//   );
// };

// export default ThreeScene;

// "use client";
// import { Canvas, useThree } from "@react-three/fiber";
// import { useGLTF, OrbitControls, Environment } from "@react-three/drei";
// import { useRef, useEffect } from "react";
// import { ReinhardToneMapping } from "three";

// const Model = ({ url }) => {
//   const { scene } = useGLTF(url);
//   const ref = useRef();

//   useEffect(() => {
//     if (ref.current) {
//       // Traverse the model's children
//       ref.current.traverse((child) => {
//         if (child.isMesh) {
//           // Access the original material directly
//           const originalMaterial = child.material;

//           // If you want to adjust properties, do it without removing textures or colors
//           originalMaterial.metalness = 0.8; // Adjusting metalness can keep it metallic
//           originalMaterial.roughness = 0.2; // Lower roughness for shinier surface
//           originalMaterial.needsUpdate = true; // Update the material after changes
//         }
//       });
//     }
//   }, [scene]); // Dependency on scene to ensure it runs after loading

//   return <primitive object={scene} ref={ref} />;
// };

// const SetToneMapping = () => {
//   const { gl } = useThree();

//   useEffect(() => {
//     // Apply tone mapping to enhance visual output
//     gl.toneMapping = ReinhardToneMapping;
//     gl.toneMappingExposure = 1.2; // Adjust exposure to match lighting conditions
//   }, [gl]);

//   return null;
// };

// const ThreeScene = ({ modelUrl }) => {
//   return (
//     <Canvas>
//       {/* Render the model and apply interactive controls */}
//       <Model url={modelUrl} />
//       <OrbitControls />

//       {/* Global tone mapping and lighting setup */}
//       <SetToneMapping />

//       {/* Add environment lighting for realistic reflections */}
//       <Environment preset="apartment" />
//     </Canvas>
//   );
// };

// export default ThreeScene;


// "use client";
// import { Canvas, useThree } from "@react-three/fiber";
// import { useGLTF, OrbitControls, Environment } from "@react-three/drei";
// import { useRef, useEffect } from "react";
// import { ReinhardToneMapping } from "three";

// const Model = ({ url }) => {
//   const { scene } = useGLTF(url);
//   const ref = useRef();

//   useEffect(() => {
//     if (ref.current) {
//       ref.current.traverse((child) => {
//         if (child.isMesh) {
//           // Avoid modifying the original material properties drastically
//           const originalMaterial = child.material;

//           // Example adjustments, only if you need them
//           // Ensure transparency is disabled unless intended
//           originalMaterial.transparent = false;
          
//           // Adjust metalness and roughness with caution
//           if (originalMaterial.metalness !== undefined) {
//             originalMaterial.metalness = 0.5; // Adjust for metallic look
//           }
//           if (originalMaterial.roughness !== undefined) {
//             originalMaterial.roughness = 0.08; // Lower roughness for shinier look
//           }
          
//           // Ensure materials are updated properly
//           originalMaterial.needsUpdate = true;
//         }
//       });
//     }
//   }, [scene]);

//   return <primitive object={scene} ref={ref} />;
// };

// const SetToneMapping = () => {
//   const { gl } = useThree();

//   useEffect(() => {
//     gl.toneMapping = ReinhardToneMapping;
//     gl.toneMappingExposure = 0.6; // Adjust exposure to enhance the visual
//   }, [gl]);

//   return null;
// };

// const ThreeScene = ({ modelUrl }) => {
//   return (
//     <Canvas>
//       <Model url={modelUrl} />
//       <OrbitControls />
//       <SetToneMapping />
//       <Environment preset="apartment" />
//     </Canvas>
//   );
// };

// export default ThreeScene;

// "use client";
// import { Canvas, useThree } from "@react-three/fiber";
// import { useGLTF, OrbitControls, Environment } from "@react-three/drei";
// import { useRef, useEffect } from "react";
// import { ReinhardToneMapping } from "three";

// const Model = ({ url }) => {
//   const { scene } = useGLTF(url);
//   const ref = useRef();

//   useEffect(() => {
//     if (ref.current) {
//       ref.current.traverse((child) => {
//         if (child.isMesh) {
//           // Ensure we do not modify the material unless absolutely necessary
//           const originalMaterial = child.material;

//           // If the object looks incorrect, adjust only what is needed:
//           if (originalMaterial.metalness !== undefined) {
//             originalMaterial.metalness = originalMaterial.metalness; // Use original metalness
//           }
//           if (originalMaterial.roughness !== undefined) {
//             originalMaterial.roughness = originalMaterial.roughness; // Use original roughness
//           }

//           // Set transparency to false if objects are becoming transparent unintentionally
//           if (originalMaterial.transparent) {
//             originalMaterial.transparent = false;
//           }

//           originalMaterial.needsUpdate = true; // Ensure changes are reflected
//         }
//       });
//     }
//   }, [scene]);

//   return <primitive object={scene} ref={ref} />;
// };

// const SetToneMapping = () => {
//   const { gl } = useThree();

//   useEffect(() => {
//     gl.toneMapping = ReinhardToneMapping;
//     gl.toneMappingExposure = 1.0; // Neutral exposure to retain original look
//   }, [gl]);

//   return null;
// };

// const ThreeScene = ({ modelUrl }) => {
//   return (
//     <Canvas>
//       <Model url={modelUrl} />
//       <OrbitControls />
//       <SetToneMapping />
//       <Environment preset="apartment" /> {/* "sunset" provides a warmer light, which can enhance metallic surfaces */}
//     </Canvas>
//   );
// };

// export default ThreeScene;



// Metalic code 
// "use client";
// import { Canvas, useThree } from "@react-three/fiber";
// import { useGLTF, OrbitControls, Environment } from "@react-three/drei";
// import { useRef, useEffect } from "react";
// import { ReinhardToneMapping } from "three";

// const Model = ({ url }) => {
//   const { scene } = useGLTF(url);
//   const ref = useRef();

//   useEffect(() => {
//     if (ref.current) {
//       ref.current.traverse((child) => {
//         if (child.isMesh) {
//           // Modify existing material properties instead of replacing the material
//           const originalMaterial = child.material;

//           // Adjust metalness and roughness while keeping original colors and textures
//           originalMaterial.metalness = 0.9;  // High metalness for a shiny, metallic look
//           originalMaterial.roughness = 0;    // Low roughness for a smooth, reflective surface

//           // Ensure the material updates are applied
//           originalMaterial.needsUpdate = true;
//         }
//       });
//     }
//   }, [scene]); // Dependency on scene to ensure effect runs after model loads

//   return <primitive object={scene} ref={ref} />;
// };

// const SetToneMapping = () => {
//   const { gl } = useThree();
  
//   useEffect(() => {
//     gl.toneMapping = ReinhardToneMapping;
//     gl.toneMappingExposure = 1; // Adjust exposure for realistic rendering
//   }, [gl]);

//   return null;
// };

// const ThreeScene = ({ modelUrl }) => {
//   return (
//     <Canvas>
//       <Model url={modelUrl} />
//       <OrbitControls />
//       <SetToneMapping />
//       <Environment preset="warehouse" /> {/* Use appropriate environment preset */}
//     </Canvas>
//   );
// };

// export default ThreeScene;


// next to accurate 
// "use client";
// import { Canvas, useThree } from "@react-three/fiber";
// import { useGLTF, OrbitControls, Environment } from "@react-three/drei";
// import { useRef, useEffect } from "react";
// import { ReinhardToneMapping } from "three";

// const Model = ({ url }) => {
//   const { scene } = useGLTF(url);
//   const ref = useRef();

//   useEffect(() => {
//     if (ref.current) {
//       ref.current.traverse((child) => {
//         if (child.isMesh) {
//           const originalMaterial = child.material;

//           // Check for the material or object name to ensure only the ring is modified
//           if (child.name.includes("Ring")) { // Assuming the ring part has "Ring" in its name
//             // Apply metallic properties only to the ring
//             originalMaterial.metalness = 0.1;  // High metalness for a shiny, metallic look
//             originalMaterial.roughness = 0;    // Low roughness for a smooth, reflective surface
//             originalMaterial.needsUpdate = true; // Update material to apply changes
//           } else if (child.name.includes("Diamond")) { // Assuming the diamond part has "Diamond" in its name
//             // Ensure the diamond remains non-metallic
//             originalMaterial.metalness = 0;  // No metalness for diamonds
//             originalMaterial.roughness = 0.8; // Higher roughness for less reflectivity
//             originalMaterial.needsUpdate = true; // Update material to apply changes
//           }

//           // Ensure any other part of the model remains unchanged if necessary
//         }
//       });
//     }
//   }, [scene]); // Dependency on scene to ensure effect runs after model loads

//   return <primitive object={scene} ref={ref} />;
// };

// const SetToneMapping = () => {
//   const { gl } = useThree();
  
//   useEffect(() => {
//     gl.toneMapping = ReinhardToneMapping;
//     gl.toneMappingExposure = 1; // Adjust exposure for realistic rendering
//   }, [gl]);

//   return null;
// };

// const ThreeScene = ({ modelUrl }) => {
//   return (
//     <Canvas>
//       <Model url={modelUrl} />
//       <OrbitControls />
//       <SetToneMapping />
//       <Environment preset="warehouse" /> {/* Use appropriate environment preset */}
//     </Canvas>
//   );
// };

// export default ThreeScene;


"use client";
import { Canvas, useThree } from "@react-three/fiber";
import { useGLTF, OrbitControls, Environment } from "@react-three/drei";
import { useRef, useEffect } from "react";
import { ReinhardToneMapping, MeshStandardMaterial } from "three";

const Model = ({ url }) => {
  const { scene } = useGLTF(url);
  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      ref.current.traverse((child) => {
        if (child.isMesh) {
          const originalMaterial = child.material;

          // Create a new material if needed, or modify the existing one
          if (originalMaterial instanceof MeshStandardMaterial) {
            if (child.name.includes("Ring")) {
              // Adjust materials for rings
              originalMaterial.metalness = 0.3;  // Reduce metallic look
              originalMaterial.roughness = 0.4;  // Adjust roughness for appearance
            } else if (child.name.includes("Diamond")) {
              // Adjust materials for diamonds
              originalMaterial.metalness = 0;  // No metalness for diamonds
              originalMaterial.roughness = 0.8; // Higher roughness
              originalMaterial.transparent = false; // Ensure the diamond is not transparent
              originalMaterial.opacity = 1; // Full opacity
            }

            originalMaterial.needsUpdate = true; // Update the material
          }
        }
      });
    }
  }, [scene]); // Dependency on scene to ensure effect runs after model loads

  return <primitive object={scene} ref={ref} />;
};

const SetToneMapping = () => {
  const { gl } = useThree();

  useEffect(() => {
    gl.toneMapping = ReinhardToneMapping;
    gl.toneMappingExposure = 1; // Adjust exposure for realistic rendering
  }, [gl]);

  return null;
};

const ThreeScene = ({ modelUrl }) => {
  return (
    <Canvas>
      <Model url={modelUrl} />
      <OrbitControls />
      <SetToneMapping />
      <Environment preset="apartment" /> {/* Use appropriate environment preset */}
    </Canvas>
  );
};

export default ThreeScene;

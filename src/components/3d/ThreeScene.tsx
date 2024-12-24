'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Vector3 } from 'three'

interface ThreeSceneProps {
  mousePosition: Vector3
}

export default function ThreeScene({ mousePosition }: ThreeSceneProps) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(clock.getElapsedTime()) * 0.2
      meshRef.current.rotation.y = Math.cos(clock.getElapsedTime()) * 0.2
    }
  })

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <mesh ref={meshRef}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#6366f1" />
      </mesh>
    </>
  )
}
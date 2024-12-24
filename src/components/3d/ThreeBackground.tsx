'use client'

import { Canvas } from '@react-three/fiber'
import { useEffect, useState } from 'react'
import { Vector3 } from 'three'
import ThreeScene from './ThreeScene'

export default function ThreeBackground() {
  const [mousePosition, setMousePosition] = useState<Vector3>(new Vector3(0, 0, 0))

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1
      const y = -(event.clientY / window.innerHeight) * 2 + 1
      setMousePosition(new Vector3(x, y, 0))
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="fixed inset-0 -z-10">
      <Canvas>
        <ThreeScene mousePosition={mousePosition} />
      </Canvas>
    </div>
  )
}

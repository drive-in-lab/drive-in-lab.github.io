import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'

export default function CanvasStage({ children, camera, className, dpr = [1, 1.75] }) {
  return (
    <Canvas
      className={className}
      dpr={dpr}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      camera={camera}
    >
      <Suspense fallback={null}>{children}</Suspense>
    </Canvas>
  )
}

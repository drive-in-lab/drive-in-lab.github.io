import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import useReducedMotion from '../../lib/useReducedMotion'

const DASH_COUNT = 14
const DASH_SPACING = 2.2
const DASH_LENGTH = 40

function CenterLine() {
  const ref = useRef()
  const reduced = useReducedMotion()

  useFrame((_, delta) => {
    if (!ref.current || reduced) return
    ref.current.children.forEach((dash) => {
      dash.position.z += delta * 1.1
      if (dash.position.z > 6) dash.position.z -= DASH_LENGTH
    })
  })

  return (
    <group ref={ref}>
      {Array.from({ length: DASH_COUNT }).map((_, i) => (
        <mesh key={i} position={[2.2, -1.18, 6 - i * DASH_SPACING]}>
          <boxGeometry args={[0.12, 0.02, 0.9]} />
          <meshStandardMaterial color="#ff9f1c" emissive="#ff9f1c" emissiveIntensity={0.5} />
        </mesh>
      ))}
    </group>
  )
}

// A dark asphalt strip beneath the accent grid, with an animated dashed
// centre line, so the ground reads as an actual road rather than a HUD grid.
export default function RoadSurface() {
  return (
    <>
      <mesh position={[0, -1.22, -6]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[10, 40]} />
        <meshStandardMaterial color="#0a0e16" roughness={0.95} />
      </mesh>
      <CenterLine />
    </>
  )
}

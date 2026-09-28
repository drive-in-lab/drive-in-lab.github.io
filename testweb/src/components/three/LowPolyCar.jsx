import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import useReducedMotion from '../../lib/useReducedMotion'

function Wheel({ position }) {
  const ref = useRef()
  const reduced = useReducedMotion()

  useFrame((_, delta) => {
    if (!ref.current || reduced) return
    ref.current.rotation.x -= delta * 6
  })

  return (
    <mesh ref={ref} position={position} rotation={[0, 0, Math.PI / 2]}>
      <cylinderGeometry args={[0.26, 0.26, 0.22, 20]} />
      <meshStandardMaterial color="#0d1420" roughness={0.7} />
    </mesh>
  )
}

function HeadlightBeam({ position }) {
  return (
    <mesh position={position} rotation={[Math.PI / 2, 0, 0]}>
      <coneGeometry args={[0.9, 3.2, 20, 1, true]} />
      <meshBasicMaterial
        color="#fff6df"
        transparent
        opacity={0.1}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        side={THREE.DoubleSide}
      />
    </mesh>
  )
}

// A low-poly car (boxes + cylinders, no external model) driving down the
// road toward the viewer, emerging from the fog — the hero's focal image.
export default function LowPolyCar({ color = '#ff9f1c' }) {
  const group = useRef()
  const reduced = useReducedMotion()

  useFrame((_, delta) => {
    if (!group.current || reduced) return
    group.current.position.z += delta * 1.1
    if (group.current.position.z > -7) group.current.position.z = -16
  })

  return (
    <group ref={group} position={[3.6, -0.62, -16]}>
      <mesh position={[0, 0.18, 0]}>
        <boxGeometry args={[1.15, 0.34, 2.4]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.15} roughness={0.35} metalness={0.3} />
      </mesh>
      <mesh position={[0, 0.48, -0.15]}>
        <boxGeometry args={[0.9, 0.32, 1.15]} />
        <meshStandardMaterial color="#101a29" roughness={0.3} metalness={0.2} />
      </mesh>

      <mesh position={[0.4, 0.2, 1.18]}>
        <sphereGeometry args={[0.08, 12, 12]} />
        <meshStandardMaterial color="#fff6df" emissive="#fff6df" emissiveIntensity={2.2} />
      </mesh>
      <mesh position={[-0.4, 0.2, 1.18]}>
        <sphereGeometry args={[0.08, 12, 12]} />
        <meshStandardMaterial color="#fff6df" emissive="#fff6df" emissiveIntensity={2.2} />
      </mesh>
      <pointLight position={[0.4, 0.25, 1.3]} color="#fff6df" intensity={4} distance={4} />
      <pointLight position={[-0.4, 0.25, 1.3]} color="#fff6df" intensity={4} distance={4} />
      <HeadlightBeam position={[0.4, 0.05, 1.8]} />
      <HeadlightBeam position={[-0.4, 0.05, 1.8]} />

      <mesh position={[0.42, 0.22, -1.18]}>
        <boxGeometry args={[0.12, 0.08, 0.05]} />
        <meshStandardMaterial color="#ff3b3b" emissive="#ff3b3b" emissiveIntensity={1.6} />
      </mesh>
      <mesh position={[-0.42, 0.22, -1.18]}>
        <boxGeometry args={[0.12, 0.08, 0.05]} />
        <meshStandardMaterial color="#ff3b3b" emissive="#ff3b3b" emissiveIntensity={1.6} />
      </mesh>

      <Wheel position={[0.62, -0.12, 0.75]} />
      <Wheel position={[-0.62, -0.12, 0.75]} />
      <Wheel position={[0.62, -0.12, -0.75]} />
      <Wheel position={[-0.62, -0.12, -0.75]} />
    </group>
  )
}

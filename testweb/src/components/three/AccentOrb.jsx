import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import useReducedMotion from '../../lib/useReducedMotion'

function SteeringWheel({ color }) {
  const hubRadius = 0.22
  const rimRadius = 1.1
  const spokeLength = rimRadius - hubRadius

  return (
    <group rotation={[0.2, 0, 0]}>
      <mesh>
        <torusGeometry args={[rimRadius, 0.11, 16, 48]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.35} wireframe roughness={0.4} />
      </mesh>
      {[0, 1, 2].map((i) => (
        <group key={i} rotation={[0, 0, (i * Math.PI * 2) / 3]}>
          <mesh position={[0, hubRadius + spokeLength / 2, 0]}>
            <boxGeometry args={[0.09, spokeLength, 0.09]} />
            <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.35} wireframe roughness={0.4} />
          </mesh>
        </group>
      ))}
      <mesh>
        <sphereGeometry args={[hubRadius, 16, 16]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.35} wireframe roughness={0.4} />
      </mesh>
    </group>
  )
}

function Eye({ color }) {
  // A thin iris ring reads as a flat line whenever it turns even slightly
  // off-axis, so the pupil is a solid sphere instead — that stays a
  // recognisable dot at any small rotation, unlike a ring.
  return (
    <group>
      <mesh>
        <sphereGeometry args={[1.15, 24, 24]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.25} wireframe roughness={0.4} />
      </mesh>
      <mesh position={[0, 0, 0.85]}>
        <sphereGeometry args={[0.5, 20, 20]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.45} roughness={0.3} />
      </mesh>
      <mesh position={[0, 0, 1.05]}>
        <sphereGeometry args={[0.24, 16, 16]} />
        <meshStandardMaterial color="#05070b" roughness={0.6} />
      </mesh>
    </group>
  )
}

function RoadSign({ color }) {
  return (
    <group rotation={[0, 0, Math.PI]}>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <coneGeometry args={[1.3, 0.18, 3]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.35} wireframe roughness={0.4} />
      </mesh>
      <mesh position={[0, -0.05, 0]} rotation={[0, 0, Math.PI]}>
        <boxGeometry args={[0.12, 0.55, 0.05]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.35} wireframe roughness={0.4} />
      </mesh>
    </group>
  )
}

function Gauge({ color }) {
  return (
    <group rotation={[0.15, 0, 0]}>
      <mesh rotation={[0, 0, Math.PI * 0.63]}>
        <torusGeometry args={[1.1, 0.1, 16, 32, Math.PI * 1.5]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.35} wireframe roughness={0.4} />
      </mesh>
      <mesh position={[0.25, -0.25, 0]} rotation={[0, 0, -0.7]}>
        <boxGeometry args={[0.08, 0.9, 0.08]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.6} wireframe roughness={0.4} />
      </mesh>
      <mesh>
        <sphereGeometry args={[0.14, 12, 12]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.6} wireframe roughness={0.4} />
      </mesh>
    </group>
  )
}

const SHAPES = {
  steeringWheel: SteeringWheel,
  eye: Eye,
  roadSign: RoadSign,
  gauge: Gauge,
}

// A small rotating driving/vision-themed accent used consistently across
// secondary pages. Shape + color vary per page for identity.
export default function AccentOrb({ color = '#35d0ff', shape = 'steeringWheel' }) {
  const ref = useRef()
  const reduced = useReducedMotion()
  const Shape = SHAPES[shape] ?? SteeringWheel

  useFrame((_, delta) => {
    if (!ref.current || reduced) return
    // The eye's iris is a directional feature — spinning it a full 360°
    // makes it flash edge-on. Let Float's bounded wobble carry its motion
    // instead of adding a continuous spin.
    if (shape !== 'eye') {
      ref.current.rotation.y += delta * 0.32
    }
  })

  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[3, 3, 3]} color={color} intensity={50} />
      <Float speed={reduced ? 0 : 1.6} rotationIntensity={reduced ? 0 : 0.4} floatIntensity={reduced ? 0 : 1}>
        <group ref={ref} scale={0.85}>
          <Shape color={color} />
        </group>
      </Float>
    </>
  )
}

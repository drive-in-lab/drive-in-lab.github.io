import { Grid, Stars } from '@react-three/drei'
import RoadSurface from './RoadSurface'
import LowPolyCar from './LowPolyCar'

function RoadGrid() {
  return (
    <Grid
      position={[0, -1.2, 0]}
      args={[10, 10]}
      cellColor="#16233a"
      sectionColor="#35d0ff"
      sectionThickness={1}
      cellThickness={0.6}
      fadeDistance={26}
      fadeStrength={1.5}
      infiniteGrid
    />
  )
}

// Homepage hero: a car driving down a lit road toward the viewer, emerging
// out of the night fog — the concrete "driving" image the site is about.
export default function HeroScene() {
  return (
    <>
      <color attach="background" args={['#05070b']} />
      <fog attach="fog" args={['#05070b', 8, 24]} />
      <ambientLight intensity={0.5} />
      <pointLight position={[4, 4, 4]} color="#35d0ff" intensity={60} />
      <pointLight position={[-4, 2, -3]} color="#ff9f1c" intensity={40} />
      <Stars radius={40} depth={20} count={1200} factor={2} fade speed={0.4} />
      <RoadSurface />
      <RoadGrid />
      <LowPolyCar />
    </>
  )
}

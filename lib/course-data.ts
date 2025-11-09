export interface Simulation {
  id: string
  title: string
  description: string
  filePath: string
  tags: string[]
}

export interface Topic {
  id: string
  name: string
  description: string
  simulations: Simulation[]
}

export interface Course {
  id: string
  code: string
  name: string
  description: string
  topics: Topic[]
}

// Hardcoded course data matching the Data/ folder structure
export const courses: Course[] = [
  {
    id: "phys-1001",
    code: "PHYS 1001",
    name: "Intro Mechanics",
    description: "Fundamental concepts of classical mechanics including motion, forces, energy, and momentum.",
    topics: [
      {
        id: "motion-fundamentals",
        name: "Motion Fundamentals",
        description: "Explore the basics of motion including velocity, acceleration, and projectile motion.",
        simulations: [
          {
            id: "projectile-motion",
            title: "Projectile Motion",
            description:
              "Interactive simulation demonstrating parabolic motion under gravity. Click to launch projectiles with random velocities and observe the trajectory, velocity vectors, and motion trail.",
            filePath:
              "/Data/Courses/PHYS-1001-Intro-Mechanics/Topics/Motion-Fundamentals/Simulations/projectile-motion.html",
            tags: ["kinematics", "projectile-motion", "gravity", "vectors", "trajectory"],
          },
        ],
      },
      {
        id: "forces-and-friction",
        name: "Forces and Friction",
        description: "Understand how forces affect motion and the role of friction in real-world scenarios.",
        simulations: [
          {
            id: "friction-demo",
            title: "Friction and Force Visualization",
            description:
              "Apply forces to a box on a surface and observe how friction opposes motion. Use arrow keys to apply force and see real-time force vectors, velocity, and acceleration calculations.",
            filePath:
              "/Data/Courses/PHYS-1001-Intro-Mechanics/Topics/Forces-and-Friction/Simulations/friction-demo.html",
            tags: ["forces", "friction", "kinetic-friction", "dynamics", "vectors"],
          },
        ],
      },
      {
        id: "3d-visualization",
        name: "3D Visualization",
        description: "Explore physics concepts in three-dimensional space using interactive 3D graphics.",
        simulations: [
          {
            id: "rotating-cube",
            title: "3D Rotating Cube",
            description:
              "Visualize rotational motion in 3D space. Interact with the cube using mouse controls, observe angular velocity, and understand rotation in three dimensions. Press space to toggle rotation.",
            filePath: "/Data/Courses/PHYS-1001-Intro-Mechanics/Topics/3D-Visualization/Simulations/rotating-cube.html",
            tags: ["rotation", "angular-velocity", "torque", "rigid-body", "3D-visualization"],
          },
        ],
      },
    ],
  },
  {
    id: "phys-1100",
    code: "PHYS 1100",
    name: "Fundamentals of Physics 1",
    description: "Foundational mechanics course covering Newton's laws and basic dynamics.",
    topics: [
      {
        id: "laws-and-friction",
        name: "Chapter 4: The Laws of Motion & Chapter 5.1: Friction",
        description: "A combined topic covering Newton's laws and introductory frictional forces.",
        simulations: [
          {
            id: "lawn-mower",
            title: "Lawn Mower: Forces & Friction",
            description:
              "Simulate pushing a lawn mower with adjustable mass, applied force, friction, and initial speed. Observe velocity, acceleration, and stopping distance.",
            filePath:
              "/Data/Courses/PHYS-1100-Fundamentals-of-Physics-1/Topics/Chapter-4-The-Laws-of-Motion-&-Chapter-5.1-Friction/Simulations/lawn-mower.html",
            tags: ["forces", "friction", "stopping-distance", "kinematics", "dynamics"],
          },
        ],
      },
      {
        id: "circular-motion-gravitation",
        name: "Ch 6.1_6.2_6.5: Circular Motion and Gravitation",
        description: "Explore circular motion, centripetal acceleration, and gravitational forces in orbital mechanics.",
        simulations: [
          {
            id: "centripetal-acceleration",
            title: "Centripetal Acceleration",
            description:
              "Visualize and calculate the centripetal acceleration of a car following a circular curve. Adjust speed and radius to see how these parameters affect the acceleration required to maintain circular motion.",
            filePath:
              "/Data/Courses/PHYS-1100-Fundamentals-of-Physics-1/Topics/Ch-6.1-6.2-6.5-Circular-Motion-and-Gravitation/Simulations/centripetal-acceleration.html",
            tags: ["circular-motion", "centripetal-acceleration", "kinematics", "curve"],
          },
          {
            id: "gravity-on-planets",
            title: "Gravity on Different Planets",
            description:
              "Compare gravitational acceleration on planets with different masses and radii. Explore how the inverse-square law affects gravity using the formula g = GM/R². Switch between Planet X and Planet Y to understand how doubling mass and radius affects surface gravity.",
            filePath:
              "/Data/Courses/PHYS-1100-Fundamentals-of-Physics-1/Topics/Ch-6.1-6.2-6.5-Circular-Motion-and-Gravitation/Simulations/gravity-on-planets.html",
            tags: ["gravity", "gravitational-acceleration", "inverse-square-law", "planet-comparison"],
          },
          {
            id: "centripetal-acceleration-cases",
            title: "Centripetal Acceleration: Velocity and Radius Effects",
            description:
              "Explore how centripetal acceleration changes when velocity and radius vary. Test 6 different scenarios (baseline, 2× velocity, ½ radius, 2×v with ½r, 4× velocity, 2× radius) to understand the relationship a_c = v²/r. Visualize a Ferrari on a racetrack with real-time calculations showing how the multiplier effect works.",
            filePath:
              "/Data/Courses/PHYS-1100-Fundamentals-of-Physics-1/Topics/Ch-6.1-6.2-6.5-Circular-Motion-and-Gravitation/Simulations/centripetal-acceleration-cases.html",
            tags: ["circular-motion", "centripetal-acceleration", "velocity-effects", "radius-effects", "parametric-analysis"],
          },
          {
            id: "banked-curve-safe-speeds",
            title: "Banked Curve with Friction: Safe Speeds & FBD",
            description:
              "Interactive visualization of a car on a frictional banked curve. Adjust bank angle β, static friction μₛ, radius R, and car speed v. A circular track view plus live FBD show mg, N, and friction while computing v_min and v_max for impending up/down slip; the car drifts inward or outward when v is outside the safe band.",
            filePath:
              "/Data/Courses/PHYS-1100-Fundamentals-of-Physics-1/Topics/Ch-6.1-6.2-6.5-Circular-Motion-and-Gravitation/Simulations/banked-curve-safe-speeds.html",
            tags: [
              "circular-motion",
              "banked-curve",
              "friction",
              "safe-speed-range",
              "free-body-diagram",
              "centripetal-force",
              "p5.js",
              "interactive-visualization",
            ],
          },
        ],
      },
      {
        id: "work-and-energy",
        name: "Ch 7: Work and Energy",
        description: "Understand the relationship between work, energy, and motion. Explore how forces at different angles affect work done on objects.",
        simulations: [
          {
            id: "work-done-by-forces",
            title: "Work Done by Different Forces",
            description:
              "Compare how different forces perform work on an object with the same displacement. Explore three scenarios: a perpendicular force (10 N), an angled force (8 N @ 60°), and an aligned force (6 N). Use the formula W = F·d·cos(θ) to understand which force does the most work.",
            filePath:
              "/Data/Courses/PHYS-1100-Fundamentals-of-Physics-1/Topics/Ch-7-Work-and-Energy/Simulations/work-done-by-forces.html",
            tags: ["work", "energy", "force-angle", "dot-product", "physics-problem-solving"],
          },
          {
            id: "conservation-of-energy",
            title: "Conservation of Energy: Potential to Kinetic",
            description:
              "Watch a tennis ball fall from a height and observe the real-time conversion of gravitational potential energy into kinetic energy. As it falls, potential energy decreases while kinetic energy increases, keeping the total mechanical energy constant. Interactive sliders let you adjust mass, height, and gravity to explore how these parameters affect the energy transformation.",
            filePath:
              "/Data/Courses/PHYS-1100-Fundamentals-of-Physics-1/Topics/Ch-7-Work-and-Energy/Simulations/conservation-of-energy.html",
            tags: ["conservation-of-energy", "potential-energy", "kinetic-energy", "mechanical-energy", "falling-objects", "energy-conversion"],
          },
          {
            id: "bike-trailer",
            title: "Work and Energy with Non-Conservative Force",
            description:
              "Monica pulls her daughter Jessie in a bike trailer up a slope. Observe how the external pulling force adds energy to the system. Use the generalized work-energy theorem to calculate final velocity: ½m·v_i² + F_pull·d = ½m·v_f² + m·g·h. Adjust mass, slope height, pulling force, and initial velocity to see how each parameter affects the final speed.",
            filePath:
              "/Data/Courses/PHYS-1100-Fundamentals-of-Physics-1/Topics/Ch-7-Work-and-Energy/Simulations/bike-trailer.html",
            tags: ["work-energy-theorem", "non-conservative-force", "external-force", "energy-transformation", "bike-trailer", "slope-mechanics"],
          },
          {
            id: "power-comparison",
            title: "Power Comparison: Students Climbing Stairs",
            description:
              "Compare the power output of four students climbing stairs. Power is the rate at which work is done (P = W/t = mgh/t). Discover how mass, height, and time combine to determine power output. Student B has the highest power despite not climbing the highest or being the lightest—it's about efficiency!",
            filePath:
              "/Data/Courses/PHYS-1100-Fundamentals-of-Physics-1/Topics/Ch-7-Work-and-Energy/Simulations/power-comparison.html",
            tags: ["power", "work", "energy", "rate-of-work", "efficiency", "comparative-analysis", "student-climbing"],
          },
        ],
      },
      {
        id: "oscillatory-motion-waves",
        name: "Ch 16: Oscillatory Motion and Waves",
        description:
          "Explore sinusoidal waves, snapshot and history graphs, and how wavelength and period determine wave speed.",
        simulations: [
          {
            id: "reading-wave-graphs",
            title: "Reading Wave Graphs: Snapshot vs History",
            description:
              "Interactively explore a travelling sinusoidal wave together with its snapshot (y vs x) and history (y vs t) graphs. Adjust amplitude, wavelength, and period, click to track a point on the string, and visualize how v = λ / T emerges from the graphs.",
            filePath:
              "/Data/Courses/PHYS-1100-Fundamentals-of-Physics-1/Topics/Ch-16-Oscillatory-Motion-and-Waves/Simulations/reading-wave-graphs.html",
            tags: [
              "waves",
              "oscillations",
              "snapshot-graph",
              "history-graph",
              "wave-speed",
              "p5.js",
              "interactive-visualization",
            ],
          },
          {
            id: "mass-spring-oscillator-period",
            title: "Mass-Spring Oscillator Period: Skydivers",
            description:
              "Visualize a skydiver hanging from a springy parachute and see how adding a second skydiver changes the oscillation period. The simulation computes k from the initial period and mass, then updates the motion using T = 2π√(m/k), providing a clear, light-themed demonstration that T ∝ √m.",
            filePath:
              "/Data/Courses/PHYS-1100-Fundamentals-of-Physics-1/Topics/Ch-16-Oscillatory-Motion-and-Waves/Simulations/mass-spring-oscillator-period.html",
            tags: [
              "oscillations",
              "mass-spring",
              "period",
              "T=2π√(m/k)",
              "wave-motion",
              "p5.js",
              "interactive-visualization",
            ],
          },
          {
            id: "superposition-of-waves",
            title: "Superposition of Waves",
            description:
              "Explore the principle of superposition using two time-dependent wave graphs stacked above their resultant. Drag a vertical scrubber to any time t to read y₁(t), y₂(t), and see the dynamically computed sum y₁(t) + y₂(t). At t = 5 s, the simulation highlights y₁ ≈ -3, y₂ ≈ -4, and their resultant ≈ -7, matching the problem statement from Slide 19.",
            filePath:
              "/Data/Courses/PHYS-1100-Fundamentals-of-Physics-1/Topics/Ch-16-Oscillatory-Motion-and-Waves/Simulations/superposition-of-waves.html",
            tags: [
              "waves",
              "superposition",
              "interference",
              "resultant-wave",
              "time-graphs",
              "p5.js",
              "interactive-visualization",
            ],
          },
          {
            id: "standing-waves-on-string",
            title: "Standing Waves on a String",
            description:
              "Interactive visualization of harmonics on a string fixed at both ends. Select mode number m (1–5) to see the corresponding standing wave pattern y(x,t) = A sin(mπx/L) cos(ωt), with clearly marked nodes and antinodes. The data panel updates λₘ = 2L/m and fₘ = m·f₁ in real time, matching the slide treatment of allowed standing-wave modes.",
            filePath:
              "/Data/Courses/PHYS-1100-Fundamentals-of-Physics-1/Topics/Ch-16-Oscillatory-Motion-and-Waves/Simulations/standing-waves-on-string.html",
            tags: [
              "standing-waves",
              "harmonics",
              "string-fixed-ends",
              "nodes",
              "antinodes",
              "wavelength",
              "frequency",
              "p5.js",
            ],
          },
        ],
      },
      {
        id: "linear-momentum-collisions",
        name: "Ch 8: Linear Momentum and Collisions",
        description: "Explore momentum, the relationship between mass and velocity, and how objects collide and transfer momentum.",
        simulations: [
          {
            id: "comparing-momentum",
            title: "Comparing Momentum: Tricycle vs Truck",
            description:
              "Discover which has greater momentum: a 1000 kg tricycle at 60 m/s or a 3000 kg truck at 60 m/s? Adjust velocities interactively and observe real-time momentum calculations using p = m·v. Visualize momentum bars and understand why mass matters as much as speed.",
            filePath:
              "/Data/Courses/PHYS-1100-Fundamentals-of-Physics-1/Topics/Ch-8-Linear-Momentum-and-Collisions/Simulations/comparing-momentum.html",
            tags: ["momentum", "mass", "velocity", "conservation-of-momentum", "comparative-analysis", "p=mv"],
          },
          {
            id: "impulse-bouncing",
            title: "Impulse and Bouncing",
            description:
              "Explore the impulse-momentum theorem through a ball bouncing off a wall. Understand how momentum is a vector quantity and how a reversal in direction creates a large impulse. Adjust mass and velocities to see how Δp = m(v_f - v_i) and how Impulse = Δp. Watch the animation of the collision and observe the impulse vector in real-time.",
            filePath:
              "/Data/Courses/PHYS-1100-Fundamentals-of-Physics-1/Topics/Ch-8-Linear-Momentum-and-Collisions/Simulations/impulse-bouncing.html",
            tags: ["impulse", "momentum", "impulse-momentum-theorem", "vector-quantity", "collision", "direction-reversal", "change-in-momentum"],
          },
          {
            id: "ice-skaters-momentum",
            title: "Conservation of Momentum: Ice Skaters",
            description:
              "Two ice skaters push off each other on frictionless ice. Starting at rest with zero total momentum, they move apart at different velocities due to their different masses. Watch momentum vectors point in opposite directions with equal magnitudes, confirming that total momentum remains zero.",
            filePath:
              "/Data/Courses/PHYS-1100-Fundamentals-of-Physics-1/Topics/Ch-8-Linear-Momentum-and-Collisions/Simulations/ice-skaters-momentum.html",
            tags: ["conservation-of-momentum", "momentum-vectors", "explosion", "ice-skaters", "frictionless-surface", "mass-velocity-relationship"],
          },
          {
            id: "explosion-boxes-momentum",
            title: "Conservation of Momentum: Explosion from Rest",
            description:
              "Two boxes sitting together at rest explode apart on a frictionless surface. The 1-kg box shoots left at 4 m/s while the 2-kg box moves right at 2 m/s. Observe how the lighter box moves twice as fast as the heavier box, and momentum vectors remain equal and opposite with total momentum staying at zero.",
            filePath:
              "/Data/Courses/PHYS-1100-Fundamentals-of-Physics-1/Topics/Ch-8-Linear-Momentum-and-Collisions/Simulations/explosion-boxes-momentum.html",
            tags: ["conservation-of-momentum", "momentum-vectors", "explosion", "frictionless-surface", "mass-velocity-relationship", "quick-check"],
          },
          {
            id: "inelastic-collision",
            title: "Perfectly Inelastic Collision",
            description:
              "Two boxes on a frictionless surface collide and stick together. One box moves at +4 m/s while the other moves at -2 m/s. The simulation shows how momentum is conserved as the combined mass comes to rest, demonstrating that the initial and final momenta are equal.",
            filePath:
              "/Data/Courses/PHYS-1100-Fundamentals-of-Physics-1/Topics/Ch-8-Linear-Momentum-and-Collisions/Simulations/inelastic-collision.html",
            tags: ["inelastic-collision", "conservation-of-momentum", "collision", "combined-mass", "frictionless-surface"],
          },
          {
            id: "two-stage-problem",
            title: "Two-Stage Problem: Collision & Projectile Motion",
            description:
              "A bullet embeds in a wooden block on a table, which then falls off and lands at a measured distance. Work backward through projectile motion to find the launch speed, then use collision dynamics to determine the bullet's initial speed. Combines momentum conservation with kinematics.",
            filePath:
              "/Data/Courses/PHYS-1100-Fundamentals-of-Physics-1/Topics/Ch-8-Linear-Momentum-and-Collisions/Simulations/two-stage-problem.html",
            tags: ["two-stage-problem", "collision", "projectile-motion", "momentum-conservation", "problem-solving"],
          },
          {
            id: "collision-2d",
            title: "2D Collision: Momentum Conservation",
            description:
              "Two poker chips collide on a frictionless table in two dimensions. Analyze momentum conservation independently in the x and y directions. Determine the final velocity of the blue chip and check whether the collision was elastic or inelastic using kinetic energy.",
            filePath:
              "/Data/Courses/PHYS-1100-Fundamentals-of-Physics-1/Topics/Ch-8-Linear-Momentum-and-Collisions/Simulations/collision-2d.html",
            tags: ["2d-collision", "conservation-of-momentum", "momentum-vectors", "elastic-collision", "kinetic-energy"],
          },
        ],
      },
      {
        id: "oscillatory-motion-waves",
        name: "Ch 16: Oscillatory Motion and Waves",
        description:
          "Explore sinusoidal waves, snapshot and history graphs, and how wavelength and period determine wave speed.",
        simulations: [
          {
            id: "reading-wave-graphs",
            title: "Reading Wave Graphs: Snapshot vs History",
            description:
              "Interactively explore a travelling sinusoidal wave together with its snapshot (y vs x) and history (y vs t) graphs. Adjust amplitude, wavelength, and period, click to track a point on the string, and visualize how v = λ / T emerges from the graphs.",
            filePath:
              "/Data/Courses/PHYS-1100-Fundamentals-of-Physics-1/Topics/Ch-16-Oscillatory-Motion-and-Waves/Simulations/reading-wave-graphs.html",
            tags: [
              "waves",
              "oscillations",
              "snapshot-graph",
              "history-graph",
              "wave-speed",
              "p5.js",
              "interactive-visualization",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "phys-2001",
    code: "PHYS 2001",
    name: "Electromagnetism",
    description: "Electric and magnetic fields, circuits, and electromagnetic waves.",
    topics: [],
  },
  {
    id: "phys-3001",
    code: "PHYS 3001",
    name: "Quantum Mechanics",
    description: "Introduction to quantum theory, wave functions, and the Schrödinger equation.",
    topics: [],
  },
]

export function getCourseById(id: string): Course | undefined {
  return courses.find((course) => course.id === id)
}

export function getTopicById(courseId: string, topicId: string): Topic | undefined {
  const course = getCourseById(courseId)
  return course?.topics.find((topic) => topic.id === topicId)
}

export function getSimulationById(courseId: string, topicId: string, simulationId: string): Simulation | undefined {
  const topic = getTopicById(courseId, topicId)
  return topic?.simulations.find((sim) => sim.id === simulationId)
}

export function getCourseStats(course: Course) {
  const topicCount = course.topics.length
  const simulationCount = course.topics.reduce((acc, topic) => acc + topic.simulations.length, 0)
  return { topicCount, simulationCount }
}

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

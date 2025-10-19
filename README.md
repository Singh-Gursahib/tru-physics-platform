# TRU Physics Curriculum Platform

A visually elegant, light-themed web platform for the **Physics Department at Thompson Rivers University (TRU)** to digitalize and streamline the process of building course curricula. This platform provides professors with an intuitive, visual workspace to manage courses, topics, and interactive physics simulations.

## 🎨 Design Philosophy

The platform embodies a **digital lab for creating learning experiences** with:

- **Teal → Darker Teal Color Palette**: Academic and modern aesthetic using OKLCH color space
- **Figtree Font**: Clean, professional typography for excellent readability
- **Light Theme**: Airy, spacious design with subtle shadows and rounded corners
- **Minimal & Polished**: Focus on content with elegant spacing and smooth transitions
- **Responsive Design**: Seamless experience from mobile to desktop

## 🏗️ Architecture Overview

### Technology Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 with custom teal-based design tokens
- **UI Components**: shadcn/ui component library
- **Simulations**: p5.js and Three.js for interactive physics visualizations
- **Deployment**: Vercel-ready with Analytics integration

### Project Structure

\`\`\`
tru-physics-platform/
├── app/
│   ├── page.tsx                          # Landing page
│   ├── dashboard/
│   │   └── page.tsx                      # Course dashboard
│   ├── courses/
│   │   └── [courseId]/
│   │       ├── page.tsx                  # Course detail view
│   │       └── topics/
│   │           └── [topicId]/
│   │               ├── page.tsx          # Topic view with simulations
│   │               └── simulations/
│   │                   └── [simulationId]/
│   │                       └── page.tsx  # Simulation sandbox viewer
│   ├── layout.tsx                        # Root layout with Figtree font
│   └── globals.css                       # Teal-based design tokens
│
├── components/
│   ├── site-header.tsx                   # Shared navigation header
│   ├── course-card.tsx                   # Course display card
│   ├── simulation-card.tsx               # Simulation preview card
│   ├── sandbox-frame.tsx                 # Iframe simulation viewer
│   ├── empty-state.tsx                   # Empty state component
│   └── ui/                               # shadcn/ui components
│
├── lib/
│   └── course-data.ts                    # Data layer and type definitions
│
└── public/
    └── Data/
        └── Courses/
            └── {CourseName}/
                └── Topics/
                    └── {TopicName}/
                        └── Simulations/
                            └── {FileName}.html
\`\`\`

## 📁 Data Architecture

### Local Folder Structure

The platform uses a **hardcoded folder structure** in `public/Data/` to represent courses, topics, and simulations:

\`\`\`
public/Data/Courses/
├── PHYS-1001-Intro-Mechanics/
│   └── Topics/
│       ├── Motion-Fundamentals/
│       │   └── Simulations/
│       │       └── projectile-motion.html
│       ├── Forces-and-Friction/
│       │   └── Simulations/
│       │       └── friction-demo.html
│       └── 3D-Visualization/
│           └── Simulations/
│               └── rotating-cube.html
├── PHYS-2001-Electromagnetism/
│   └── Topics/
└── PHYS-3001-Quantum-Mechanics/
    └── Topics/
\`\`\`

### Data Layer (`lib/course-data.ts`)

The data layer provides TypeScript interfaces and functions to access course data:

\`\`\`typescript
interface Simulation {
  id: string
  title: string
  description: string
  filePath: string  // Path to HTML file in public/Data/
  tags: string[]
}

interface Topic {
  id: string
  name: string
  description: string
  simulations: Simulation[]
}

interface Course {
  id: string
  code: string
  name: string
  description: string
  topics: Topic[]
}
\`\`\`

**Key Functions:**
- `getCourseById(id)` - Retrieve course by ID
- `getTopicById(courseId, topicId)` - Retrieve topic within a course
- `getSimulationById(courseId, topicId, simulationId)` - Retrieve specific simulation
- `getCourseStats(course)` - Calculate topic and simulation counts

## 🧪 Dummy Data & Simulations

### Included Simulations

The platform ships with **3 working simulations** in the PHYS 1001 course:

#### 1. Projectile Motion (p5.js)
- **Path**: `/Data/Courses/PHYS-1001-Intro-Mechanics/Topics/Motion-Fundamentals/Simulations/projectile-motion.html`
- **Features**: Interactive ball launch, trajectory visualization, velocity vectors, motion trails
- **Interaction**: Click to launch with random velocities

#### 2. Friction and Force Visualization (p5.js)
- **Path**: `/Data/Courses/PHYS-1001-Intro-Mechanics/Topics/Forces-and-Friction/Simulations/friction-demo.html`
- **Features**: Applied force vectors, friction visualization, real-time physics calculations
- **Interaction**: Arrow keys to apply force, spacebar to stop

#### 3. 3D Rotating Cube (Three.js)
- **Path**: `/Data/Courses/PHYS-1001-Intro-Mechanics/Topics/3D-Visualization/Simulations/rotating-cube.html`
- **Features**: 3D rotation, orbital controls, angular velocity display
- **Interaction**: Click and drag to rotate, scroll to zoom, spacebar to toggle rotation

### Empty Courses

Two additional courses are included with no topics/simulations:
- **PHYS 2001 — Electromagnetism**
- **PHYS 3001 — Quantum Mechanics**

These display elegant "Coming Soon" empty states.

## 🚀 Adding New Content

### Adding a New Simulation

1. **Create the HTML file** in the appropriate directory:
   \`\`\`
   public/Data/Courses/{CourseName}/Topics/{TopicName}/Simulations/{simulation-name}.html
   \`\`\`

2. **Update `lib/course-data.ts`** to reference the new simulation:
   \`\`\`typescript
   {
     id: "simulation-name",
     title: "Simulation Title",
     description: "Detailed description of what the simulation demonstrates",
     filePath: "/Data/Courses/{CourseName}/Topics/{TopicName}/Simulations/{simulation-name}.html",
     tags: ["tag1", "tag2", "tag3"]
   }
   \`\`\`

3. The simulation will automatically appear in the UI.

### Adding a New Topic

1. **Create the topic folder**:
   \`\`\`
   public/Data/Courses/{CourseName}/Topics/{NewTopicName}/Simulations/
   \`\`\`

2. **Update `lib/course-data.ts`** to add the topic to the course:
   \`\`\`typescript
   {
     id: "new-topic-id",
     name: "New Topic Name",
     description: "Topic description",
     simulations: []
   }
   \`\`\`

### Adding a New Course

1. **Create the course folder structure**:
   \`\`\`
   public/Data/Courses/{NewCourseName}/Topics/
   \`\`\`

2. **Add the course to `lib/course-data.ts`**:
   \`\`\`typescript
   {
     id: "course-id",
     code: "PHYS XXXX",
     name: "Course Name",
     description: "Course description",
     topics: []
   }
   \`\`\`

## 🎯 Current Features

### ✅ Implemented

- **Landing Page**: Hero section with feature cards and call-to-action
- **Course Dashboard**: Grid view of all courses with statistics
- **Course Detail View**: Display topics within a course
- **Topic View**: Grid of simulation cards with tags and descriptions
- **Simulation Sandbox**: Full-page iframe viewer with:
  - Fullscreen toggle
  - Open in new window
  - Breadcrumb navigation
  - Metadata display
- **Responsive Design**: Mobile-first approach with breakpoints
- **Empty States**: Elegant placeholders for courses/topics without content
- **Sandboxed Iframes**: Safe execution of p5.js and Three.js simulations

### 🚧 Disabled (Future Features)

The following buttons are **visible but disabled** with tooltips indicating "Will connect to Supabase later":

- Add Course button (Dashboard)
- Add Topic button (Course page)
- Add Simulation button (Topic page)
- Remove/Edit functionality

## 🔮 Future Roadmap

### Phase 1: Database Integration (Supabase)

**Goal**: Replace hardcoded data with dynamic database storage

**Implementation Plan**:
1. Set up Supabase project with PostgreSQL database
2. Create database schema:
   \`\`\`sql
   CREATE TABLE courses (
     id UUID PRIMARY KEY,
     code TEXT NOT NULL,
     name TEXT NOT NULL,
     description TEXT,
     created_at TIMESTAMP DEFAULT NOW()
   );

   CREATE TABLE topics (
     id UUID PRIMARY KEY,
     course_id UUID REFERENCES courses(id),
     name TEXT NOT NULL,
     description TEXT,
     order_index INTEGER,
     created_at TIMESTAMP DEFAULT NOW()
   );

   CREATE TABLE simulations (
     id UUID PRIMARY KEY,
     topic_id UUID REFERENCES topics(id),
     title TEXT NOT NULL,
     description TEXT,
     file_path TEXT NOT NULL,
     tags TEXT[],
     created_at TIMESTAMP DEFAULT NOW()
   );
   \`\`\`

3. Implement CRUD operations:
   - Create courses, topics, and simulations
   - Update metadata and descriptions
   - Delete content with cascade handling
   - Reorder topics and simulations

4. Add file upload functionality:
   - Use Vercel Blob for simulation HTML file storage
   - Validate HTML files for security
   - Generate unique file paths

5. Enable disabled buttons:
   - Add Course → Form modal with validation
   - Add Topic → Inline creation with drag-and-drop ordering
   - Add Simulation → Upload form with metadata fields
   - Edit/Delete → Confirmation dialogs with soft delete

### Phase 2: AI-Assisted Content Analysis

**Goal**: Automatically suggest relevant simulations based on uploaded course materials

**Implementation Plan**:
1. **Document Upload System**:
   - Accept PDF and DOCX course syllabi
   - Extract text content using libraries (pdf-parse, mammoth)
   - Store documents in Vercel Blob

2. **LLM Integration** (OpenAI GPT-4 or Anthropic Claude):
   - Parse course documents to extract:
     - Learning objectives
     - Key physics concepts
     - Topic structure
   - Generate structured course outline

3. **Simulation Recommendation Engine**:
   - Build vector database of simulation descriptions (Pinecone/Supabase pgvector)
   - Embed course content and simulation metadata
   - Semantic search to match concepts with simulations
   - Suggest relevant simulations for each topic

4. **AI-Powered Features**:
   - Auto-generate topic descriptions
   - Suggest simulation tags based on content
   - Recommend prerequisite topics
   - Generate quiz questions from simulations

5. **Professor Review Workflow**:
   - Display AI suggestions with confidence scores
   - Allow professors to accept/reject/modify suggestions
   - Learn from professor feedback to improve recommendations

### Phase 3: Collaboration & Analytics

**Goal**: Enable multi-professor collaboration and track simulation usage

**Features**:
- User authentication and role-based access control
- Shared course editing with version history
- Student access mode (view-only simulations)
- Analytics dashboard:
  - Most-used simulations
  - Time spent per simulation
  - Student engagement metrics
- Comments and annotations on simulations
- Export course curriculum as PDF

### Phase 4: Simulation Builder

**Goal**: Allow professors to create simple simulations without coding

**Features**:
- Visual simulation builder with drag-and-drop
- Pre-built physics components (particles, forces, fields)
- Parameter adjustment interface
- Template library for common physics scenarios
- Export to HTML for platform integration

## 🛠️ Development

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- Modern web browser

### Installation

\`\`\`bash
# Clone the repository
git clone <repository-url>
cd tru-physics-platform

# Install dependencies
npm install

# Run development server
npm run dev
\`\`\`

Visit `http://localhost:3000` to view the platform.

### Building for Production

\`\`\`bash
npm run build
npm start
\`\`\`

### Deployment

The platform is optimized for Vercel deployment:

\`\`\`bash
vercel deploy
\`\`\`

## 🎨 Design Tokens

The platform uses a custom teal-based color system defined in `app/globals.css`:

\`\`\`css
:root {
  --primary: oklch(0.55 0.12 195);        /* Teal accent */
  --secondary: oklch(0.35 0.08 200);      /* Darker teal */
  --accent: oklch(0.92 0.03 195);         /* Light teal highlight */
  --background: oklch(0.99 0.005 180);    /* Off-white background */
  --foreground: oklch(0.25 0.02 200);     /* Dark text */
  --muted: oklch(0.96 0.01 195);          /* Subtle gray-teal */
  --border: oklch(0.9 0.01 195);          /* Border color */
}
\`\`\`

## 📝 Notes for Future AI Agents

### Context for Continuation

This platform is designed as a **foundation for AI-assisted curriculum building**. The current implementation:

1. **Uses local file storage** (`public/Data/`) instead of a database
2. **Hardcodes course data** in `lib/course-data.ts`
3. **Disables CRUD operations** (buttons are visible but non-functional)
4. **Includes 3 working simulations** as proof-of-concept

### Key Integration Points

When adding database functionality:
- Replace `lib/course-data.ts` exports with Supabase queries
- Keep the same TypeScript interfaces for type safety
- Update components to handle loading states and errors
- Add optimistic UI updates for better UX

When adding AI features:
- Create new API routes in `app/api/` for LLM interactions
- Use streaming responses for real-time AI suggestions
- Store AI-generated content with metadata (confidence, source)
- Implement feedback loop to improve recommendations

### Code Quality Standards

- **TypeScript**: Strict mode enabled, no `any` types
- **Components**: Modular, reusable, single responsibility
- **Styling**: Tailwind utility classes, semantic design tokens
- **Accessibility**: ARIA labels, keyboard navigation, screen reader support
- **Performance**: Lazy loading, code splitting, optimized images

## 📄 License

This project is created for Thompson Rivers University Physics Department.

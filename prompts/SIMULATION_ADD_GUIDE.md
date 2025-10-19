# Adding a Simulation — Quick Guide

This short guide tells an AI coding agent (or a person) exactly what to do when given a new HTML simulation file to add to this project.

Place this file in the repository root and follow the steps below when adding a new simulation file.

---

## Goal
Add a new simulation HTML to `public/Data/` and update the in-repo metadata in `lib/course-data.ts` so the simulation appears in the UI and is loadable in the sandbox iframe.

## Steps (exact, in order)

1. Receive the new HTML file. Determine target course and topic from instructor or file metadata. Use the following conventions:
   - Course folder name example: `PHYS-1001-Intro-Mechanics`
   - Topic folder name example: `Motion-Fundamentals`
   - Simulation file name should be kebab-case, e.g. `pendulum.html`

2. Create directories if they don't already exist:
   - `public/Data/Courses/{CourseFolder}/Topics/{TopicFolder}/Simulations/`

3. Copy the provided HTML file into the Simulations folder. Example final path:
   - `public/Data/Courses/PHYS-1001-Intro-Mechanics/Topics/Motion-Fundamentals/Simulations/pendulum.html`

4. Edit `lib/course-data.ts`:
   - Find the `courses` array and the correct `Course` object (match by human-friendly Course name or `course.code`).
   - Find (or add) the `Topic` object in that course's `topics` array (match `topic.id`).
   - In that topic's `simulations` array, add a Simulation object with these fields:
     ```ts
     {
       id: "pendulum",
       title: "Pendulum Simulation",
       description: "Short description of the simulation",
       filePath: "/Data/Courses/PHYS-1001-Intro-Mechanics/Topics/Motion-Fundamentals/Simulations/pendulum.html",
       tags: ["oscillation", "pendulum", "p5.js"]
     }
     ```
   - Notes:
     - `id`: kebab-case, used in the route: `/courses/{courseId}/topics/{topicId}/simulations/{simulationId}`
     - `filePath`: must use a leading slash and match the path under `public/` (e.g. `/Data/Courses/...`). Match casing exactly.

5. Save changes and, if running locally, verify in the browser:
   - Topic listing: `/courses/{courseId}/topics/{topicId}`
   - Simulation page: `/courses/{courseId}/topics/{topicId}/simulations/{simulationId}`
   - Direct file URL (optional): `/Data/Courses/.../Simulations/pendulum.html`

6. Commit changes (HTML file + `lib/course-data.ts`) with descriptive commit message.

## Example (summary)
Given `pendulum.html` for PHYS-1001 → Motion-Fundamentals:
1. Put file at:
   `public/Data/Courses/PHYS-1001-Intro-Mechanics/Topics/Motion-Fundamentals/Simulations/pendulum.html`
2. Add to `lib/course-data.ts` inside `motion-fundamentals.simulations`:
   - `id: "pendulum"`
   - `filePath: "/Data/Courses/PHYS-1001-Intro-Mechanics/Topics/Motion-Fundamentals/Simulations/pendulum.html"`

## Edge cases / checks for the agent
- Ensure `filePath` casing exactly matches the filesystem (deploy environments may be case-sensitive).
- If the requested `courseId` or `topicId` don't exist in `lib/course-data.ts`, create a new `Topic` or `Course` entry consistent with the TS interfaces.
- Keep `course.id` and `topic.id` lowercase kebab-case strings for route consistency. Course folder names may differ (they include the human-friendly course code/name).
- If adding many simulations, keep metadata unique and avoid duplicate `id` within a topic.

---

If you'd like, I can now add a sample `pendulum.html` and patch `lib/course-data.ts` to include it so you have a concrete working example. Let me know if you want me to proceed.
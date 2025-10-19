import { Button } from "@/components/ui/button"
import { CourseCard } from "@/components/course-card"
import { Plus } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { SiteHeader } from "@/components/site-header"
import { courses, getCourseStats } from "@/lib/course-data"

export default function DashboardPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Page Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">Course Dashboard</h2>
              <p className="text-muted-foreground leading-relaxed">
                Browse and manage your physics courses and simulations
              </p>
            </div>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button disabled className="gap-2 w-full md:w-auto">
                    <Plus className="w-4 h-4" />
                    Add Course
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Will connect to Supabase later</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>

          {/* Course Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => {
              const { topicCount, simulationCount } = getCourseStats(course)
              return (
                <CourseCard
                  key={course.id}
                  id={course.id}
                  code={course.code}
                  name={course.name}
                  description={course.description}
                  topicCount={topicCount}
                  simulationCount={simulationCount}
                />
              )
            })}
          </div>
        </div>
      </main>
    </div>
  )
}

import { notFound } from "next/navigation"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { SimulationCard } from "@/components/simulation-card"
import { EmptyState } from "@/components/empty-state"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { getCourseById, getTopicById } from "@/lib/course-data"
import { ArrowLeft, Plus, Beaker, ChevronRight } from "lucide-react"

export default async function TopicPage({ params }: { params: { courseId: string; topicId: string } }) {
  const { courseId, topicId } = await params
  const course = getCourseById(courseId)
  const topic = getTopicById(courseId, topicId)

  if (!course || !topic) {
    notFound()
  }

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <main className="flex-1 container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/dashboard" className="hover:text-foreground transition-colors">
              Dashboard
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link href={`/courses/${course.id}`} className="hover:text-foreground transition-colors">
              {course.code}
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground">{topic.name}</span>
          </div>

          {/* Topic Header */}
          <div className="space-y-4">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold text-foreground">{topic.name}</h1>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">{topic.description}</p>
              </div>
              <Button asChild variant="outline" size="sm">
                <Link href={`/courses/${course.id}`}>
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </Link>
              </Button>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>{topic.simulations.length} simulations available</span>
            </div>
          </div>

          {/* Simulations Section */}
          {topic.simulations.length === 0 ? (
            <div className="border border-border rounded-xl p-8">
              <EmptyState
                icon={Beaker}
                title="No Simulations Yet"
                description="Simulations for this topic are coming soon. Check back later for interactive physics demonstrations."
              />
            </div>
          ) : (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-foreground">Interactive Simulations</h2>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button disabled size="sm" className="gap-2">
                        <Plus className="w-4 h-4" />
                        Add Simulation
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Will connect to Supabase later</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {topic.simulations.map((simulation) => (
                  <SimulationCard key={simulation.id} simulation={simulation} courseId={course.id} topicId={topic.id} />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

import { notFound } from "next/navigation"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { SandboxFrame } from "@/components/sandbox-frame"
import { getCourseById, getTopicById, getSimulationById } from "@/lib/course-data"
import { ArrowLeft, ChevronRight } from "lucide-react"

export default async function SimulationPage({ params }: { params: { courseId: string; topicId: string; simulationId: string } }) {
  const { courseId, topicId, simulationId } = await params
  const course = getCourseById(courseId)
  const topic = getTopicById(courseId, topicId)
  const simulation = getSimulationById(courseId, topicId, simulationId)

  if (!course || !topic || !simulation) {
    notFound()
  }

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <main className="flex-1 container mx-auto px-6 py-12">
        <div className="max-w-7xl mx-auto space-y-8">
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
            <Link href={`/courses/${course.id}/topics/${topic.id}`} className="hover:text-foreground transition-colors">
              {topic.name}
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground">{simulation.title}</span>
          </div>

          {/* Simulation Header */}
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-2 flex-1">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">{simulation.title}</h1>
              <p className="text-lg text-muted-foreground leading-relaxed">{simulation.description}</p>
              <div className="flex flex-wrap gap-2 pt-2">
                {simulation.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
            <Button asChild variant="outline" size="sm">
              <Link href={`/courses/${course.id}/topics/${topic.id}`}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Link>
            </Button>
          </div>

          {/* Simulation Sandbox */}
          <div className="border border-border rounded-xl overflow-hidden shadow-lg">
            <SandboxFrame src={simulation.filePath} title={simulation.title} />
          </div>
        </div>
      </main>
    </div>
  )
}

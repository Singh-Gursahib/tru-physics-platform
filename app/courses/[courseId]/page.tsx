import { notFound } from "next/navigation"
import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { EmptyState } from "@/components/empty-state"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { getCourseById } from "@/lib/course-data"
import { ArrowLeft, Plus, Beaker, ChevronRight } from "lucide-react"
import Link from "next/link"

export default async function CoursePage({ params }: { params: { courseId: string } }) {
  const { courseId } = await params
  const course = getCourseById(courseId)

  if (!course) {
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
            <span className="text-foreground">{course.code}</span>
          </div>

          {/* Course Header */}
          <div className="space-y-4">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-2">
                <Badge variant="secondary" className="font-mono">
                  {course.code}
                </Badge>
                <h1 className="text-4xl font-bold text-foreground">{course.name}</h1>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">{course.description}</p>
              </div>
              <Button asChild variant="outline" size="sm">
                <Link href="/dashboard">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </Link>
              </Button>
            </div>

            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <span>{course.topics.length} topics</span>
              <span>•</span>
              <span>{course.topics.reduce((acc, topic) => acc + topic.simulations.length, 0)} simulations</span>
            </div>
          </div>

          {/* Topics Section */}
          {course.topics.length === 0 ? (
            <Card>
              <CardContent className="pt-6">
                <EmptyState
                  icon={Beaker}
                  title="No Topics Yet"
                  description="This course is coming soon. Topics and simulations will be added in future updates."
                />
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-foreground">Topics</h2>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button disabled size="sm" className="gap-2">
                        <Plus className="w-4 h-4" />
                        Add Topic
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Will connect to Supabase later</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {course.topics.map((topic) => (
                  <Link key={topic.id} href={`/courses/${course.id}/topics/${topic.id}`}>
                    <Card className="h-full transition-all hover:shadow-lg hover:border-primary/50 cursor-pointer group">
                      <CardHeader>
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <CardTitle className="text-xl group-hover:text-primary transition-colors">
                              {topic.name}
                            </CardTitle>
                            <CardDescription className="mt-2 leading-relaxed">{topic.description}</CardDescription>
                          </div>
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Beaker className="w-5 h-5 text-primary" />
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span>{topic.simulations.length} simulations</span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Play } from "lucide-react"
import type { Simulation } from "@/lib/course-data"

interface SimulationCardProps {
  simulation: Simulation
  courseId: string
  topicId: string
}

export function SimulationCard({ simulation, courseId, topicId }: SimulationCardProps) {
  return (
    <Link href={`/courses/${courseId}/topics/${topicId}/simulations/${simulation.id}`}>
      <Card className="h-full transition-all hover:shadow-lg hover:border-primary/50 cursor-pointer group">
        <CardHeader>
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <CardTitle className="text-lg group-hover:text-primary transition-colors">{simulation.title}</CardTitle>
              <CardDescription className="mt-2 leading-relaxed line-clamp-3">{simulation.description}</CardDescription>
            </div>
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all">
              <Play className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {simulation.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen } from "lucide-react"

interface CourseCardProps {
  id: string
  code: string
  name: string
  description: string
  topicCount: number
  simulationCount: number
}

export function CourseCard({ id, code, name, description, topicCount, simulationCount }: CourseCardProps) {
  return (
    <Link href={`/courses/${id}`}>
      <Card className="h-full transition-all hover:shadow-lg hover:border-primary/50 cursor-pointer group">
        <CardHeader>
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <Badge variant="secondary" className="mb-2 font-mono text-xs">
                {code}
              </Badge>
              <CardTitle className="text-xl group-hover:text-primary transition-colors">{name}</CardTitle>
            </div>
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <BookOpen className="w-6 h-6 text-primary" />
            </div>
          </div>
          <CardDescription className="leading-relaxed">{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>{topicCount} topics</span>
            <span>•</span>
            <span>{simulationCount} simulations</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

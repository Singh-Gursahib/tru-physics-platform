import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BookOpen, Sparkles } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-lg font-semibold text-foreground">TRU Physics</h1>
              <p className="text-xs text-muted-foreground">Curriculum Platform</p>
            </div>
          </div>
          <Button variant="outline" size="sm">
            Sign In
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex items-center justify-center px-6 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            <span>Digital Lab for Learning Experiences</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-foreground leading-tight text-balance">
            Build Interactive Physics Curricula
          </h2>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
            A visually elegant platform for Thompson Rivers University professors to digitalize and streamline course
            curriculum creation with interactive simulations.
          </p>

          <div className="flex items-center justify-center gap-4 pt-4">
            <Button asChild size="lg" className="text-base">
              <Link href="/dashboard">Browse Courses</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base bg-transparent">
              <Link href="/dashboard">View Simulations</Link>
            </Button>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 pt-12">
            <div className="p-6 rounded-xl bg-card border border-border text-left space-y-2">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Course Management</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Organize courses, topics, and simulations in an intuitive visual workspace.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-card border border-border text-left space-y-2">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Interactive Simulations</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Explore physics concepts through p5.js and Three.js powered visualizations.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-card border border-border text-left space-y-2">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">AI-Ready Architecture</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Built for future AI-assisted content analysis and simulation suggestions.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-6">
        <div className="container mx-auto px-6 text-center text-sm text-muted-foreground">
          <p>Thompson Rivers University Physics Department © 2025</p>
        </div>
      </footer>
    </div>
  )
}

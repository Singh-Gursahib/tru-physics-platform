import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BookOpen } from "lucide-react"

export function SiteHeader() {
  return (
    <header className="border-b border-border bg-card sticky top-0 z-10">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/dashboard" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
            <BookOpen className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-lg font-semibold text-foreground">TRU Physics</h1>
            <p className="text-xs text-muted-foreground">Curriculum Platform</p>
          </div>
        </Link>
        <Button variant="outline" size="sm">
          Sign In
        </Button>
      </div>
    </header>
  )
}

"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ExternalLink, Maximize2, Minimize2 } from "lucide-react"

interface SandboxFrameProps {
  src: string
  title: string
}

export function SandboxFrame({ src, title }: SandboxFrameProps) {
  const [isFullscreen, setIsFullscreen] = useState(false)

  const handleOpenNewWindow = () => {
    window.open(src, "_blank", "width=1200,height=800")
  }

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen)
  }

  return (
    <div className={`relative ${isFullscreen ? "fixed inset-0 z-50 bg-background" : ""}`}>
      {/* Controls Bar */}
      <div className="flex items-center justify-between gap-4 p-4 bg-card border-b border-border">
        <div className="flex-1">
          <h3 className="font-semibold text-foreground">{title}</h3>
          <p className="text-sm text-muted-foreground">Interactive Simulation</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={toggleFullscreen} className="gap-2 bg-transparent">
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            {isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
          </Button>
          <Button variant="outline" size="sm" onClick={handleOpenNewWindow} className="gap-2 bg-transparent">
            <ExternalLink className="w-4 h-4" />
            Open in New Window
          </Button>
        </div>
      </div>

      {/* Iframe Container */}
      <div className={`bg-muted ${isFullscreen ? "h-[calc(100vh-73px)]" : "h-[850px]"}`}>
        <iframe
          src={src}
          title={title}
          className="w-full h-full border-0"
          sandbox="allow-scripts allow-same-origin allow-modals"
          loading="lazy"
        />
      </div>
    </div>
  )
}

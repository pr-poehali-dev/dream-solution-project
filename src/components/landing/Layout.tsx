import { ReactNode } from 'react'
import { Squares } from "./squares-background"

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="h-screen overflow-hidden bg-[#0a1525] relative">
      <div className="absolute inset-0 z-10">
        <Squares
          direction="diagonal"
          speed={0.3}
          squareSize={50}
          borderColor="#1a2d45"
          hoverFillColor="#1e3355"
        />
      </div>

      <div className="relative z-20 h-full">
        {children}
      </div>
    </div>
  )
}

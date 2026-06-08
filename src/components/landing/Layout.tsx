import { ReactNode } from 'react'
import { Squares } from "./squares-background"

interface LayoutProps {
  children: ReactNode
}

const LOGO_URL = "https://cdn.poehali.dev/projects/7dc16bde-f398-45a3-961b-af33184d7c18/bucket/52fe318b-97a2-4c9d-8cc6-cb8ba6775cfd.jpg"

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

      <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-center py-3">
        <img
          src={LOGO_URL}
          alt="НоваПрофСтрой"
          className="h-16 w-auto object-contain"
          style={{ filter: 'brightness(0) invert(1)' }}
        />
      </header>

      <div className="relative z-20 h-full">
        {children}
      </div>
    </div>
  )
}

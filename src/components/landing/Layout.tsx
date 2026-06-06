import { ReactNode } from 'react'
import { Squares } from "./squares-background"

interface LayoutProps {
  children: ReactNode
}

const LOGO_URL = "https://cdn.poehali.dev/projects/7dc16bde-f398-45a3-961b-af33184d7c18/bucket/52fe318b-97a2-4c9d-8cc6-cb8ba6775cfd.jpg"
const BG_IMAGE = "https://cdn.poehali.dev/projects/7dc16bde-f398-45a3-961b-af33184d7c18/bucket/054e3c59-37d6-4452-b1f2-66c0e4a71455.jpg"

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="h-screen overflow-hidden bg-[#f4f6f9] relative">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${BG_IMAGE})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          opacity: 0.07,
        }}
      />
      <div className="absolute inset-0 z-10">
        <Squares
          direction="diagonal"
          speed={0.3}
          squareSize={50}
          borderColor="#d0d8e4"
          hoverFillColor="#e2e8f0"
        />
      </div>

      {/* Логотип в центре шапки */}
      <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-center py-3">
        <img
          src={LOGO_URL}
          alt="НоваПрофСтрой"
          className="h-16 w-auto object-contain"
        />
      </header>

      <div className="relative z-20 h-full">
        {children}
      </div>
    </div>
  )
}
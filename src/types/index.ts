import type { ReactNode } from "react"

export interface ServiceItem {
  icon: string
  label: string
}

export interface Section {
  id: string
  title: string
  subtitle?: ReactNode
  content?: string
  showButton?: boolean
  buttonText?: string
  services?: ServiceItem[]
}

export interface SectionProps extends Section {
  isActive: boolean
}
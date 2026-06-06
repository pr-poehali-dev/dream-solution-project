import type { ReactNode } from "react"

export interface ServiceItem {
  icon: string
  label: string
}

export interface BadgeItem {
  icon: string
  label: string
}

export interface Section {
  id: string
  title: string
  subtitle?: ReactNode
  slogan?: string
  content?: string
  showButton?: boolean
  buttonText?: string
  services?: ServiceItem[]
  badges?: BadgeItem[]
}

export interface SectionProps extends Section {
  isActive: boolean
}

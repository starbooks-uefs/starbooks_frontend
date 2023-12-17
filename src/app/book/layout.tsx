import Navbar from "@/components/Navbar"
import { ReactNode } from "react"

/* Tipo que recebe um componente React (página) renderizável */
type LayoutProps = {
  children: ReactNode
}

export default function Layout( {children}: LayoutProps ) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  )
}
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import SidebarUser from "@/components/SidebarUser"
import { ReactNode } from "react"

/* Tipo que recebe um componente React (página) renderizável */
type LayoutProps = {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Navbar />
      <div className="flex max-w-full justify-center">
        <SidebarUser />
        {children}
      </div>
      <Footer />
    </div>
  )
}
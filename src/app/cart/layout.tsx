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
    <div className="flex flex-col justify-center items-center">
      <Navbar />
      <div className=" flex mt-3 w-3/4 justify-center">
        <div className="flex flex-1">
          {children}
        </div>
      </div>
      <Footer />
    </div>
  )
}
import Home from './home/page'
import Footer from "@/components/Footer"
import NavbarNoAuth from "@/components/NavbarNoAuth"

export default function App() {
  return (
    <>
      <NavbarNoAuth />
      <Home/>
      <Footer />
    </>
  )
}

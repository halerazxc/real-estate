import About from "./components/About"
import Contacts from "./components/Contacts"
import Customer from "./components/Customer"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Projects from "./components/Projects"

function App() {

  return (
    <>
     <div className="w-full overflow-hidden">
      <Header />
      <About />
      <Projects />
      <Customer />
      <Contacts />
      <Footer />
     </div>
    </>
  )
}

export default App

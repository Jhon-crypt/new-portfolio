import './App.css'
import Header from './components/header/header'
import HeaderHero from './components/hero/headerHero'

function App() {

  return (
    <>

      <section className="pb-24 relative">

        <div className="absolute top-0 left-0 hidden xl:block h-full bg-yellow-100 max-w-sm w-full"
          style={{ backgroundImage: "url('https://shuffle.dev/pstls-assets/images/headers/shadows-color.png')", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}></div>

        <Header />

        <HeaderHero />

      </section>
      
    </>
  )
}

export default App

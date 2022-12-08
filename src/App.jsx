import './App.css'
import Banner from './components/banner/Banner'
import Header from './components/header/Header'
import Mission from './components/mission/Mission'
import Programs from './components/programs/Programs'
import Pricing from './components/pricing/Pricing'
import Community from './components/community/Community'
import Faq from './components/faq/Faq'
import Join from './components/join/Join'
import Footer from './components/footer/Footer'

import Aos from 'aos'
import 'aos/dist/aos.css'

function App() {
  Aos.init({
    duration: 2500,
    delay: 400,
  })

  return (
    <div className='app'>
      <Header />
      <Banner />
      <Mission />
      <Programs />
      <Pricing />
      <Community />
      <Faq />
      <Join />
      <Footer />
    </div>
  )
}

export default App

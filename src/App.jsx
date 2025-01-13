import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/App.css';
import Navigation from './components/navigation.jsx';
import Carousel from './components/Carousel.jsx';
import Whoweare from './components/Whoweare.jsx';

function App() {

  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Carousel />
        <Whoweare />
      </main>
      <footer>
        <p>Footer</p>
      </footer>
    </>
  )
}

export default App

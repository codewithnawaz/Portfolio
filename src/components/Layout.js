import Home from '../page/Home';
import About from './About';
import Footer from './Footer';
import Header from './Header';
import Hero from './Hero';


function Layout({ children }) {
  return (
    <main>
    <Header/>
    <Home/>
    <Footer/>
    </main>
  )
}

export default Layout;
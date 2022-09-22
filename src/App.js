
import './App.css';
import {Header} from '../src/components/header/header'
import { Navbar} from'../src/components/navbar/navbar'
import { About} from '../src/components/about/about'
import { Experience} from '../src/components/experience/experience'
//import { Service} from '../src/components/service/service'
import { Portfolio} from '../src/components/portfolio/portfolio'
//import { Testimonials} from '../src/components/testimonials/testimonials'
import { Contact } from '../src/components/contact/contact'
import { Footer} from '../src/components/footer/footer'
function App() {
  return (
   <>
   <Header />
   <Navbar />
   <About />
   <Experience />
   <Portfolio  />
   <Contact />
   <Footer />
   </>
  );
}

export default App;

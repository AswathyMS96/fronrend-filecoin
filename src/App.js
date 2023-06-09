import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import DailyStats from './components/DailyStat';
import DevSection from './components/DevSection';
import SocialMediaPromotion from './components/SocialMediaPromotion';
import { BlogSection } from './components/BlogSection';


function App() {
  return (
    <div className='home'>
      <Header />
      <Hero />
      <DailyStats />
      <DevSection />
      <SocialMediaPromotion />
      <BlogSection />
      <Footer />
    </div>
  );
}

export default App;


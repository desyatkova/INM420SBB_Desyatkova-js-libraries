import { useRef } from 'react';
import { Box } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Artists from './components/Artists';
import Schedule from './components/Schedule';
import Tickets from './components/Tickets';
import Location from './components/Location';
import Footer from './components/Footer';

function App() {
  const mapRef = useRef(null);

  const scrollToMap = () => {
    mapRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <Box>
      <Navbar />
      <Hero />
      <Timeline mapRef={mapRef} />
      <Artists />
      <Schedule />
      <Tickets />
      <Location scrollToMap={scrollToMap} />
      <Footer />
    </Box>
  )
}

export default App
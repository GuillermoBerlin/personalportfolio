import Container from 'react-bootstrap/Container';
import Projects from './components/Projects';
import Header from './components/Header';
import './App.css'

function App() {

  return (
    <>
    <Container>     
      <Header/>  
      <Projects/>    
    </Container>
  </>
  );
}

export default App;

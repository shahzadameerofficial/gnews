
import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'
import TopHeadlines from './pages/TopHeadlines/TopHeadlines';
import Discover from './pages/Discover/Discover';

function App() {
  return (
    <>
    <ChakraProvider>
      
      <HashRouter>
        <Header></Header>
        <Routes>
          <Route path='' element={<TopHeadlines />}></Route>
          <Route path='discover' element={<Discover />}></Route>
        </Routes>
        <Footer></Footer>
      </HashRouter>
    </ChakraProvider>
    </>
  )
}

export default App




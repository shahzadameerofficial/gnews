
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
      
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path='' element={<TopHeadlines />}></Route>
          <Route path='discover' element={<Discover />}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </ChakraProvider>
    </>
  )
}

export default App




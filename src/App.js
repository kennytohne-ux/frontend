import Form from './components/form';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './components/home';
function App() {
  return (
    <div className="all">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Form />} />
          <Route path='/home' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

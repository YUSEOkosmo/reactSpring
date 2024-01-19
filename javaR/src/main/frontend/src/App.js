import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ListBoardComponent from './components/ListBoardComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import NewBBSComponent from './components/newBBSComponent';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent/>
          <div className="container">
            <Routes>
              <Route path = "/" element = {<ListBoardComponent />} />
              <Route path = "/board" element = {<ListBoardComponent />} />
              <Route path = "/newBBS" element = {<NewBBSComponent />} />
            </Routes>
          </div>
        <FooterComponent/>
      </Router>
    </div>
  );
}

export default App;

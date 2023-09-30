import { BrowserRouter, Routes ,Route} from 'react-router-dom';
import './App.css';
import Loginpage from './component/Loginpage';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Booklist from './component/Booklist';
import Studentlist from './component/Studentlist';
import Homepage from './component/Homepage';
import Assignpage from './component/Assignpage';
function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Loginpage/>}/>
            <Route path="student" element={<Studentlist/>}></Route>
            <Route path="Booklist" element={<Booklist/>}></Route>
            <Route path="Homepage" element={<Homepage/>}></Route>
            <Route path ="Assignpage" element={<Assignpage/>}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;

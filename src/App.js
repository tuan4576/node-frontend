import { Outlet } from 'react-router-dom';
import AppBar from './layouts/AppBar'
import Footer from './layouts/Footer'
function App() {
  return (
    <div>
      <AppBar/>
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default App;


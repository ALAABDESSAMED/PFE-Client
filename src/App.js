import { RouterProvider } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import './css/plugins/jquery.fancybox.css'
import './css/plugins/swiper.min.css'
import './css/style.css';
import router from './Routes';
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;

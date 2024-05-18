import React from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Login from './components/Login';
import About from './components/About';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const router = createBrowserRouter([{
  path: '/home',
  element: <> <NavBar /> <Home /> </>
}, {
  path: '/login',
  element: <> <NavBar /> <Login /> </>
}, {
  path: '/about',
  element: <> <NavBar /> <About /> </>
}]);

function App() {
  return (
    <div>

      <RouterProvider router={router} />

    </div>
  );
}

export default App;


import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './layouts/Main';
import Home from './components/Home/Home';
import UserDetails from './components/UserDetails/UserDetails';
import About from './components/About/About';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: ()=> fetch('https://jsonplaceholder.typicode.com/users'),
          element: <Home></Home>
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/users/:userId',
          loader: async ({ params }) => {
            return fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
          },
          element: <UserDetails></UserDetails>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

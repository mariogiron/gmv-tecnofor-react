import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, redirect, RouterProvider } from 'react-router-dom'
import App from './App';
import ErrorPage from './pages/ErrorPage';
import Info from './pages/Info';
import Contact from './pages/Contact';
import ProductDetail from './pages/ProductDetail';
import AdminLayout from './layouts/AdminLayout';
import AuthLayout from './layouts/AuthLayout';
import AuthGuard from './guards/AuthGuard';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/info', element: <Info /> },
      { path: '/contact', element: <Contact /> },
      {
        element: <AuthGuard isAllowed={false} />,
        children: [
          {
            path: '/product/:productId',
            element: <ProductDetail />,
            loader: async ({ params }) => {
              // return fetch(`https://peticiones.online/api/products/${params.productId}`);
              const response = await fetch(`https://peticiones.online/api/products/${params.productId}`);
              const data = await response.json();
              if (data.error) {
                // return { error: 'el Id no existe'}
                throw redirect('/login');
              }
              return data;
            }
          }
        ]
      },
      {
        element: <AuthGuard isAllowed={true} redirectPath="/register" />,
        children: [
          {
            path: '/admin',
            element: <AdminLayout />,
            children: [
              { path: 'graficos', element: <p>Gráficos de administración</p> },
              { path: 'listado', element: <p>Lista de cosas</p> }
            ]
          },
        ]
      },

      {
        element: <AuthLayout />,
        children: [
          { path: 'login', element: <p>Formulario de LOGIN de usuario</p> },
          { path: 'register', element: <p>Formulario de REGISTRO de usuario</p> }
        ]
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)

import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import axios from 'axios'

// import './interceptors/AuthInterceptor.ts';

axios.interceptors.request.use(request => {
  console.log(request);
  request.headers.Authorization = 'TOKEN-AXIOS';
  request.url = request.url + '?ref=127881';
  return request;
});

axios.interceptors.response.use(response => {
  console.log(response);
  return response;
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <App />
  </>,
)

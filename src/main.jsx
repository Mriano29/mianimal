import { StrictMode } from 'React'
import { createRoot } from 'React-dom/client'
import App from './App.jsx'
import './index.css'
import Appgrid from './Appgrid.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Appgrid />
  </StrictMode>,
)

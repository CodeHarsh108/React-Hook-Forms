import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Appone from './Appone.jsx'
import Apptwo from './Apptwo.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Appone /> Basic Form */}
    <Apptwo/>
  </StrictMode>,
)

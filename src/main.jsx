import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './Appone.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Appone /> //Basic Form
  </StrictMode>,
)

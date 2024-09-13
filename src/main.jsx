import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, } from "react-router-dom";
import { router } from './Routers/Router';

import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="max-w-screen-2xl mx-auto bg-[#161d28]">
      <RouterProvider router={router} />
    </div>
  </StrictMode>,
)
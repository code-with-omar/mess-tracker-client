import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, } from "react-router-dom";
import { router } from './Routers/Router';

import './index.css'
import AuthProvider from './Providers/AuthProvider';
import {  QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient()
createRoot(document.getElementById('root')).render(

  <AuthProvider>
    <QueryClientProvider client={queryClient}>
      <StrictMode>
        <div className="max-w-screen-2xl mx-auto bg-[#161d28]">
          <RouterProvider router={router} />
        </div>
      </StrictMode>,
    </QueryClientProvider>
  </AuthProvider>

)
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
import './index.css'
import App from './App.jsx'

const queryCLient = new QueryClient ();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryCLient}>
      <App />
      <ReactQueryDevtools initialIsOpen = {false}/>
    </QueryClientProvider>
  </StrictMode>,
)

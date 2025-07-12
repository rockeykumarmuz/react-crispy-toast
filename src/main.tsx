// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import CrispyToastProvider from './context/toastContext.tsx'

createRoot(document.getElementById('root')!).render(
	// <StrictMode>
	<CrispyToastProvider>
		<App />
	</CrispyToastProvider>
	// </StrictMode>
)

import { createContext, useCallback, useContext, useState, type ReactNode } from 'react'
import type { ToastContextType, ToastMessageType } from '../types/toastMessageType'
import Toast from '../components/Toast'
import { useEffect } from 'react'
import { setToastRef } from '../services/toast'

const ToastContext = createContext<ToastContextType | undefined>(undefined)

const ToastProvider = ({ children }: { children: ReactNode }) => {
	const [crispyToasts, setCrispyToasts] = useState<ToastMessageType[]>([])

	const addToast = useCallback((toast: ToastMessageType) => {
		setCrispyToasts(prevToasts => [...prevToasts, toast])

		if (toast.duration != 0) {
			setTimeout(() => {
				removeToast(toast.id || '')
			}, toast.duration || 4000)
		}
	}, [])

	const removeToast = useCallback((id: string) => {
		setCrispyToasts(prevToasts => prevToasts.filter((toast: ToastMessageType) => toast.id !== id))
	}, [])

	useEffect(() => {
		setToastRef(addToast)
	}, [addToast])

	return (
		<ToastContext.Provider value={{ crispyToasts, setCrispyToasts, addToast, removeToast }}>
			{children}
			<div className='toast-wrapper'>
				{crispyToasts.map((toast: ToastMessageType) => (
					<Toast key={toast.id} {...toast} />
				))}
			</div>
		</ToastContext.Provider>
	)
}

export default ToastProvider

// Toast context hook to use anywhere without passing the context just use this and you can use functionality there
export const useToastContext = () => {
	const context = useContext(ToastContext)
	if (!context) {
		throw new Error('useToastContext must be used within a ToastProvider!')
	}
	return context
}

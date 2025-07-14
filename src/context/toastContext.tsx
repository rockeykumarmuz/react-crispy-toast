import { createContext, useCallback, useContext, useState, type ReactNode } from 'react'
import type { ToastContextType, ToastMessageType } from '../types/toastMessageType'
import Toast from '../components/Toast'
import { useEffect } from 'react'
import { setToastRef } from '../services/toast'

const ToastContext = createContext<ToastContextType | undefined>(undefined)

const CrispyToastProvider = ({ children }: { children: ReactNode }) => {
	const [crispyToasts, setCrispyToasts] = useState<ToastMessageType[]>([])
	const [exitToast, setExitToast] = useState(false)
	// this map is used as a stack to keep track of the order of the toasts as their position
	const toastPositionMap: Record<string, ToastMessageType[]> = {}

	crispyToasts.map((toast: ToastMessageType) => {
		const toastPosition = toast.position || 'top-right'
		if (!toastPositionMap[toastPosition]) {
			toastPositionMap[toastPosition] = []
		}

		toastPositionMap[toastPosition].push(toast)
	})

	// function to add new toast in UI
	const addToast = useCallback((toast: ToastMessageType) => {
		// It is an alternate or fallback id if toast is rendered in app.tsx and made a call to that add function
		const toastId = toast.id || crypto.randomUUID()
		setCrispyToasts(prevToasts => [...prevToasts, { ...toast, toastId }])

		// if (toast.duration != 0) {
		// 	setTimeout(() => {
		// 		removeToast(toast.id as number | string)
		// 	}, toast.duration || 4000)
		// }
	}, [])

	// function to remove the toast from the UI
	const removeToast = useCallback((id: string | number) => {
		setCrispyToasts(prevToasts => prevToasts.filter((toast: ToastMessageType) => toast.id !== id))
	}, [])

	// it will call when addToast will call and pass reference to the addCrispyToastFun fn to manage state globally or outside of components
	useEffect(() => {
		setToastRef(addToast)
	}, [addToast])

	return (
		<ToastContext.Provider value={{ crispyToasts, setCrispyToasts, addToast, removeToast, exitToast, setExitToast }}>
			{children}
			{Object.entries(toastPositionMap).map(([position, toasts]) => {
				return (
					<div key={position} className={`toast-wrapper ${position}`}>
						{toasts.map(toast => (
							<Toast key={toast.id} {...toast} />
						))}
					</div>
				)
			})}
		</ToastContext.Provider>
	)
}

export default CrispyToastProvider

// Toast context hook to use anywhere without passing the context just use this and you can use functionality there
export const useToastContext = () => {
	const context = useContext(ToastContext)
	if (!context) {
		throw new Error('useToastContext must be used within a ToastProvider!')
	}
	return context
}

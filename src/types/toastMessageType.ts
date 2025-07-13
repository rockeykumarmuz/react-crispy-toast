import type { ReactNode } from 'react'

export type ToastPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'top-center' | 'bottom-center'

export type ToastType = 'success' | 'error' | 'info' | 'alert'

export type ToastMessageType = {
	id?: string | number
	message: string | ReactNode
	icon?: string | ReactNode
	closeButton?: boolean
	duration?: number
	backgroundColor?: string
	textColor?: string
	position?: ToastPosition
	style?: React.CSSProperties
}

export type ToastContextType = {
	crispyToasts: ToastMessageType[]
	setCrispyToasts: React.Dispatch<React.SetStateAction<ToastMessageType[]>>
	addToast: (toast: ToastMessageType) => void
	removeToast: (id: string) => void
}

export const toastIcons = {
	success: 'https://cdn-icons-png.flaticon.com/128/14090/14090371.png',
	error: 'https://cdn-icons-png.flaticon.com/128/2569/2569174.png',
	info: 'https://cdn-icons-png.flaticon.com/128/656/656794.png',
	alert: 'https://cdn-icons-png.flaticon.com/128/18384/18384119.png',
}

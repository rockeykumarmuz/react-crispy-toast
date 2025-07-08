import type { ToastMessageType } from '../types/toastMessageType'

export const toastIconList = [
	{
		id: 1,
		name: 'success',
		src: 'https://cdn-icons-png.flaticon.com/128/14090/14090371.png',
	},
	{
		id: 2,
		name: 'error',
		src: 'https://cdn-icons-png.flaticon.com/128/2569/2569174.png',
	},
	{
		id: 3,
		name: 'info',
		src: 'https://cdn-icons-png.flaticon.com/128/656/656794.png',
	},
	{
		id: 4,
		name: 'alert',
		src: 'https://cdn-icons-png.flaticon.com/128/18384/18384119.png',
	},
]

let addCrispyToastFun: ((t: ToastMessageType) => void) | null = null

export const setToastRef = (fn: typeof addCrispyToastFun) => {
	addCrispyToastFun = fn
}

export const toast = {
	success: (message: string, options: Partial<ToastMessageType> = {}) => {
		addCrispyToastFun?.({
			...options,
			message,
			type: 'success',
			icon: toastIconList[0]?.src,
		})
	},
	error: (message: string, options: Partial<ToastMessageType> = {}) => {
		addCrispyToastFun?.({
			...options,
			message,
			type: 'error',
			icon: toastIconList[1]?.src,
		})
	},
	info: (message: string, options: Partial<ToastMessageType> = {}) => {
		addCrispyToastFun?.({
			...options,
			message,
			type: 'info',
			icon: toastIconList[2]?.src,
		})
	},
	alert: (message: string, options: Partial<ToastMessageType> = {}) => {
		addCrispyToastFun?.({
			...options,
			message,
			type: 'alert',
			icon: toastIconList[0]?.src,
		})
	},
}

import { useToastContext } from '../context/toastContext'
import type { ToastMessageType } from '../types/toastMessageType'
import './toast.css'

const Toast = ({
	icon,
	id,
	message,
	closeButton,
	backgroundColor,
	textColor = 'black',
	position,
}: ToastMessageType) => {
	const { removeToast, exitToast, setExitToast } = useToastContext()

	const handleToastClose = (id: string) => {
		setExitToast(true)
		removeToast(id)
	}

	return (
		<div
			className={`toast-container ${position} ${exitToast ? 'exit-toast' : 'toast-enter'}`}
			aria-roledescription='toast'
			style={{ backgroundColor, color: textColor }}>
			<div className='toast'>
				{icon && <img className='toast-icon' src={icon as string} alt='toast-icon' />}
				<p className='toast-message'>{message}</p>
			</div>
			{closeButton && (
				<div onClick={() => handleToastClose(id as string)}>
					<img
						className='close-button'
						src='https://cdn-icons-png.flaticon.com/128/9684/9684650.png'
						alt='toast-close-icon'
					/>
				</div>
			)}
		</div>
	)
}

export default Toast

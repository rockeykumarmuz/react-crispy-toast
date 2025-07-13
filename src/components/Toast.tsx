import { useToastContext } from '../context/toastContext'
import type { ToastMessageType } from '../types/toastMessageType'
import './toast.css'

const Toast = ({ icon, id, message, closeButton, backgroundColor, position }: ToastMessageType) => {
	const { removeToast } = useToastContext()

	return (
		<div className='toast-container' aria-roledescription='toast' style={{ backgroundColor }}>
			<div className='toast' style={{ position }}>
				{icon && <img className='toast-icon' src={icon as string} alt='success-icon' />}
				<div className='toast-message'>
					<p>{message}</p>
				</div>
				{closeButton && (
					<div onClick={() => removeToast(id as string)}>
						<img
							className='close-button'
							src='https://cdn-icons-png.flaticon.com/128/9684/9684650.png'
							alt='toast-close-icon'
						/>
					</div>
				)}
			</div>
		</div>
	)
}

export default Toast

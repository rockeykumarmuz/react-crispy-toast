import { toast } from './services/toast'

function App() {
	return (
		<>
			{toast.success('Rockey')}
			{toast.success('Saved successfully!', { closeButton: true, duration: 6000 })}
			{toast.error('Saved successfully!', { closeButton: true, duration: 6000 })}
			{toast.alert('Saved successfully!', { closeButton: true, duration: 6000 })}
		</>
	)
}

export default App

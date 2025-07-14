import { toast } from './services/toast'

function App() {
	return (
		<>
			{toast.success('Rockey', { position: 'top-right', closeButton: true })}
			{toast.success('Rockey', { position: 'top-left', closeButton: true })}
			{toast.success('Rockey', { position: 'top-center', closeButton: true })}
		</>
	)
}

export default App

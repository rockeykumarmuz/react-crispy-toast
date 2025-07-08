import Test from './components/Test'
import { toast } from './services/toast'

function App() {
	return (
		<>
			{toast.success('Rockey')}
			{toast.success('Saved successfully!', { closeButton: true, duration: 5000 })}
			<Test />
		</>
	)
}

export default App

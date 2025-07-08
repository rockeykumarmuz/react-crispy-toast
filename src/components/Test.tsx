import { toast } from '../services/toast'

const Test = () => {
	if (true) {
		toast.error('this is test error')
	}

	return (
		<div>
			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod nobis recusandae rem unde? Enim iusto, libero
				reprehenderit autem quod id esse perspiciatis cumque repellat sunt molestias dolores provident illo quasi.
			</p>
		</div>
	)
}

export default Test

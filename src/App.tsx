import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './routes';
import './App.scss';

type Props = {};

const App: React.FC<Props> = (props) => {
	return (
		<>
			<BrowserRouter>
				<AppRouter />
			</BrowserRouter>
		</>
	);
};

export default App;

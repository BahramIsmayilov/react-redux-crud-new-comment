import NewsListContainer from './components/NewsListContainer';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SingleNews from './components/SingleNews';

function App() {
	return (
		<Router>
			<div className='ui raised very padded text container segment'>
				<Route path='/' exact component={NewsListContainer} />
				<Route path='/posts/:id' component={SingleNews} />
			</div>
		</Router>
	);
}

export default App;

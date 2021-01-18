import NewsListContainer from './components/NewsListContainer';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SingleNews from './components/SingleNews';
import AddNews from './components/AddNews';

function App() {
	return (
		<Router>
			<div className='ui raised very padded text container segment'>
				<Route path='/' exact component={NewsListContainer} />
				<Route path='/posts/:id' exact component={SingleNews} />
				<Route path='/add-news' component={AddNews} />
				<Route path='/posts/:id/comments' component={AddNews} />
			</div>
		</Router>
	);
}

export default App;

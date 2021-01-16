import CommentsListContainer from './components/CommentsListContainer';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SingleComment from './components/SingleComment';

function App() {
	return (
		<Router>
			<div className='ui raised very padded text container segment'>
				<Route path='/' exact component={CommentsListContainer} />
				<Route path='/posts/:id' component={SingleComment} />
			</div>
		</Router>
	);
}

export default App;

import React from 'react';
import { Link } from 'react-router-dom';

const NewsList = (props) => {
	return (
		<div className='item'>
			<i className='newspaper alternate outline icon'></i>
			<div className='content'>
				<Link to={`/posts/${props.newsData.id}`} className='header'>
					{props.newsData.title}
				</Link>
				<div className='description'>{props.newsData.created_at}</div>
			</div>
		</div>
	);
};

export default NewsList;

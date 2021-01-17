import axios from 'axios';
import React, { useEffect, useState } from 'react';

const AllCommentsList = (props) => {
	const [commentsData, setCommentsData] = useState([]);

	useEffect(() => {
		axios
			.get(`https://react-yazi-yorum.herokuapp.com/posts/${props.id}/comments`)
			.then((response) => setCommentsData(response.data))
			.catch((error) => console.log(error));
	}, []);

	return (
		<div className='ui list'>
			{commentsData.map((comment) => {
				return (
					<div className='item' key={comment.id}>
						<div className='content'>
							<h3 className='header'>{comment.display_name}</h3>
							<div className='description'>{comment.body}</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default AllCommentsList;

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AddNewComment from './AddNewComment';

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
			{commentsData.length !== 0 && <h3>All Comments</h3>}
			{commentsData.length !== 0 ? (
				commentsData.map((comment) => {
					return (
						<div className='item' key={comment.id}>
							<div className='content'>
								<h3 className='header'>{comment.display_name}</h3>
								<div className='description'>{comment.body}</div>
								<div className='description'>{comment.created_at}</div>
							</div>
						</div>
					);
				})
			) : (
				<h3 className='header'>No comment</h3>
			)}
			<AddNewComment setCommentsData={setCommentsData} commentsData={commentsData} id={props.id} />
		</div>
	);
};

export default AllCommentsList;

import { api } from '../api';
import React, { useEffect, useState } from 'react';
import AddNewComment from './AddNewComment';
import { Link } from 'react-router-dom';
import DeleteAlertButton from './DeleteAlertButton';

const AllCommentsList = (props) => {
	const [commentsData, setCommentsData] = useState([]);
	console.log(props);
	useEffect(() => {
		api()
			.get(`/posts/${props.id}/comments`)
			.then((response) => setCommentsData(response.data))
			.catch((error) => console.log(error));
	}, [props]);

	return (
		<div className='ui list'>
			{commentsData.length !== 0 && <h3>All Comments</h3>}
			{commentsData.length !== 0 ? (
				commentsData.map((comment) => {
					return (
						<>
							<div className='ui divider'></div>
							<div className='ui right aligned grid' key={comment.id}>
								<div className='left floated left aligned six wide column'>
									<h3 className='header'>{comment.display_name}</h3>
									<div className='description'>{comment.body}</div>
									<div className='description'>{comment.created_at}</div>
								</div>
								<div className='right floated right aligned six wide column'>
									<Link to={`/posts/${comment.id}/comments`}>
										<button className='ui inverted green button'>Edit</button>
									</Link>
									<DeleteAlertButton
										path={props.path}
										push={props.push}
										url={`/posts/${props.id}/comments/${comment.id}`}
									/>
								</div>
							</div>
						</>
					);
				})
			) : (
				<h3 className='header'>No comment</h3>
			)}
			<div className='ui divider'></div>
			<AddNewComment setCommentsData={setCommentsData} commentsData={commentsData} id={props.id} />
		</div>
	);
};

export default AllCommentsList;

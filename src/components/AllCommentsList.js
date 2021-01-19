import { api } from '../api';
import React, { useEffect, useState } from 'react';
import AddNewComment from './AddNewComment';
import DeleteAlertButton from './DeleteAlertButton';

const INITIAL_EDIT_COMMENT_VALUE = {
	display_name: '',
	body: '',
};

const AllCommentsList = (props) => {
	const [commentsData, setCommentsData] = useState([]);
	const [editCommentData, setEditCommentData] = useState(INITIAL_EDIT_COMMENT_VALUE);
	const [editCemmentId, setEditCommentId] = useState(null);

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
									<button
										className='ui inverted green button'
										onClick={() => {
											setEditCommentData({
												display_name: comment.display_name,
												body: comment.body,
											});
											setEditCommentId(comment.id);
										}}
									>
										Edit
									</button>
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
			<AddNewComment
				setCommentsData={setCommentsData}
				commentsData={commentsData}
				id={props.id}
				editCommentData={editCommentData}
				editCemmentId={editCemmentId}
				path={props.path}
				push={props.push}
				setEditCommentId={setEditCommentId}
			/>
		</div>
	);
};

export default AllCommentsList;


import { useState, useEffect, useContext } from 'react';
import './Edit.css';
import Create from './Create.js';
import Home from './Home.js';
import { TaskContext } from "../App";

export default function Edit({ update, id }) {
	const { taskGroup, setTaskGroup } = useContext(TaskContext);


	// console.log("indexTaskGroup", indexTaskGroup);
	// console.log("index", index);


	console.log(taskGroup);


	// const {title,date,description} = useContext(TaskContext);
	let [title, setTitle] = useState(taskGroup[id].title);
	let [date, setDate] = useState(taskGroup[id].date);
	let [description, setDescription] = useState(taskGroup[id].description);
	console.log('title', title, 'date', date, 'description', description);
	console.log('taskGroup', taskGroup);
	console.log('id', id);
	console.log('taskGroup[id]', taskGroup[id]);

	// const task = { title, date, description };

	// console.log('task', task);

	function SaveEdit() {
		// setTitle({title: title});
		// setDate({date: date});
		// setDescription({description: description});

		let copyTaskGroup = JSON.parse(JSON.stringify(taskGroup));

		copyTaskGroup[id] = { title: title, date: date, description: description };
		setTaskGroup(copyTaskGroup);
		update(<Home update={update} />);
		console.log(taskGroup);
	};
	console.log(taskGroup);


	return (
		<>
			<main className='edit-main'>
				<div className='edit-h1'>
					<h1 >Edit a task</h1>
				</div>
				<div className='edit-div'>
					<div className='edit-div-title-date'>
						<div className='edit-title-div'>
							<p>Title :</p>
							<input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} />
						</div>
						<div className='edit-date-div'>
							<p>Due Date : </p>
							<input type="date" value={date} onChange={(e) => { setDate(e.target.value) }} />
						</div>
					</div>
					<div className='edit-description-div'>
						<p>Description : </p>
						<textarea type="text" value={description} onChange={(e) => { setDescription(e.target.value) }} />
					</div>
					<div className='edit-buttons-div'>
						<button className='edit-btn-cancel' onClick={() => { update(<Home update={update} />) }}>Cancel</button>
						<input type='submit' value='Save' className='edit-btn-save-task' onClick={() => { SaveEdit() }}></input>

					</div>
				</div>

			</main>
			
		</>
	)
}
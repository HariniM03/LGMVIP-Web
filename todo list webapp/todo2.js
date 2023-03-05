let inputTask = document.querySelector('#inputtask');
let addTaskBtn = document.querySelector('#addtaskbtn');
let taskList = document.querySelector('#tasklist');

addTaskBtn.addEventListener('click', function() {
	if (inputTask.value.trim() !== '') {
		let taskItem = document.createElement('li');
		taskItem.className = 'taskitem';
		taskItem.innerHTML = `
			<span>${inputTask.value.trim()}</span>
			<button>DELETE</button>
		`;
		taskList.appendChild(taskItem);
		inputTask.value = '';
	}
});

taskList.addEventListener('click', function(event) {
	if (event.target.tagName === 'BUTTON') {
		event.target.parentElement.remove();
	}
});

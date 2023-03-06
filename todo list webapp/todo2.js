let inputTask = document.querySelector('#inputtask');
let addTaskBtn = document.querySelector('#addtaskbtn');
let taskList = document.querySelector('#tasklist');

addTaskBtn.addEventListener('click', function() {
	if (inputTask.value.trim() !== '') {
		let taskItem = document.createElement('li');
		taskItem.className = 'taskitem';
		taskItem.innerHTML = `
			<input type="checkbox">
			<span>${inputTask.value.trim()}</span>
			<button>Delete</button>
		`;
		taskList.appendChild(taskItem);
		inputTask.value = '';
	}
});

taskList.addEventListener('click', function(event) {
	if (event.target.tagName === 'BUTTON') {
		event.target.parentElement.remove();
	} else if (event.target.tagName === 'INPUT') {
		let taskItem = event.target.parentElement;
		if (event.target.checked) {
			taskItem.style.textDecoration = 'linethrough';
			taskItem.style.color = '#aaa';
		} else {
			taskItem.style.textDecoration = 'none';
			taskItem.style.color = '#333';
		}
	}
});

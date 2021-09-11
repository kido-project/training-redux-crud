import * as types from './../constants/ActionTypes';

let data = JSON.parse(localStorage.getItem('tasks'));

let initialState = data ? data : [];

let myReducer = (state = initialState, action) => {
	switch(action.type) {
		case types.LIST_ALL:
			return state;
		case types.SAVE_TASK:
			let task = {
				id: action.task.id,
				name: action.task.name,
				status: action.task.status === 'true' ? true : false
			};
			if(!task.id) {
				task.id = guid();
				state.push(task);
			} else {
	        let indexUpdate = findIndex(state, task.id);
	        	state[indexUpdate] = task;
			}
			localStorage.setItem('tasks', JSON.stringify(state));
			return [...state];
		case types.LIST_ALL:
			return state;
		case types.UPDATE_STATUS_TASK:
			let idUpdate = action.id;
	        let indexUpdate = findIndex(state, idUpdate);
	        state[indexUpdate] = {
	        	...state[indexUpdate],
	        	status: !state[indexUpdate].status
	        } 
			localStorage.setItem('tasks', JSON.stringify(state));
			return [...state];
		case types.DELETE_TASK:
			let idDelete = action.id;
	        let indexDelete = findIndex(state, idDelete);
	        state.splice(indexDelete, 1);
			localStorage.setItem('tasks', JSON.stringify(state));
			return [...state];
		default: return state;
	}
	return state;
}
let s4 = () => {
        return  Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }

let guid = () => {
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

let findIndex = (tasks, id) => {
    var result = -1;
    tasks.forEach((task, index) => {
        if(task.id === id){
            result = index;
        }
    });
    return result;
}

export default myReducer;
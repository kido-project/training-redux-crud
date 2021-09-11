import * as types from './../constants/ActionTypes';

let initialState = {
	id: '',
	name: '',
	status: false,
};

let myReducer = (state = initialState, action) => {
	switch(action.type){
		case types.EDIT_TASK:
			return action.task;
	}
	return state;
}
export default myReducer;
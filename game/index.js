import {Map} from 'immutable'

import {createStore} from 'redux'
import { stat } from 'fs';

const gameBoard = Map()
const MOVE = 'MOVE'

export default function reducer(state={board : gameBoard, turn : 'O'}, action) {
  if (action.type === MOVE) {
		state.board = state.board.setIn(action.position,state.turn)
		if(action.player === 'O'){
		  state.turn = 'X'
		}else {
			state.turn = 'O'
		}
  }
	// console.log(state)
  return (state)
}
//const store = createStore(reducer)

export const move = function  (player, arr) {
	/*reducer.state*/console.log (arr)
	return {
	type: MOVE,
	position: arr,
  player: player
}
}
	
const convertCord = function(arr){
	let output = 0;
	if (arr[1] === 1){
		output += 3;
	} else if (arr[1] === 2){
		output += 6
	}
	output += arr[0]
	return output
} 
  /*
	const reducer (state) {
		state = {
  		currentPlayerTurn :  true
  		gameBoard : [[null, null, null], [null, null, null], [null, null, null]]
		}
	}
	
  Move (playerBool, arr) {
  	gameBoard[arr[1], arr[2]] = playerBool
  }
	*/
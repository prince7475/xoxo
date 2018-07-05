import {Map} from 'immutable'

import {createStore} from 'redux'

const gameBoard = Map()
const MOVE = 'MOVE'

export default function reducer(state={board : gameBoard, turn : 'O'}, action) {
  console.log(action)
  if (action.type === MOVE) {
  	console.log ('it works')
  	state.board[row][column] = action.player
  }
  return (state)

}
	
//const store = createStore(reducer)

function move (turn, coordinate) {
	/*reducer.state*/console.log ('doot doot mr skeltal')
	return {
   type: MOVE,
   position: coordinate,
   player: turn
 }
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
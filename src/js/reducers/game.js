import GameStore from '../store/GameStore';
import { validate } from '../utils/Validate';


let initialState = GameStore

let game  = (state = initialState, action) => {
  let data = action.payload;
  let newState = {...state}
  console.log(action.type)
  switch (action.type) {
    case 'MOVE_PIECE':
      let start = {
        col: data.new.x,
        row: data.new.y
      }
      let destination = {
        col: data.old.x,
        row: data.old.y
      }
      let validMove = validate(start, destination, data.piece)

      if (validMove) {
        if (!newState.positions[data.new.x][data.new.y] || newState.positions[data.new.x][data.new.y].color !== data.piece.color) {
          newState.positions[data.new.x][data.new.y] = data.piece;
          newState.positions[data.old.x][data.old.y] = null;

          if(data.piece.type === "pawn") {
            newState.positions[data.new.x][data.new.y].hasMoved = true;
          }
        }
      }

      return newState;

    case 'SELECT_PIECE':
        newState.selectedCoord = [data.coords.x,data.coords.y]

        return newState;

    case 'DESELECT_PIECE':
        newState.selectedCoord = [];

        return newState;

    default:
      return state
  }
}

export default game
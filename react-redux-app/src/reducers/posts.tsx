enum ActionType {
  FETCH_POST = 'FETCH_POST',
  DELETE_POST = 'DELETE_POST'
}

interface Post {
  userId: number;
  id: number;
  title: string;
}

interface Action {
  type: ActionType;
  payload: Post[];
}

const posts = (state = [], action: Action) => {
  switch(action.type) {
    case 'FETCH_POST':
      return [...state, ...action.payload];
    default:
      return state;

  }
}

export default posts;
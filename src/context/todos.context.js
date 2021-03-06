import React, {createContext} from 'react';
import todoReducer from "../reducers/todo.reducer";
import { useLocalStorageReducer } from '../hooks/useLocalStorageReducer';

const defaultTodos = [
  { id: 1, task: "Take deep breath", completed: false },
  { id: 2, task: "Eat less", completed: false },
  { id: 3, task: "Exercise", completed: false }
];

export const TodosContext = createContext();
export const DispatchContext = createContext();

export function TodosProvider(props) {
  const [todos, dispatch] = useLocalStorageReducer("todos", defaultTodos, todoReducer);
  return (
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  )
}
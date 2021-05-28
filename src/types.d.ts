type Todo = {
  text: string;
  complete: boolean;
};

type ToggleTodo = (sellectedTodo: Todo) => void;

type AddTodo = ( newToodo: string ) => void;

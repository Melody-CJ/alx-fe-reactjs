// src/__tests__/TodoList.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  test('renders initial todos correctly', () => {
    render(<TodoList />);
    
    // Check if initial todos are rendered
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
    expect(screen.getByText('Write Tests')).toBeInTheDocument();
    
    // Check if todo list is rendered
    expect(screen.getByTestId('todo-list')).toBeInTheDocument();
    
    // Check if input and button are rendered
    expect(screen.getByTestId('todo-input')).toBeInTheDocument();
    expect(screen.getByTestId('add-button')).toBeInTheDocument();
  });

  test('adds a new todo', async () => {
    const user = userEvent.setup();
    render(<TodoList />);
    
    const input = screen.getByTestId('todo-input');
    const addButton = screen.getByTestId('add-button');
    
    // Add a new todo
    await user.type(input, 'New Test Todo');
    await user.click(addButton);
    
    // Check if new todo is added
    expect(screen.getByText('New Test Todo')).toBeInTheDocument();
    
    // Check if input is cleared after adding
    expect(input).toHaveValue('');
  });

  test('does not add empty todo', async () => {
    const user = userEvent.setup();
    render(<TodoList />);
    
    const initialTodoCount = screen.getAllByTestId(/^todo-item-/).length;
    const addButton = screen.getByTestId('add-button');
    
    // Try to add empty todo
    await user.click(addButton);
    
    // Check that no new todo was added
    expect(screen.getAllByTestId(/^todo-item-/).length).toBe(initialTodoCount);
  });

  test('toggles todo completion status', async () => {
    const user = userEvent.setup();
    render(<TodoList />);
    
    const todoItem = screen.getByTestId('todo-item-1'); // First todo
    
    // Check initial state (not completed)
    expect(todoItem).not.toHaveClass('completed');
    
    // Toggle todo
    await user.click(todoItem);
    
    // Check if todo is marked as completed
    expect(todoItem).toHaveClass('completed');
    
    // Toggle back
    await user.click(todoItem);
    
    // Check if todo is marked as not completed
    expect(todoItem).not.toHaveClass('completed');
  });

  test('deletes a todo', async () => {
    const user = userEvent.setup();
    render(<TodoList />);
    
    const initialTodoCount = screen.getAllByTestId(/^todo-item-/).length;
    const deleteButton = screen.getByTestId('delete-button-1');
    const todoToDelete = screen.getByText('Learn React');
    
    // Delete todo
    await user.click(deleteButton);
    
    // Check if todo is removed
    expect(todoToDelete).not.toBeInTheDocument();
    expect(screen.getAllByTestId(/^todo-item-/).length).toBe(initialTodoCount - 1);
  });

  test('updates statistics correctly', () => {
    render(<TodoList />);
    
    // Check initial statistics
    expect(screen.getByText('Total: 3')).toBeInTheDocument();
    expect(screen.getByText('Completed: 1')).toBeInTheDocument();
    expect(screen.getByText('Pending: 2')).toBeInTheDocument();
  });

  test('handles form submission with enter key', async () => {
    const user = userEvent.setup();
    render(<TodoList />);
    
    const input = screen.getByTestId('todo-input');
    
    // Type and submit with enter
    await user.type(input, 'Todo with Enter{enter}');
    
    // Check if todo is added
    expect(screen.getByText('Todo with Enter')).toBeInTheDocument();
  });
});
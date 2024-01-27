import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState('');

  const addTodo = () => {
    if (todoText.trim().length > 0) {
      setTodos([...todos, { text: todoText, checked: false }]);
      setTodoText('');
    }
  };

  const deleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  const toggleTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].checked = !updatedTodos[index].checked;
    setTodos(updatedTodos);
  };

  const renderTodoItem = ({ item, index }) => (
    <View style={styles.todoItem}>
      <TouchableOpacity onPress={() => toggleTodo(index)}>
        <Text style={[styles.todoText, item.checked && styles.checkedTodoText]}>
          {item.text}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => deleteTodo(index)}
        style={styles.deleteButtonContainer}
      >
        <Text style={styles.deleteButton}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.todoInput}
        placeholder="Add a new todo"
        value={todoText}
        onChangeText={(text) => setTodoText(text)}
      />
      <TouchableOpacity style={styles.addButton} onPress={addTodo}>
        <Text style={styles.buttonText}>Add Todo</Text>
      </TouchableOpacity>

      <FlatList
        data={todos}
        keyExtractor={(item, index) => `${index}`}
        renderItem={renderTodoItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  todoInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  addButton: {
    backgroundColor: 'lightblue',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  todoItem: {
    flexDirection: 'row',
    alignItems: 'flex-start', // Align items to the start of the container
    marginBottom: 5,
  },
  todoTextContainer: {
    flex: 1,
    marginRight: 10,
  },
  todoText: {
    textDecorationLine: 'none',
  },
  checkedTodoText: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
  deleteButtonContainer: {
    marginLeft: 'auto',
    marginRight: 10,
  },
  deleteButton: {
    color: 'red',
  },
});


export default TodoList;
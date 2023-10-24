
import React, {useEffect, useState} from 'react';

import { Text, View, TextInput, Button, FlatList, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { IconButton } from 'react-native-paper';


const HomeScreen = ({ navigation }) => {
    const [text, setText] = useState('');
    const [todos, setTodos] = useState([]);
    const [completedTodos, setCompletedTodos] = useState([]);


    const addTodo = () => {
        if (text) {
            setTodos([...todos, { text, completed: false }]);
            setText('');
        }
    };

    const markAsCompleted = (index) => {
        const updatedTodos = [...todos];
        updatedTodos[index].completed = true;
        setTodos(updatedTodos);

        const completedTodo = updatedTodos[index];
        setCompletedTodos([...completedTodos, completedTodo]);
    };

    const deleteTodo = (index) => {
        const updatedTodos = todos.filter((_, i) => i !== index);
        setTodos(updatedTodos);
    };



    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Добавить задачу"
                value={text}
                onChangeText={setText}
            />
            <Button title="Добавить" onPress={addTodo} />

            <FlatList
                data={todos}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                    <TodoLine
                        todo={item}
                        onComplete={() => markAsCompleted(index)}
                        onDelete={() => deleteTodo(index)}

                    />
                )}
            />

            <Button
                title="Завершенные задачи"
                onPress={() => navigation.navigate('CompletedTasks', { completedTodos })}
            />
        </View>
    );
};
const TodoLine = ({ todo, onComplete, onDelete, onImagePicker }) => (
    <View style={styles.todoContainer}>
        <Text style={styles.todoText}>{todo.text}</Text>
        {!todo.completed && (
            <IconButton icon="check" onPress={onComplete} />
        )}
        <IconButton icon="delete" onPress={onDelete} />
        <IconButton icon="camera" onPress={onImagePicker} />
        {todo.image && <Image source={{ uri: todo.image }} style={styles.todoImage} />}
    </View>
);
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
        backgroundColor:
            '#758eff',


    },
    header: {
        marginBottom: 20,
        fontSize: 34,
        color: 'white'
    },

        input: {
            height: 40,
            borderWidth: 1,
            marginBottom: 10,
            padding: 10,
        },
        todoContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 10,
        },
        todoText: {
            flex: 1,
        },
        todoImage: {
            width: 50,
            height: 50,
            marginLeft: 10,
        },

});

export default HomeScreen;

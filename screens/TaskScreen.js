import React, {useEffect, useRef} from 'react';
import {Modal, View, Text, Button, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import {Modalize} from "react-native-modalize";
import {Alert} from 'react-native';
import {useState} from 'react';
import {TextInput} from 'react-native';
import LogStore from '../LogStore';


const TaskScreen = () => {


    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        const loadTasks = async () => {
            const tasks = await LogStore.getTasks();
            setTasks(tasks);
        };
        loadTasks();
    }, []);


    const handleDeleteTask = (index) => {
        const updatedTasks = tasks.filter((task, i) => i !== index);
        setTasks(updatedTasks);
        LogStore.deleteTasks(index); // удаляем задачу из logstore
    };
    const addTask = () => {
        const updatedTasks = [...tasks, newTask];
        setTasks(updatedTasks);
        setNewTask('');
        LogStore.saveTasks(updatedTasks); // сохраняем задачи в logstore

    }

    return (
        <View style={{flex: 1, padding: 20, backgroundColor: '#071825'}}>
            <TextInput
                value={newTask}
                onChangeText={text => setNewTask(text)}
                placeholder="Enter a new task"
                style={styles.textinput}
            />

            <Button title="add new task" onPress={addTask}/>

            <ScrollView style={styles.header}>
                {tasks.map((task, index) => (
                    <View key={index} style={styles.container}>
                        <Text style={styles.tasktext}>Task {index}: {task}</Text>

                        <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.deletebutton}>
                            <Text style={{color: '#ffffff', textShadowRadius: 11}}>Delete</Text>
                        </TouchableOpacity>
                        <Modal
                            visible={modalVisible}
                            animationType="slide"
                            transparent={true}
                        >
                            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                                <View style={{backgroundColor: 'white', padding: 20, gap: 10}}>
                                    <Text style={{color: 'black', margin: 10, fontSize: 20}}> Delete item?</Text>
                                    <Button title="Close" onPress={() => setModalVisible(false)}/>
                                    <Button title="Delete" onPress={() => {
                                        handleDeleteTask(index);
                                        setModalVisible(false)
                                    }}/>
                                </View>
                            </View>
                        </Modal>
                    </View>
                ))}
            </ScrollView>

        </View>
    );
}

export default TaskScreen;


const styles = StyleSheet.create({
    tasktext: {
        fontSize: 16,
        color: 'white',
        marginBottom: 5,
        textAlign: 'left',
        paddingLeft: 10
    },
    deletebutton: {backgroundColor: '#ff9000', borderColor: '#ff9000', borderWidth: 9, borderRadius: 10},
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15,
        flexWrap: "wrap",
        backgroundColor:
            '#3078ff',
        color: 'white',
        fontSize: 20, padding: 10, borderRadius: 8,

        justifyContent: 'space-between'
    },
    textinput: {
        borderWidth: 1,
        padding: 10,
        marginBottom: 10,
        color: 'black',
        backgroundColor: '#e8e8e8'
    },
    header: {
        fontSize: 34,
        marginBottom: 20,
        color: 'white',
    },
});


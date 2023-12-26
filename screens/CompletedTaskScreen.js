import React, {useEffect} from 'react';
import {Modal, View, Text, Button, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';

import {useState} from 'react';

import LogStore from '../repository/LogStore';


const CompletedTaskScreen = () => {
    const [tasks, setTasks] = useState([]);
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
        LogStore.deleteTasks(index);
    };
    const handleToggleComplete = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks[index].completed = !updatedTasks[index].completed;
        setTasks(updatedTasks);
        LogStore.saveTasks(updatedTasks);
    };



    return (
        <View style={{ flex: 1, padding: 20, backgroundColor: '#071825' }}>



            <ScrollView style={styles.header}>
                {tasks.filter(task => task.completed).map((task, index) => (
                    <View key={index} style={[styles.container]}>
                        <Text style={styles.tasktext}>Task {index}: {task.text}</Text>


                        <View style={[styles.buttons, task.completed && styles.completed]}>

                            <TouchableOpacity onPress={() => handleToggleComplete(index)} style={styles.completebutton}>
                                <Text style={styles.comptext}>{task.completed ? 'Undo' : 'Complete'}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.deletebutton}>
                                <Text style={styles.comptext}>Delete task</Text>
                            </TouchableOpacity>
                        </View>


                        <Modal
                            visible={modalVisible}
                            animationType="slide"
                            transparent={true}
                        >
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{ backgroundColor: 'white', padding: 20, gap: 10 }}>
                                    <Text style={{ color: 'black', margin: 10, fontSize: 20 }}> Delete item?</Text>
                                    <Button title="Close" onPress={() => setModalVisible(false)} />
                                    <Button title="Delete" onPress={() => {
                                        handleDeleteTask(index);
                                        setModalVisible(false);
                                    }} />
                                </View>
                            </View>
                        </Modal>
                    </View>
                ))}
            </ScrollView>

        </View>
    );
};

export default CompletedTaskScreen;


const styles = StyleSheet.create({
    tasktext: {
        fontSize: 16,
        color: 'white',
        marginBottom: 5,
        textAlign: 'left',
        paddingLeft: 10
    },

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
    buttons:{ flexDirection: 'column', alignItems: 'flex-start', gap: 3},
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
    completebutton:
        {
            backgroundColor: '#008000',
            borderColor: '#008000',
            borderWidth: 9,
            borderRadius: 10,
            width: 87
        },
    deletebutton:
        {
            backgroundColor: '#ff9000',
            borderColor: '#ff9000',
            borderWidth: 9,
            borderRadius: 10},
    completed: {
        backgroundColor: '#57ff8b',
        borderColor: '#57ff8b',
        borderWidth: 10,
        borderRadius: 10,

    },
    comptext:{ color: '#ffffff', textShadowRadius: 11 }
});


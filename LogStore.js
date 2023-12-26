import AsyncStorage from '@react-native-async-storage/async-storage';

const LogStore = {
    async saveTasks(tasks) {
        try {
            await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
        } catch (error) {
            console.log('Error saving task: ', error);
        }
    },

    async getTasks() {
        try {
            const tasks = await AsyncStorage.getItem('tasks');
            return tasks ? JSON.parse(tasks) : [];
        } catch (error) {
            console.log('Error getting task: ', error);
            return [];
        }
    },

    async deleteTasks(index) {
        try {
            const tasks = await AsyncStorage.getItem('tasks');
            if (tasks !== null) {
                const parsedTasks = JSON.parse(tasks);
                parsedTasks.splice(index, 1);
                await AsyncStorage.setItem('tasks', JSON.stringify(parsedTasks));
            }
        } catch (error) {
            console.log(error);
        }
    }
};

export default LogStore;

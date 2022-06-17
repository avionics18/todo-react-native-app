import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import uuid from "react-native-uuid";

import Task from "./components/Task";
import TaskInput from "./components/TaskInput";

export default function App() {
    const [tasks, setTasks] = useState([
        {
            id: uuid.v4(),
            title: "Setting up project in Jira",
            done: true,
        },
        {
            id: uuid.v4(),
            title: "Learn SASS and build Portfolio",
            done: false,
        },
        {
            id: uuid.v4(),
            title: "Goto GYM - Leg Workouts",
            done: false,
        },
    ]);

    function addTaskHandler(newTask) {
        setTasks([
            ...tasks,
            {
                id: uuid.v4(),
                title: newTask,
                done: false,
            },
        ]);
    }

    function toggleDoneHandler(taskId) {
        setTasks((prev) =>
            prev.map((task) =>
                task.id === taskId ? { ...task, done: !task.done } : task
            )
        );
    }

    function delTaskHandler(taskId) {
        setTasks((prev) => prev.filter((task) => task.id !== taskId));
    }

    return (
        <View style={styles.appContainer}>
            {/* Today's Tasks */}
            <View style={styles.container}>
                <Text style={styles.sectionTitle}>Today's Tasks</Text>

                <View style={styles.tasksWrapper}>
                    {/* This is where all the task items will go */}
                    <ScrollView style={styles.tasks_scrollview}>
                        {tasks.map((task) => (
                            <Task
                                key={task.id}
                                task={task}
                                toggleDoneHandler={toggleDoneHandler}
                                delTaskHandler={delTaskHandler}
                            />
                        ))}
                    </ScrollView>
                </View>
            </View>

            {/* Task Input Section */}
            <TaskInput addTaskHandler={addTaskHandler} />
        </View>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        backgroundColor: "#e8eaed",
    },
    container: {
        flex: 1,
        paddingTop: 80,
        paddingHorizontal: 20,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: "bold",
    },
    tasksWrapper: {
        flex: 1,
        marginTop: 30,
        marginBottom: 100,
    },
});

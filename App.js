import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Task from "./components/Task";

export default function App() {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            title: "Setting up project in Jira Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non suscipit exercitationem",
            done: true,
        },
        {
            id: 2,
            title: "Learn SASS and build Portfolio",
            done: false,
        },
        {
            id: 3,
            title: "Goto GYM - Leg Workouts",
            done: false,
        },
    ]);

    return (
        <View style={styles.appContainer}>
            {/* Today's Tasks */}
            <View style={styles.container}>
                <Text style={styles.sectionTitle}>Today's Tasks</Text>

                <View style={styles.tasksWrapper}>
                    {/* This is where all the task items will go */}
                    {tasks.map((task) => (
                        <Task key={task.id} task={task} />
                    ))}
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        backgroundColor: "#e8eaed",
    },
    container: {
        paddingTop: 80,
        paddingHorizontal: 20,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: "bold",
    },
    tasksWrapper: {
        marginTop: 30,
    },
});

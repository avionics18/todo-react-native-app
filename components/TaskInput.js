import { useState } from "react";
import {
    KeyboardAvoidingView,
    Platform,
    TextInput,
    Pressable,
    Text,
    StyleSheet,
    Keyboard,
    Alert,
} from "react-native";

export default function TaskInput({ addTaskHandler }) {
    const [enteredText, setEnteredText] = useState("");

    function onSubmitHandler() {
        if (enteredText.trim() === "") {
            Alert.alert(
                "Warning",
                "Task Field shouldn't be empty. Please enter a valid task."
            );
        } else {
            Keyboard.dismiss();
            addTaskHandler(enteredText);
            setEnteredText("");
        }
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.taskInputWrapper}
        >
            <TextInput
                style={styles.input}
                placeholder="Enter your task"
                value={enteredText}
                onChangeText={(currText) => setEnteredText(currText)}
            />
            <Pressable
                style={({ pressed }) => [
                    styles.addTaskBtn,
                    pressed && styles.addTaskBtn_pressed,
                ]}
                onPress={onSubmitHandler}
            >
                <Text style={styles.plusIconText}>+</Text>
            </Pressable>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    taskInputWrapper: {
        width: "100%",
        paddingHorizontal: 20,
        position: "absolute",
        bottom: 30,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    input: {
        flex: 1,
        marginRight: 16,
        backgroundColor: "#ffffff",
        paddingVertical: 16,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderColor: "#cccccc",
        borderRadius: 60,
    },
    addTaskBtn: {
        width: 60,
        height: 60,
        backgroundColor: "#55bcf6",
        borderWidth: 1,
        borderColor: "#459bcc",
        borderRadius: 60,
        justifyContent: "center",
        alignItems: "center",
    },
    addTaskBtn_pressed: {
        backgroundColor: "#459bcc",
    },
    plusIconText: {
        fontSize: 28,
        color: "#ffffff",
    },
});

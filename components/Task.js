import { View, Text, StyleSheet, Pressable } from "react-native";

export default function Task({ task, toggleDoneHandler, delTaskHandler }) {
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <Pressable
                    onPress={() => toggleDoneHandler(task.id)}
                    style={[styles.square, task.done && styles.square_done]}
                ></Pressable>
                <Text
                    style={[styles.itemText, task.done && styles.itemText_done]}
                >
                    {task.title}
                </Text>
            </View>
            <View>
                <Pressable
                    onPress={() => delTaskHandler(task.id)}
                    hitSlop={16}
                    style={({ pressed }) => [
                        styles.circular,
                        pressed && styles.circular_pressed,
                    ]}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: "#ffffff",
        padding: 16,
        marginBottom: 16,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    itemLeft: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: "#55bcf6",
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 16,
    },
    square_done: {
        backgroundColor: "green",
    },
    itemText: {
        flex: 1,
        paddingRight: 16,
    },
    itemText_done: {
        textDecorationLine: "line-through",
        textDecorationColor: "#999999",
        color: "#999999",
    },
    circular: {
        width: 12,
        height: 12,
        borderWidth: 2,
        borderColor: "#e84338",
        borderRadius: 5,
        backgroundColor: "#ffffff",
    },
    circular_pressed: {
        backgroundColor: "#e84338",
    },
});

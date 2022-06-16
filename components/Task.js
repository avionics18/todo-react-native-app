import { View, Text, StyleSheet, Pressable } from "react-native";

export default function Task({ task }) {
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <Pressable style={styles.square}></Pressable>
                <Text style={styles.itemText}>{task.title}</Text>
            </View>
            <View style={styles.circular}></View>
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
    itemText: {
        maxWidth: "85%",
    },
    circular: {
        width: 12,
        height: 12,
        borderWidth: 2,
        borderColor: "#55bcf6",
        borderRadius: 5,
    },
});

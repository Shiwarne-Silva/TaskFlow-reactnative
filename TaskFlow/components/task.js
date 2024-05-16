import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";

const Task = ({ text, onDelete }) => {
  const handleDelete = () => {
    Alert.alert(
      "Delete Task",
      "Are you sure you want to delete this task?",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Delete", onPress: onDelete, style: "destructive" }
      ],
      { cancelable: true }
    );
  };

  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <Text style={styles.itemText}>{text}</Text>
      </View>
      <TouchableOpacity onPress={handleDelete}>
        <View style={styles.circular}></View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: "#55BCF6",
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    fontSize: 16,
    maxWidth: "80%",
  },
  circular: {
    width: 15,
    height: 15,
    borderColor: "#55BCF6",
    borderWidth: 2,
    borderRadius: 10,
  },
});

export default Task;

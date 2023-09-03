import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      margin: 15,
    },
    divider: {
        borderBottomColor: '#aaa',
        borderBottomWidth: 1,
        flex: 1.5
    },
    title: {
        flex: 1,
        color: '#aaa',
        textAlign: 'center',
    }
});

const DividerWithTitle = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.divider}></View>
            <Text style={styles.title}>{props.title}</Text>
            <View style={styles.divider}></View>
        </View>
    );
}

export default DividerWithTitle;
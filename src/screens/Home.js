import { StyleSheet, View, Text} from 'react-native';


export default function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.titlile}>
                HomeScreen
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'left',
        padding: 30,
    },
    titlile : {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
    },
    
});
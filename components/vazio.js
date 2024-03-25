import { StyleSheet, View, Text, TextInput, Button, Image } from 'react-native';



export default function Vazio() {
    return (
        <View style={styles.empy}>
            <Image source={require('../src/images/vazio.png')} style={{ width: 20, height: 20 }} />
        </View>
    )
}

const styles = StyleSheet.create({
    empy: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        padding: 10,
        margin: 10,
    }

});
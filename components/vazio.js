import { StyleSheet, View, Text, TextInput, Button, Image, TouchableOpacity } from 'react-native';
import { Updates } from 'expo-updates';


export default function Vazio() {

    const reloadApp = () => {
        Updates.reload();
      };


    return (
        <TouchableOpacity style={styles.empy} onPress={reloadApp}>
            <Image source={require('../src/images/vazio.png')} style={{ width: 20, height: 20 }} />
        </TouchableOpacity>
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
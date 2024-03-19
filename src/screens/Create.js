import CreateBar from '../../components/creator';
import { StyleSheet ,View, Text, TextInput, Button, Image} from 'react-native';

export default function Create() {
    return (
        <View style={styles.container}>
            <Image source={require('../images/tarefas.png')} style={styles.logo} />
            <View style={styles.containermore}>
                  <CreateBar/>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'cornflowerblue',
        alignItems: '',
        justifyContent: 'center',
        padding: 40,
    },
    
    titlile : {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'left',
    },

    containermore : {
        borderRadius: 4,
        backgroundColor: 'lightskyblue',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        marginTop: 10,
        flexDirection: 'row',   
     },

     logo: {
        width: 90,
        height: 90,
        resizeMode: 'contain',
        alignSelf: 'center',
        
     }

});
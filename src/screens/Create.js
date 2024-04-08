import CreateBar from '../../components/creator';
import { StyleSheet ,View, Text, TextInput, Button, Image, TouchableOpacity} from 'react-native';

export default function Create() {



    return (
        <View style={styles.container}>
            
            <Image source={require('../images/tarefas.png')} style={styles.logo} />


            <View style={styles.container2}>
                  <CreateBar/>
            </View>

        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'cornflowerblue',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 40,
        borderWidth: 2,
        
       
    },

    container2: {
        flex: 1,
        backgroundColor: 'cornflowerblue',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 40,
       
    },
    
    titlile : {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'left',
    },


     logo: {
        width: 90,
        height: 90,
        resizeMode: 'contain',
        alignSelf: 'center',
        
     },
    
});
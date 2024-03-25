import CreateBar from '../../components/creator';
import { StyleSheet ,View, Text, TextInput, Button, Image, TouchableOpacity} from 'react-native';

export default function Create() {
    return (
        <View style={styles.container}>
            
            <Image source={require('../images/tarefas.png')} style={styles.logo} />


            <View style={styles.containermore}>
                  <CreateBar/>
            </View>

            <View style={styles.botao}>
                <TouchableOpacity style={styles.botton}>
                <Image source={require('../images/vazio.png')} style={{ width: 20, height: 20 }} />
                </TouchableOpacity>  
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
        
     },

     botao: {
        flex: 1,
        alignItems: 'center',
        width: 100,
        height: 100,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 10,   
     },  

     botton: {
        borderRadius: 50,
        backgroundColor: 'white',
        alignItems: 'center',
        paddingLeft: 90,
        paddingRight: 90,
        paddingTop: 5,
        paddingBottom: 5,
     }
});
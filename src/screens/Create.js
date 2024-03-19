import CreateBar from '../../components/creator';
import { StyleSheet ,View, Text, TextInput, Button} from 'react-native';

export default function Create() {
    return (
        <View style={styles.container}>
            <View style={styles.containermore}>
                  <CreateBar/>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
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
        backgroundColor: 'rgb(211,211,211)',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        marginTop: 10,
        flexDirection: 'row',   
     },

});
import { StyleSheet, View, Text, Image, Link } from 'react-native';
import Vazio from '../../components/vazio';
import { useRoute } from '@react-navigation/native';
import React from 'react';

export default function Home() {



    return (
        <View>
        
            <View style={styles.container}>
                <Image source={require('../images/tarefas.png')} style={styles.logo} />
                <Text style={styles.titlile}>
                    Suas tarefas
                </Text>
            </View>

            <View>
              <Vazio/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'cornflowerblue',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 30,
        borderWidth: 2

    },
    titlile: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: 'black',

    },

    logo: {
        width: 90,
        height: 90,
        resizeMode: 'contain',
    },
    
   
    
});
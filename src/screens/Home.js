import { StyleSheet, View, Text, Image, Link, FlatList } from 'react-native';
import Vazio from '../../components/vazio';
import { useRoute } from '@react-navigation/native';
import React from 'react';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Home() {

    const [tarefas, setTarefas] = useState([]);

    useEffect(() => {
        recuperarTarefas();
    }, []);

    const recuperarTarefas = async () => {
        try {
            const tarefasArmazenadas = await AsyncStorage.getItem('tarefas');
            if (tarefasArmazenadas) {
                setTarefas(JSON.parse(tarefasArmazenadas));
            }
        } catch (error) {
            console.error('Erro ao recuperar tarefas:', error);
        }
    };
    
    const renderItem = ({ item }) => (
        <View style={styles.itens}>
            <Text style={styles.nome}>{item.nome}</Text>
            <Text style={styles.nome}>{item.descricao}</Text>
            <Text style={styles.nome}>{item.selectedDate}</Text>    
        </View>
    );
    
     

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

            <View style={styles.results}>
               

                <FlatList
                data={tarefas}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                />  

            </View>
        </View>
    );
}   

const styles = StyleSheet.create({

   
    results: {
        display: 'inline-block',
        marginTop: 20,
        padding: 20,
        

    },

    itens: {
        marginTop: 20,
        padding: 20,
        borderWidth: 2,
        backgroundColor: 'lightblue',
        borderRadius: 20,  
        borderColor: 'black',
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',

    },

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
        borderWidth: 2,
        borderColor: 'black',

    },

    logo: {
        width: 90,
        height: 90,
        resizeMode: 'contain',
    },

    dadosContainer: {
        display: 'inline-block',
        marginTop: 20,
        padding: 20,
        borderWidth: 2,
        backgroundColor: 'lightblue',
        borderRadius: 20,
    },
    
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: 'black',
        margin: 3,

    },

    nome: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'black',
        margin: 3,
        padding: 1,
    }
   
    
});
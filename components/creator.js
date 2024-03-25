import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import React, { useState } from 'react';
import CalendarComponent from './relogio';
import BotaoCor from './color';

export default function CreateBar() {
    const [text, setText] = useState('');
    const [altura, setAltura] = useState(40);
    
    function saveTask() {

    }

    function pularTexto() {
        if (setText < 36) {
            setAltura(80);
        } else {
            setAltura(40);
        }
    }

    console.log(text);

    return (
    <View>
        <View>
            <Text style={styles.titulo}> Adicionar Tarefa</Text>

            <TextInput
                style={styles.digitar}
                placeholder="Nome"
                placeholderTextColor="#808080"


            />
            

            


            <TextInput
                style={[styles.descricao, { height: altura }]}
                placeholder="Descrição"
                placeholderTextColor="#808080"
                multiline={true}
            />

            

            <CalendarComponent style={styles.relogio}/>


            

        </View>

        <View>

            
        
        </View>

    </View>

        
    )
}

const styles = StyleSheet.create({
    digitar: {
        backgroundColor: 'white',
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        borderWidth: 1,
    },

    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'left',
        margin: 10,
    },

    descricao: {
        backgroundColor: 'white',
        borderRadius: 4,
        paddingBottom: 4,
        paddingLeft: 1,
        borderWidth: 1,



    },

    botao: {
        backgroundColor: 'white',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 4,
        borderWidth: 1,
    },

    
})
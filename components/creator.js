import { StyleSheet, View, Text, TextInput, Button, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { Calendar } from 'react-native-calendars';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function CreateBar({navigation}) {


    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    
    const handleDayPress = (day) => {
        setSelectedDate(day.dateString);
    };

        
   
    
    


    return (
        <View >
            <View style={styles.grade} >
                <Text style={styles.titulo}> Adicionar Tarefa</Text>

                <TextInput
                    style={styles.digitar}
                    placeholder="Nome"
                    placeholderTextColor="#808080"
                    onChangeText={setNome}
                    value={nome}
                />



                <TextInput
                    style={styles.descricao}
                    placeholder="Descrição"
                    placeholderTextColor="#808080"
                    multiline={true}
                    onChangeText={setDescricao}
                    value={descricao}
                />



                <View style={styles.container}>
                    <Calendar
                        onDayPress={handleDayPress}
                        markedDates={{
                            [selectedDate]: { selected: true, marked: true, selectedColor: 'red', color: 'blue' },
                        }}
                        value={setSelectedDate}
                    />
                </View>


                <View style={styles.botao}>
                    <TouchableOpacity style={styles.botton}>
                        <Image source={require('../src/images/vazio.png')} style={{ width: 20, height: 20 }} />
                    </TouchableOpacity>
                </View>


            </View>


        </View>


    )
}

const styles = StyleSheet.create({

    grade: {
        backgroundColor: 'lightblue',
        borderRadius: 7,
        padding: 20,
        borderWidth: 3,
    },


    digitar: {
        backgroundColor: 'white',
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        borderWidth: 1,
        padding: 10,
    },

    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        margin: 10,
        padding: 10,
    },

    descricao: {
        backgroundColor: 'white',
        borderRadius: 4,
        padding: 10,
        borderWidth: 1,

    },

    botao: {
        backgroundColor: 'white',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 8,
        borderWidth: 1,
    },

    relogio: {
        backgroundColor: '',
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,

    },

    container: {
        flex: 1,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        borderWidth: 1,
        borderRadius: 2,

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


})
import {SafeAreaView, StyleSheet, TextInput, Alert, TouchableOpacity, onPress, Text } from 'react-native';
import {React, useState} from 'react';


const Speakscreen = () => {
    function sendMessage() {
        Alert.alert("메시지를 보냈습니다!")
        setMsg("")
    }
    const [msg, setMsg] = useState("")

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>음성</Text>
            <TextInput style={styles.box} onChangeText={(msg) => setMsg(msg)} value={msg}></TextInput>
            <TouchableOpacity
                style={styles.button}
                onPress={sendMessage}
            >
                <Text style={styles.buttonText}>음성 보내기</Text>
            </TouchableOpacity>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor : 'white',
    },
    text : {
        marginTop : 30,
        marginLeft : 20,
        fontSize: 30,
        fontWeight: 'bold',

    },
    box:{
        borderWidth: 2,
        padding: 130,
        borderRadius: 15,
        marginTop: 30,
        borderStyle: 'solid',
        borderColor: 'lightgray',
        fontSize: 15,
        width : 350,
        marginLeft : 20,
    },

    button: {
        width : 350,
        alignItems: "center",
        padding: 13,
        borderRadius: 10,
        marginTop: 25,
        marginLeft : 20,
        backgroundColor: '#7198FF',
    },

    buttonText: {
        fontWeight: 'bold',
        fontSize: 15,
        letterSpacing: 0.5,
        color: 'white'
    },


});

export default Speakscreen;

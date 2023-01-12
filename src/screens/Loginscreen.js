import { Image, Button, SafeAreaView, StyleSheet, TextInput, View, Alert, TouchableOpacity, onPress, Text, Dimensions } from 'react-native';
import React, { useState } from 'react';
import axios from "axios";


function Loginscreen({navigation}) {

    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

    function login() {
        if(email.trim() === ""){
            Alert.alert("이메일을 입력하세요!")
        }
        else if(password.trim() === ""){
            Alert.alert("비밀번호를 입력하세요!")
        } else {
            axios.post("http://10.150.151.211:8080/login",
                {
                    email,
                    password,
                }
            ).then(function(resp)
                {
                    if(resp.data === true) {
                        setEmail("")
                        setPassword("")
                        Alert.alert("로그인 성공!")

                    }
                }
            ).catch(function(err)
            {console.log(`Error Message: ${err}`)
            })
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.card}>

                <Image style={styles.img} source={require('../images/logo.png')}/>

                <TextInput style={styles.input} placeholder="이메일을 입력하세요" onChangeText={(email) => setEmail(email)} value={email}/>
                <TextInput style={styles.input} placeholder="비밀번호를 입력하세요" onChangeText={(password) => setPassword(password)} value={password}/>

                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate("Main")}
                    >
                        <Text style={styles.buttonText}>로그인</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate("Signup")}
                    >
                        <Text style={styles.buttonText}>회원가입</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7198FF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    img: {
        marginBottom: 50,
    },

    button: {
        alignItems: "center",
        backgroundColor: "white",
        width: 140,
        padding: 10,
        borderRadius: 10,
        margin: 9,
        marginTop: 50,

    },

    buttonText: {
        fontWeight: 'bold',
        fontSize: 15,
        letterSpacing: 0.5,
        color: '#7198FF'
    },

    input: {
        borderRadius: 10,
        backgroundColor: 'white',
        fontSize: 18,
        padding: 10,
        width: 300,
        marginBottom: 20,
    },

    card: {
        justifyContent: 'center',
        alignItems: 'center',

    }
});

export default Loginscreen;

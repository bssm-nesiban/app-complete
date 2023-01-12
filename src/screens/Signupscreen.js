import React from 'react';
import {TouchableOpacity, onPress, SafeAreaView, StyleSheet, TextInput, View, Text} from 'react-native';

function Signupscreen({navigation}) {
    return (
        <SafeAreaView style={styles.container}>
            <TextInput style={styles.input} placeholder="이메일을 입력하세요" />
            <TextInput style={styles.input} placeholder="닉네임을 입력하세요" />
            <TextInput style={styles.input} placeholder="비밀번호를 입력하세요" />
            <TextInput style={styles.input} placeholder="비밀번호 확인" />
            <TouchableOpacity
                style={styles.signup}
                onPress={() => navigation.navigate("Login")}
            >
                <Text style={styles.buttonText}>회원가입</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 40,
    },

    signup: {
        width: 320,
        borderRadius: 10,
        backgroundColor: '#7198FF',
        fontSize: 18,
        padding: 15,
    },

    buttonText: {
        fontWeight: 'bold',
        fontSize: 15,
        letterSpacing: 0.5,
        color: 'white',
        textAlign: 'center'

    },


    input: {
        borderBottomColor: '#bbb',
        borderBottomWidth: 1,
        fontSize: 17,
        marginBottom: 55,
        paddingBottom: 5,
        width : 320,
    },
});

export default Signupscreen;

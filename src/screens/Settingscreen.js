import { Image, View, SafeAreaView, StyleSheet, TextInput, Alert, TouchableOpacity, onPress, Text, useWindowDimensions } from 'react-native';
import { React, useState } from 'react';


function Settingscreen({navigation}) {
    return (
        <View>
            <Image
                source={require('../images/noprofile.png')}
                style={styles.profile}
            />
            <View style={styles.person}>
                <Text style={styles.name}>노유지</Text>
                <Text style={styles.email}>test1234@gmail.com</Text>
                <Text style={styles.important}>정보 변경</Text>
            </View>


            <View style={{paddingHorizontal: 47, marginTop: 60,}}>
                <View style={styles.box}>
                    <Text style={styles.buttonname}>노션 정보 관리</Text>
                </View>
                <View style={styles.box}>
                    <Text style={styles.buttonname}>계정관리</Text>
                </View>
                <View style={styles.box}>
                    <Text style={styles.buttonname}>알림</Text>
                </View>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text style={styles.logout}>로그아웃</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    profile : {
        marginTop : 130,
        marginLeft : 47,
    },

    logout : {
        color : 'black',
        fontSize : 15,
        marginLeft : 170,
    },

    person : {
        marginTop: -110,

    },

    name : {
        fontWeight : 'bold',
        fontSize : 30,
        marginLeft : 210,

    },

    email : {
        marginTop: 5,
        marginLeft: 210,
        fontSize : 12,

    },
    important : {
        marginLeft: 210,
        marginTop: 10,
        color: 'gray',
        fontSize: 12,
    },

    buttonname : {
        textAlign: 'center',
        color: 'white',
    },

    box : {
        backgroundColor: '#7198FF',
        marginBottom: 30,
        padding: 20,
        borderRadius: 10,
    },



});

export default Settingscreen;

import {Image, View, SafeAreaView, StyleSheet, TextInput, Alert, TouchableOpacity, onPress, Text, useWindowDimensions } from 'react-native';
import {React, useState} from 'react';


function Callscreen({navigation}) {

    const {width} = useWindowDimensions()
    return (
        <SafeAreaView style={styles.container}>
            <View style={{paddingHorizontal: 30}}>
                <Text style={styles.text}>노인순</Text>
            </View>

            <View style={styles.box}><Image style={styles.icon} source={require('../images/phone.png')}/><Text style={styles.iconText}>전화하기</Text></View>

            <View style={{flexDirection: 'row', flexWrap: 'wrap', marginBottom: 25, marginLeft: 30}}>
                <View style={[styles.box1, {width: width/2-16-32, marginRight: 32}]}><Text style={styles.imformation}>복용</Text><Text style={styles.imformation1}>아침, 점심, 저녁 알약 3알씩</Text><Image style={styles.pencil} source={require('../images/pencil.png')}/></View>
                <View style={[styles.box1, {width: width/2-16-32}]}><Text style={styles.imformation}>전화 상담</Text><Text style={styles.imformation1}>2주에 한번씩</Text><Image style={styles.pencil} source={require('../images/pencil.png')}/></View>
            </View>
            <View style={{flexDirection: 'row', flexWrap: 'wrap', marginLeft: 30}}>
                <View style={[styles.box1, {width: width/2-16-30, marginRight: 32}]}><Text style={styles.imformation}>영상통화</Text><Text style={styles.imformation1}>1주에 두번씩</Text><Image style={styles.pencil} source={require('../images/pencil.png')}/></View>
                <View style={[styles.box1, {width: width/2-16-30}]}><Text style={styles.imformation}>식사 상담</Text><Text style={styles.imformation1}>한달에 한번씩</Text><Image style={styles.pencil} source={require('../images/pencil.png')}/></View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container : {
        justifyContent: 'center',
        marginBottom: 70,
        paddingHorizontal: 30,
        flex : 1,
    },
    text : {
        fontSize: 40,
        fontWeight: 'bold',
    },
    box:{
        borderWidth: 2,
        padding: 15,
        borderRadius: 15,
        marginTop: 10,
        borderStyle: 'solid',
        borderColor: 'lightgray',
        marginBottom: 25,
        width: 330,
        marginLeft: 30,
    },

    box1: {
        backgroundColor: '#7198FF',
        paddingBottom: 10,
        borderRadius: 15,
        padding: 15,

    },

    imformation : {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',

    },

    imformation1 : {
        fontSize: 18,
        color: 'white',
        marginTop: 10,
    },

    icon : {
        marginLeft: 130,
        marginBottom: 10,
        marginTop: 5,
    },

    iconText : {
        marginLeft: 120,
        color: 'gray',
    },

    pencil : {
        marginLeft: 100,
        marginTop: 70,
    }

});

export default Callscreen;

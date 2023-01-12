import {StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert} from 'react-native';
import {useEffect, useState} from "react";

export default function Sleepscreen() {
    function sendMessage() {
        Alert.alert(msg)
        setMsg("")
    }

    const [time,setTime]=useState(new Date());

    useEffect(()=>{
        const id=setInterval(()=>{
            setTime(new Date());
        },1000);
        return ()=>clearInterval(id)
    },[])

    const [msg, setMsg] = useState("5분 뒤에 취침/기상하세요");
    return (
        <View style={styles.background}>
            <View style={styles.sleep}>
                <Image style={styles.ring} source={require('../images/ring.png')}/>
                <TextInput
                    style={styles.title}
                    value={msg}
                    onChangeText={(msg) => setMsg(msg)}
                />
            </View>
            <TouchableOpacity onPress={sendMessage}>
                <Text style={styles.change}>변경 완료</Text>
            </TouchableOpacity>

            <View style={styles.clock}>
                <View style={styles.clocktwo}>
                    <Text style={[styles.time]}>
                        {time.toLocaleTimeString('en-US')}
                    </Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    clock : {
        borderRadius : 700,
        width : 317,
        height : 317,
        marginLeft : 40,
        marginTop : 150,
        backgroundColor : '#7198FF',
    },

    time : {
        marginTop : 110,
        marginLeft : 34,
        fontSize : 39,
    },

    clocktwo : {
        position : 'absolute',
        borderRadius : 700,
        width : 267,
        height : 267,
        marginLeft : 25,
        marginTop : 26,
        backgroundColor : 'white',
    },

    sleep : {
        width : 331,
        height : 50,
        borderRadius : 10,
        backgroundColor : '#7198FF',
        marginTop : 75,
        marginLeft : 30,
    },

    wakeup : {
        width : 331,
        height : 50,
        borderRadius : 10,
        backgroundColor : '#7198FF',
        marginTop : 20,
        marginLeft : 30,
    },

    ring : {
        marginTop : 10,
        marginLeft : 15,
    },

    title : {
        color : 'white',
        fontWeight : 'bold',
        fontSize : 18,
        position : 'absolute',
        justifyContent : 'center',
        padding : 15,
        marginLeft : 70,
    },

    background : {
        flex:1,
        backgroundColor : 'white',
    },

    change : {
        marginTop : 7,
        marginLeft : 300,
        color : '#9B9B9B',
        fontSize : 15,
    }
});

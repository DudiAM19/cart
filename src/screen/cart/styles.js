import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
// import {RFValue} from 'react-native-responsive-fontsize';

const {width} = Dimensions.get('window');

export default StyleSheet.create({
    content: {
        flexDirection: "row",
        backgroundColor: 'white',
        padding: 20,
        // justifyContent: 'center',
        alignItems: 'center',
        marginVertical: width * 0.015,
        marginHorizontal: width * 0.02,
        borderRadius: 5,
    },
    boxprice: {
        backgroundColor: '#55bd35',
        padding: 5,
        borderRadius: 5,
        marginRight: width * 0.02
    },
    textprice: {
        color: 'white',
        marginHorizontal: 10
    },
    img: {
        width: 60, 
        height: 60,
        borderRadius: 5,
        marginRight: width * 0.04
    },
    boxdecr: {
        backgroundColor: '#f0566d', 
        width: width * 0.07, 
        height: width * 0.07, 
        justifyContent: 'center', 
        alignItems: 'center', 
        borderRadius: 5
    },
    boxcount: {
        backgroundColor: '#56e3f0', 
        width: width * 0.07, 
        height: width * 0.07, 
        justifyContent: 'center', 
        alignItems: 'center', 
        borderRadius: 5
    },
    boxtrash: {
        backgroundColor: '#f0566d', 
        width: width * 0.07, 
        height: width * 0.07, 
        justifyContent: 'center', 
        alignItems: 'center', 
        borderRadius: 5, 
        marginHorizontal: width * 0.03
    },
    countdummy: {
        backgroundColor: '#55bd35', 
        width: width * 0.07, 
        height: width * 0.07, 
        justifyContent: 'center', 
        alignItems: 'center', 
        borderRadius: 5,
    },
    btnleft: {
        backgroundColor: '#f0566d', 
        justifyContent: 'center',
        alignItems: 'center',
        height: width * 0.1,
        width: width * 0.2,
        borderRadius: 10
    },
    btnright: {
        backgroundColor: '#56e3f0', 
        justifyContent: 'center',
        alignItems: 'center',
        height: width * 0.1,
        width: width * 0.4,
        flex: 1,
        marginLeft: width * 0.1,
        borderRadius: 10
    }
})
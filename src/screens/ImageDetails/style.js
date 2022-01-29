import React from 'react';
import { StyleSheet } from 'react-native';
import constants from '../../assets/constants';

const ImageDetailsStyle = StyleSheet.create({
    CardContainer: {
        display: 'flex',
        padding: 15,
        borderRadius: 10,
        marginBottom: 20,
        backgroundColor: 'rgba(255,255,255,.7)',
    },
    Container: {
        flex: 1,
    },
    Image: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    Input: {
        margin: 12,
        borderWidth: 0.5,
        borderColor: 'transparent',
        borderRadius: 15,
        padding: 15,
        backgroundColor: 'white',
        width: 250,
        marginBottom: 20
    },
    ButtonView: {
        padding: 10,
    }
});

export { ImageDetailsStyle }
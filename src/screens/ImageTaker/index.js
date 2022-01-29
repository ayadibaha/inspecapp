import React, { useState, useEffect, useRef } from 'react';
import { View, Button, TouchableOpacity, ToastAndroid, Text, Image, Modal } from 'react-native';
import { IconButton } from 'react-native-paper';
import { Camera } from 'expo-camera';
import { ImageTakerStyle } from './style';

const ImageTakerDetails = ({ navigation }) => {
    const [image, setImage] = useState(null);
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    let camera = useRef(null);
    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);
    const snap = async () => {
        if (!camera) {
            ToastAndroid.show("Can't access the camera", ToastAndroid.SHORT);
            return;
        };
        const photo = await camera.takePictureAsync();
        if (photo.uri) {
            setImage(photo.uri)
        } else {
            ToastAndroid.show("Photo couldn't be taken", ToastAndroid.SHORT);
        }
    }
    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }
    const CameraView = () => (
        <Camera style={ImageTakerStyle.camera} type={type} ref={r => { camera = r }}>
            <View style={ImageTakerStyle.buttonContainer}>
                <IconButton
                    style={ImageTakerStyle.button}
                    icon='sync-circle'
                    color='white'
                    size={50}
                    onPress={() => {
                        setType(
                            type === Camera.Constants.Type.back
                                ? Camera.Constants.Type.front
                                : Camera.Constants.Type.back
                        );
                    }} />
                <IconButton
                    style={ImageTakerStyle.button}
                    icon='camera'
                    color='white'
                    size={50}
                    onPress={snap}
                />
            </View>
        </Camera>
    )
    const SavingView = () => (
        <Modal
            animationType="slide"
            transparent={true}
            visible={!!image}
            onRequestClose={() => {
                setImage(null);
            }}
        >
            <View style={ImageTakerStyle.centeredView}>
                <Image source={{ uri: image }} style={{ width: 250, height: 250, marginBottom: 20 }} />
                <View style={{ display: 'flex', justifyContent: 'space-evenly', flexDirection: 'row' }}>
                    <IconButton
                        style={ImageTakerStyle.button}
                        icon='image-remove'
                        color='black'
                        size={50}
                        onPress={() => setImage(null)} />
                    <IconButton
                        style={ImageTakerStyle.button}
                        icon='image-plus'
                        color='black'
                        size={50}
                        onPress={() => setImage(null)} />
                </View>
            </View>
        </Modal>
    )
    return (
        <View style={ImageTakerStyle.container}>
            {!image ? <CameraView /> : <SavingView />}
        </View>
    );
}

export default ImageTakerDetails;

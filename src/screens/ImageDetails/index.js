import React, { useState } from 'react';
import { View, ImageBackground, TextInput, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { ImageDetailsStyle } from './style';
import DismissKeyboardView from '../../components/DissmissKeybord';

const ImageDetails = ({ navigation }) => {
    const [details, setDetails] = useState({
        commentaire: '',
        priorite: 1,
        responsable: 'Maintenance',
    })
    const updateDetails = (name, value) => {
        const detailsCopy = { ...details };
        details[name] = value;
        setDetails(detailsCopy);
    }
    const next = () => {
        navigation.navigate('ZoneDetails')
    }
    return (
        <View style={ImageDetailsStyle.Container}>
            <ImageBackground source={require('../../assets/images/bg.png')} resizeMode="cover" style={ImageDetailsStyle.Image}>
                <DismissKeyboardView>
                    <View style={ImageDetailsStyle.CardContainer}>
                        <TextInput
                            multiline={true}
                            numberOfLines={5}
                            style={ImageDetailsStyle.Input}
                            onChangeText={text => updateDetails('commentaire', text)}
                            defaultValue={details.commentaire}
                            placeholder="Commentaire"
                            keyboardType="ascii-capable"
                        />
                        <Picker
                            selectedValue={details.priorite}
                            style={ImageDetailsStyle.Input}
                            onValueChange={(itemValue, itemIndex) => updateDetails('priorite', itemValue)}
                        >
                            <Picker.Item label="Urgent" value={1} />
                            <Picker.Item label="Peu Urgent" value={2} />
                            <Picker.Item label="Pas Urgent" value={3} />
                        </Picker>
                        <Picker
                            selectedValue={details.responsable}
                            style={ImageDetailsStyle.Input}
                            onValueChange={(itemValue, itemIndex) => updateDetails('responsable', itemValue)}
                        >
                            <Picker.Item label="Maintenance" value="Maintenance" />
                            <Picker.Item label="Hygiène" value="Hygiene" />
                            <Picker.Item label="Responsable de la zone" value="ZoneResp" />
                        </Picker>
                    </View>
                    <Button
                        style={ImageDetailsStyle.Button}
                        onPress={next}
                        title='Suivant' />
                </DismissKeyboardView>
            </ImageBackground>
        </View>
    )
}

export default ImageDetails;
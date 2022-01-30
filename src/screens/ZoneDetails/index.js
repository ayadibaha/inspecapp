import React, { useState } from 'react';
import { Text, Picker, View, ImageBackground, TextInput, Button } from 'react-native';
import DatePicker from 'react-native-date-picker'
import { ZoneDetailsStyle } from './style';

const ZoneDetails = ({ navigation }) => {
    const [zone, setZone] = useState('Zone A');
    const next = () => {
        navigation.navigate('ImageTaker', { zone })
    }
    return (
        <View style={ZoneDetailsStyle.Container}>
            <ImageBackground source={require('../../assets/images/bg.png')} resizeMode="cover" style={ZoneDetailsStyle.Image}>
                <View style={ZoneDetailsStyle.CardContainer}>
                    <Picker
                        selectedValue={zone}
                        style={ZoneDetailsStyle.Input}
                        onValueChange={(itemValue, itemIndex) => setZone(itemValue)}
                    >
                        <Picker.Item label="Zone A" value="Zone A" />
                        <Picker.Item label="Zone B" value="Zone B" />
                        <Picker.Item label="Zone C" value="Zone C" />
                    </Picker>
                </View>
                <Button
                    style={ZoneDetailsStyle.Button}
                    onPress={next}
                    title='Suivant' />
            </ImageBackground>
        </View>
    )
}

export default ZoneDetails;
import React, { useState } from 'react';
import { Text, Picker, View, ImageBackground, TextInput, Button } from 'react-native';
import DatePicker from 'react-native-date-picker'
import { InspectDetailsStyle } from './style';
import DismissKeyboardView from '../../components/DissmissKeybord';

const InspectorDetails = ({ navigation }) => {
    const [open, setOpen] = useState(false)
    const [details, setDetails] = useState({
        premierInspecteur: '',
        secondInspecteur: '',
        dateInspection: '',
        semaine: 0,
        station: 'Guipavas'
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
        <View style={InspectDetailsStyle.Container}>
            <ImageBackground source={require('../../assets/images/bg.png')} resizeMode="cover" style={InspectDetailsStyle.Image}>
                <DismissKeyboardView>
                    <View style={InspectDetailsStyle.CardContainer}>
                        <TextInput
                            style={InspectDetailsStyle.Input}
                            onChangeText={text => updateDetails('premierInspecteur', text)}
                            defaultValue={details.premierInspecteur}
                            placeholder="Inspecteur 1"
                            keyboardType="ascii-capable"
                        />
                        <TextInput
                            style={InspectDetailsStyle.Input}
                            onChangeText={text => updateDetails('secondInspecteur', text)}
                            defaultValue={details.secondInspecteur}
                            placeholder="Inspecteur 2"
                            keyboardType="ascii-capable"
                        />
                        <View
                            style={InspectDetailsStyle.ButtonView}>
                            <Button
                                color={'#0e0e0e'}
                                title={details.dateInspection !== '' ? details.dateInspection : "Date d'inspection"}
                                onPress={() => setOpen(true)} />

                            <DatePicker
                                modal
                                androidVariant='nativeAndroid'
                                open={open}
                                date={new Date()}
                                mode={'date'}
                                onConfirm={(date) => {
                                    setOpen(false)
                                    updateDetails('dateInspection', date)
                                }}
                                onCancel={() => {
                                    setOpen(false)
                                }}
                            />
                        </View>
                        <TextInput
                            style={InspectDetailsStyle.Input}
                            onChangeText={text => updateDetails('semaine', parseInt(text, 10))}
                            defaultValue={details.semaine + ''}
                            placeholder="Semaine"
                            keyboardType="number-pad"
                        />
                        <Picker
                            selectedValue={details.station}
                            style={InspectDetailsStyle.Input}
                            onValueChange={(itemValue, itemIndex) => updateDetails('station', itemValue)}
                        >
                            <Picker.Item label="Guipavas" value="Guipavas" />
                            <Picker.Item label="Plougastel" value="Plougastel" />
                        </Picker>
                    </View>
                    <Button
                        style={InspectDetailsStyle.Button}
                        onPress={next}
                        title='Suivant' />
                </DismissKeyboardView>
            </ImageBackground>
        </View>
    )
}

export default InspectorDetails;
import React, { useState } from 'react';
import { Text, Picker, View, ImageBackground, TextInput, Button } from 'react-native';
import DatePicker from 'react-native-date-picker'
import { InspectDetailsStyle } from './style';
import DismissKeyboardView from '../../components/DissmissKeybord';
import { useStoreState, useStoreActions } from 'easy-peasy';

const InspectorDetails = ({ navigation }) => {
    const [open, setOpen] = useState(false)
    const updateDetails = useStoreActions((actions) => actions.updateState)
    const firstInspector = useStoreState((state) => state.firstInspector)
    const secondInspector = useStoreState((state) => state.secondInspector)
    const inspectionDate = useStoreState((state) => state.inspectionDate)
    const weekNumber = useStoreState((state) => state.weekNumber)
    const station = useStoreState((state) => state.station)
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
                            onChangeText={text => updateDetails({ key: 'firstInspector', value: text })}
                            defaultValue={firstInspector}
                            placeholder="Inspecteur 1"
                            keyboardType="ascii-capable"
                        />
                        <TextInput
                            style={InspectDetailsStyle.Input}
                            onChangeText={text => updateDetails({ key: 'secondInspector', value: text })}
                            defaultValue={secondInspector}
                            placeholder="Inspecteur 2"
                            keyboardType="ascii-capable"
                        />
                        <View
                            style={InspectDetailsStyle.ButtonView}>
                            <Button
                                color={'#0e0e0e'}
                                title={inspectionDate !== '' ? inspectionDate.toISOString() : "Date d'inspection"}
                                onPress={() => setOpen(true)} />

                            <DatePicker
                                modal
                                androidVariant='nativeAndroid'
                                open={open}
                                date={inspectionDate}
                                mode={'date'}
                                onConfirm={(date) => {
                                    setOpen(false)
                                    updateDetails({ key: 'inspectionDate', value: date })
                                }}
                                onCancel={() => {
                                    setOpen(false)
                                }}
                            />
                        </View>
                        <TextInput
                            style={InspectDetailsStyle.Input}
                            onChangeText={text => updateDetails({ key: 'weekNumber', value: parseInt(text, 10) })}
                            defaultValue={weekNumber + ''}
                            placeholder="Semaine"
                            keyboardType="number-pad"
                        />
                        <Picker
                            selectedValue={station}
                            style={InspectDetailsStyle.Input}
                            onValueChange={(itemValue, itemIndex) => updateDetails({ key: 'station', value: itemValue })}
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
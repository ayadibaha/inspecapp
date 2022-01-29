import React, { useState } from 'react';
import { Text, Picker, View, ImageBackground, Button } from 'react-native';
import { HomepageStyle } from './style';

const Home = ({ navigation }) => {
    const [selectedValue, setSelectedValue] = useState("infraFoodDefense");
    const next = () => {
        navigation.navigate('InspectorDetails')
    }
    return (
        <View style={HomepageStyle.Container}>
            <ImageBackground source={require('../../assets/images/bg.png')} resizeMode="cover" style={HomepageStyle.Image}>
                <Text style={HomepageStyle.Logo}>Inspec'App</Text>
                <View style={HomepageStyle.CardContainer}>
                    <Text style={HomepageStyle.Label}>Type d'inspection</Text>
                    <Picker
                        selectedValue={selectedValue}
                        style={{ height: 100, width: 250 }}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    >
                        <Picker.Item label="Infrastructure et food défense" value="infraFoodDefense" />
                        <Picker.Item label="Hygiène et sécurité" value="hygSec" />
                        <Picker.Item label="Bris de verre et corps étrangers" value="brisVerre" />
                    </Picker>
                </View>
                <Button
                    style={HomepageStyle.Button}
                    onPress={next}
                    title='Suivant' />
            </ImageBackground>
        </View>
    )
}

export default Home;
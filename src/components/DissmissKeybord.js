import React from 'react';
import { Keyboard, View, TouchableWithoutFeedback } from 'react-native';

const DismissKeyboardHOC = (Comp) => {
    return ({ children, ...props }) => (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <Comp {...props}>
                {children}
            </Comp>
        </TouchableWithoutFeedback>
    );
};

const DismissKeyboard = DismissKeyboardHOC(View);

export default DismissKeyboard;
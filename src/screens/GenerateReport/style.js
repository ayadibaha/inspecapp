import React from 'react';
import { StyleSheet } from 'react-native';
import constants from '../../assets/constants';

const GenerateReportStyle = StyleSheet.create({

    RecentNewsContainer: {
        padding: 10,
        height: '100%',
        backgroundColor: constants.LIGHT_THEME_BG,
    },

    RecentNewsTitle: {
        color: constants.LIGHT_THEME_TEXT_COLOR_DARK,
        fontSize: 24,
        fontFamily: constants.PRIMARY_FONT_BOLD,
        marginBottom: 20,
        marginTop: 30,
        padding: 5,
    },

    CardContainer: {
        display: 'flex',
        padding: 15,
        borderRadius: 10,
        marginBottom: 20,
        backgroundColor: 'rgba(255,255,255,.7)',
    },

    CardImage: {
        height: 120,
        width: 120,
        borderRadius: 10,
    },

    CardContainerRight: {
        display: 'flex',
        paddingLeft: 20,
        paddingTop: 20,
        flexShrink: 1,
    },

    CardTag: {
        marginBottom: 4,
        fontSize: 16,
        color: constants.LIGHT_THEME_PRIMARY_COLOR,
        fontFamily: constants.PRIMARY_FONT_MEDIUM
    },

    CardHeadline: {
        fontSize: 14,
        fontFamily: constants.PRIMARY_FONT_MEDIUM,
        lineHeight: 22,
        color: constants.LIGHT_THEME_TEXT_COLOR_DARK,
    },

    AppTitle: {
        color: 'black',
        fontFamily: constants.PRIMARY_FONT_BLACK,
        fontSize: 18,
        padding: 1,
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
    Logo: {
        fontFamily: 'moontime',
        fontSize: 50,
        color: 'white',
        marginBottom: 50
    },
    Label: {
        color: 'black',
        fontSize: 20
    }
});

export { GenerateReportStyle }
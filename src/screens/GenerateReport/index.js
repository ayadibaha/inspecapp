import React from 'react';
import { View, ImageBackground, Button } from 'react-native';
import { useStoreState, useStoreActions } from 'easy-peasy';
import { GenerateReportStyle } from './style';
import XLSX from 'xlsx';
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';

const GenerateReport = ({ navigation }) => {
    const resetStore = useStoreActions(actions => actions.reset);
    const type = useStoreState((state) => state.type)
    const firstInspector = useStoreState((state) => state.firstInspector)
    const secondInspector = useStoreState((state) => state.secondInspector)
    const inspectionDate = useStoreState((state) => state.inspectionDate)
    const weekNumber = useStoreState((state) => state.weekNumber)
    const station = useStoreState((state) => state.station)
    const inspections = useStoreState((state) => state.inspections)
    const readImage = () => new Promise((resolve, reject) => {
        let options = { encoding: FileSystem.EncodingTypes.Base64 };
        FileSystem.readAsStringAsync(uri, options).then(data => {
            const base64 = 'data:image/jpg;base64' + data;
            resolve(base64); // are you sure you want to resolve the data and not the base64 string? 
        }).catch(err => {
            console.log("​getFile -> err", err);
            reject(err);
        });
    })
    const generate = async () => {
        // const insp = inspections.map(async (inspection) => {
        //     const image = await readImage(inspection.imageUrl)
        //     return {
        //         ...inspection,
        //         imageUrl: image
        //     }
        // })
        const newData = [
            ['Type', 'Inspecteur 1', 'Inspecteur 2', 'Date d\'inspection', 'Semaine', 'Station'],
            [type, firstInspector, secondInspector, inspectionDate, weekNumber, station],
            ['Zone', 'Image', 'Commentaire', 'Priorité', 'Responsable', 'Action décidé par responsable', 'Date de contrôle', 'Statut'],
        ]
        inspections.forEach((inspection) => {
            const { zone, imageUrl, comment, priority, inCharge } = inspection;
            newData.push([zone, { type: 'file', value: imageUrl }, comment, priority, inCharge, '', '', '']);
        })
        const ws = XLSX.utils.aoa_to_sheet(newData);
        const wb = XLSX.utils.book_new();
        const sheetName = `Inspection-${inspectionDate.toISOString().split('T')[0]}`
        XLSX.utils.book_append_sheet(wb, ws, sheetName);
        const wbout = XLSX.write(wb, {
            type: 'base64',
            bookType: "xlsx"
        });
        const uri = FileSystem.cacheDirectory + sheetName + '.xlsx';
        await FileSystem.writeAsStringAsync(uri, wbout, {
            encoding: FileSystem.EncodingType.Base64
        });

        await Sharing.shareAsync(uri, {
            mimeType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
            dialogTitle: 'Generer Rapport',
            UTI: 'com.microsoft.excel.xlsx'
        });
    }
    const next = () => {
        generate().then((result) => {
            resetStore();
            navigation.navigate('Home')
        })
    }
    return (
        <View style={GenerateReportStyle.Container}>
            <ImageBackground source={require('../../assets/images/bg.png')} resizeMode="cover" style={GenerateReportStyle.Image}>
                <Button
                    style={GenerateReportStyle.Button}
                    onPress={next}
                    title='Télécharger le Rapport' />
            </ImageBackground>
        </View>
    )
}

export default GenerateReport;
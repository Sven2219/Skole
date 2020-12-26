import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const Symsptoms = (): JSX.Element => {
    return (<View>
        <Text style={styles.titleText}>
            Most common symptoms:
        </Text>
        <Text style={styles.symptoms}>
            FEVER{'\n'}
            DRY COUGH{'\n'}
            TIREDNESS{'\n'}
        </Text>
        <Text style={styles.titleText}>
            Less common symptoms:
        </Text>
        <Text style={styles.symptoms}>
            ACHES AND PAINS{'\n'}
            SORE THROAT{'\n'}
            DIARRHOEA{'\n'}
            HEADACHE.{'\n'}
            LOSS OF TASTE OR SMELL{'\n'}
        </Text>
        <Text style={styles.titleText}>
            Serious symptoms:
        </Text>
        <Text style={styles.symptoms}>
            DIFFICULTY BREATHING OR SHORTNESS OF BREATH{'\n'}
            CHEST PAIN OR PRESSURE{'\n'}
            LOSS OF SPEACH OR MOVEMENT{'\n'}
        </Text>
    </View>)
}
const styles = StyleSheet.create({
    titleText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 25,
        marginLeft: 10
    },
    symptoms: {
        fontSize: 15,
        marginLeft: 30,
        marginTop: 20
    }
})
export default Symsptoms;
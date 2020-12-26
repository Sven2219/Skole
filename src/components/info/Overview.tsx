import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { IMAGE_SIZE } from '../../helpers/constants';



const Overivew = (): JSX.Element => {
    return (<View>
        <View style={styles.imageContainer}>
            <Image source={require('../../images/covidLogo.png')} style={styles.imageSize} />
        </View>
        <Text style={styles.textStyle}>
            Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus.
        </Text>
        <Text style={styles.textStyle}>
            The best way to prevent and slow down transmission is to be well informed about the COVID-19 virus, the disease it causes and how it spreads. Protect yourself and others from infection by washing your hands or using an alcohol based rub frequently and not touching your face.
        </Text>
    </View>)
}

const styles = StyleSheet.create({
    imageContainer: {
        alignItems: 'center',
        marginTop: 20
    },
    textStyle: {
        margin: 10,
        fontSize: 16
    },
    imageSize: {
        width: IMAGE_SIZE,
        height: IMAGE_SIZE
    }
})

export default Overivew;
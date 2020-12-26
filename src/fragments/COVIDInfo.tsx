import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import MenuItem from '../components/info/MenuItem';
import Overivew from '../components/info/Overview';
import Symptoms from '../components/info/Symptoms';
import { IMAGE_SIZE } from '../helpers/constants';
import { OVERIVEW, SYPMTOMS } from '../helpers/types';


const COVIDInfo = (): JSX.Element => {
    const [screenType, setScreenType] = useState<string>(OVERIVEW);
    const getScreen = (): JSX.Element => {
        if (screenType === OVERIVEW) {
            return <Overivew />
        }
        return <Symptoms />
    }

    return (
        <View style={styles.mainContainer}>
            <ScrollView contentContainerStyle={styles.scrollViewContainer}>
                <View style={styles.menuContainer}>
                    <MenuItem screenType={screenType} menuType={OVERIVEW} onPress={() => setScreenType(OVERIVEW)} />
                    <MenuItem screenType={screenType} menuType={SYPMTOMS} onPress={() => setScreenType(SYPMTOMS)} />
                </View>
                {getScreen()}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#fff',
        flex: 1
    },
    scrollViewContainer: {
        backgroundColor: '#fff'
    },
    imageContainer: {
        alignItems: 'center',
        top: 20
    },
    imageSize: {
        width: IMAGE_SIZE,
        height: IMAGE_SIZE
    },
    menuContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        top: 10
    },
})

export default COVIDInfo;
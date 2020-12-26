import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { DETAILS_CONTAINER_WIDTH, DETAILS_CONTAINER_HEIGHT } from '../../helpers/constants';
import { ICountryStatus } from '../../helpers/interfaces';

interface IProps {
    item: ICountryStatus;
}

const CountryDetails = ({ item }: IProps) => {
    return (
        <View style={styles.mainContainer}>
            <View style={[styles.detailsContainer, styles.shadow]}>
                <View style={styles.countryNameContainer}>
                    <Text style={styles.countryNameText}>{item.country}</Text>
                </View>
                <View>
                    <Text style={styles.cases}>Cases</Text>
                    <Text style={styles.cases}>{item.cases}</Text>
                </View>
                <View style={styles.deathContainer}>
                    <Text style={styles.death}>Deaths</Text>
                    <Text style={styles.death}>{item.deaths}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        alignItems: 'center'
    },
    countryNameContainer: {
        justifyContent: 'center',
        height: DETAILS_CONTAINER_HEIGHT,
        marginLeft: 10
    },
    detailsContainer: {
        width: DETAILS_CONTAINER_WIDTH,
        height: DETAILS_CONTAINER_HEIGHT,
        backgroundColor: '#fff',
        margin: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 10
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5
    },
    countryNameText: {
        fontSize: 18,
        letterSpacing: 1.5
    },
    deathContainer: {
        marginRight: 30
    },
    death: {
        color: '#b22222',
        textAlign: 'center'
    },
    cases: {
        color: '#483d8b',
        textAlign: 'center'
    }
})

export default React.memo(CountryDetails, (prevProps, currentProps) => {
    return prevProps.item == currentProps.item;
});
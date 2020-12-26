import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { ICountryStatus } from '../../helpers/interfaces';
import Bubble from './Bubble';

interface IProps {
    status: ICountryStatus
}

const CountryStatus = ({ status }: IProps): JSX.Element => {
    return (
        <ScrollView>
            <View style={styles.countryNameContainer}>
                <Text style={styles.countryName}>{status.country}</Text>
            </View>
            <View style={styles.statusContainer}>
                <Bubble data={status.todayDeaths} dataTitle={"Today deaths"} />
                <Bubble data={status.todayCases} dataTitle={"Today cases"} />
            </View>
            <View style={styles.statusContainer}>
                <Bubble data={status.active} dataTitle={"Active cases"} />
                <Bubble data={status.cases} dataTitle={"All cases"} />
            </View>
            <View style={styles.statusContainer}>
                <Bubble data={status.deaths} dataTitle={"Deaths"} />
                <Bubble data={status.recovered} dataTitle={"Recovered"} />
            </View>
            <View style={styles.statusContainer}>
                <Bubble data={status.casesPerOneMillion} dataTitle={"Case per one million"} />
                <Bubble data={status.deathsPerOneMillion} dataTitle={"Deaths per one million"} />
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    countryNameContainer: {
        marginLeft: 20
    },
    countryName: {
        fontSize: 24,
        marginTop: 20,
        fontWeight: 'bold'
    },
    statusContainer: {
        marginTop: 35,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    statusTitleText: {
        fontSize: 19,
    },
    statusText: {
        fontSize: 16,
        marginTop: 10
    }
})

export default React.memo(CountryStatus, (prevProps, currentProps) => {
    return prevProps.status == currentProps.status
})
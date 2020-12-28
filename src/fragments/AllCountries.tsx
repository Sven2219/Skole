import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import axios from 'axios';
import { ICountryStatus } from '../helpers/interfaces';
import CountryDetails from '../components/allCountries/CountryDetails';
const AllCountries = (): JSX.Element => {
    const [allCountries, setAllCountries] = useState<ICountryStatus[]>([]);
    useEffect(() => {
        getAllCountries();
    }, [])
    const getAllCountries = async (): Promise<void> => {
        try {
            const result = await axios.get('https://coronavirus-19-api.herokuapp.com/countries');
            setAllCountries(result.data);
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <View style={styles.mainContainer}>
            <FlatList
                windowSize={2}
                data={allCountries}
                keyExtractor={(_, index) => index.toString()}
                renderItem={({ item }: { item: ICountryStatus }) => <CountryDetails item={item}/>}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#fff'
    }
})


export default AllCountries;
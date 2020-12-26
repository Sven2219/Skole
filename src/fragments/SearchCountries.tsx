import axios from 'axios';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { ICON_SIZE, TEXT_INPUT_HEIGHT, TEXT_INPUT_WIDTH } from '../helpers/constants';
import { ICountryStatus } from '../helpers/interfaces';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CountryStatus from '../components/searchCountries/CountryStatus';

const SearchCountries = (): JSX.Element => {
    const [countryName, setCountryName] = useState<string>("");
    const [countryStatus, setCountryStatus] = useState<ICountryStatus>();

    const searchByCountryName = async (): Promise<void> => {
        try {
            console.log(countryName)
            if (countryName !== "") {
                console.log("nismo tu ")
                const result = await axios.get(`https://coronavirus-19-api.herokuapp.com/countries/${countryName}`);
                setCountryStatus(result.data);
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <View style={styles.mainContainer}>
            <View style={styles.textInputContainer}>
                <View style={[styles.textInput, styles.shadow]}>
                    <Ionicons
                        name="search-outline"
                        size={ICON_SIZE}
                        style={styles.iconPosition}
                        onPress={searchByCountryName}
                    />
                    <TextInput
                        onChangeText={(countryName: string) => setCountryName(countryName)}
                        placeholder="Croatia"
                    />
                </View>
            </View>
            {countryStatus && <CountryStatus status={countryStatus} />}
        </View>
    )
}
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#fff'
    },
    textInputContainer: {
        alignItems: 'center',
        marginTop: 20
    },
    textInput: {
        width: TEXT_INPUT_WIDTH,
        height: TEXT_INPUT_HEIGHT,
        borderWidth: 0.01,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    iconPosition: {
        marginLeft: 5
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 20,

        elevation: 3,
    }
})
export default SearchCountries;
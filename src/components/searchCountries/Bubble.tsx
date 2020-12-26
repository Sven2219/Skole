import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BUBBLE_HEIGHT, BUBBLE_WIDTH } from '../../helpers/constants';

interface IProps {
    dataTitle: string;
    data: number;
}

const Bubble = ({ data, dataTitle }: IProps) => {
    return (
        <View style={[styles.bubbleContainer,styles.shadow]}>
            <Text style={styles.dataStyle}>{data}</Text>
            <Text style={styles.dataTitleStyle}>{dataTitle}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    bubbleContainer: {
        width: BUBBLE_WIDTH,
        height: BUBBLE_HEIGHT,
        borderWidth: 0.01,
        margin: 7,
        borderRadius: BUBBLE_HEIGHT / 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#fff'
    },
    dataStyle: {
        fontSize: 18
    },
    dataTitleStyle: {
        color: '#696969'
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 2,
    }

})
export default Bubble;
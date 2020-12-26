import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { MENU_HEIGHT, MENU_WIDTH } from '../../helpers/constants';

interface IProps {
    screenType: string;
    onPress: () => void;
    menuType: string;
}

const MenuItem = ({ screenType, onPress, menuType }: IProps) => {
    const getColor = (): string => {
        if (screenType === menuType) {
            return "#2e8b57";
        }
        return "#000"
    }
    return (
        <View style={styles.menu}>
            <TouchableOpacity onPress={onPress}>
                <Text style={{ color: getColor() }}>{menuType}</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    menu: {
        borderWidth: 1,
        width: MENU_WIDTH,
        height: MENU_HEIGHT,
        marginTop: 20,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
export default MenuItem;
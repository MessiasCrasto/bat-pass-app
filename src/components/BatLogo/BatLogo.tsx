import React from 'react';
import { Image, Text, View } from 'react-native';

import { styles } from './BatLogoStyles';
import batlogo from '../../../assets/bat-logo.png'

export function BatLogo() {
    return (
        <View >
            <Text style={styles.titulo}>
                BAT PASS GENERATOR
            </Text>
            <Image style={styles.BatLogo} source={batlogo} />

        </View>
    );
}
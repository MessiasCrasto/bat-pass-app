import React from "react";
import { Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import styles from './Style'
import { BatLogo } from "../../components/BatLogo/BatLogo";
import { BatTextInput } from "../../components/BatTextInput/BatTextInput";
import { BatButton } from "../../components/BatButton/BatButton";


export default function Home() {
    return (
        <View style={styles.appcontainer}>
            <View style={styles.logocontainer}>
                <BatLogo />
            </View>
            <View style={styles.inputcontainer}>
                <BatButton/>
            </View>

            <StatusBar style="auto" />
        </View >
    )
}


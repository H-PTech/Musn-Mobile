import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import darkTheme from '../themes/darkTheme';

function SettingsScreen(): React.JSX.Element {
    return (
        <SafeAreaView style={[styles.container, { backgroundColor: darkTheme.backgroundColor }]}>
            <Text style={[styles.text, { color: darkTheme.textColor }]}>Settings Screen</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
    },
});

export default SettingsScreen;

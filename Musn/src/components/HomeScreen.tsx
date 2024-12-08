import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import NaverMapView, { Marker } from '@mj-studio/react-native-naver-map';
import darkTheme from '../themes/darkTheme';

function HomeScreen(): React.JSX.Element {
    return (
        <SafeAreaView style={[styles.container, { backgroundColor: darkTheme.backgroundColor }]}>
            {/* <NaverMapView
                style={styles.map}
                center={{
                    latitude: 37.5665, // 서울 시청 좌표
                    longitude: 126.9780,
                    zoom: 15,
                }}
            >
                <Marker
                    coordinate={{ latitude: 37.5665, longitude: 126.9780 }}
                    caption={{ text: "서울 시청" }}
                />
            </NaverMapView> */}
            <Text>Hello World!</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        flex: 1,
    },
});

export default HomeScreen;

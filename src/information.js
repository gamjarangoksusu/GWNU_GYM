import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Text from '../fuctions/GwnuText'
import { LoginConfigure, LoginButton } from '../fuctions/GoogleLogin'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { GwnuBeige, GwnuYellow, LightenColor } from '../fuctions/GwnuColor'

const styles = StyleSheet.create({
    rootView: {
        flex: 1,
        alignItems: "center",
    },
    infoView: {
        backgroundColor: GwnuBeige,
        borderRadius: 5,
        marginHorizontal: 30,
        marginVertical: 50,
        shadowColor: 'black', // IOS
        shadowOffset: { height: 1, width: 1 }, // IOS
        shadowOpacity: 0.2, // IOS
        shadowRadius: 5, //IOS
        elevation: 5, // Android
    },
    infoViewTitle: {
        padding: 15,
        fontSize: 20,
        fontWeight: "bold",
    },
    infoViewContent: {
        backgroundColor: LightenColor,
        borderRadius: 5,
        padding: 15,
        overflow: "hidden", // IOS
    },
    infoIcon: {
        fontSize: 22,
        fontWeight: "bold"
    },
    loginView: {
        backgroundColor: GwnuYellow,
        borderRadius: 5,
        padding: 10,
        shadowColor: 'black', // IOS
        shadowOffset: { height: 1, width: 1 }, // IOS
        shadowOpacity: 0.2, // IOS
        shadowRadius: 5, //IOS
        elevation: 5, // Android
    },
    loginViewText: {
        paddingHorizontal: 10,
        color: 'white',
        fontSize: 18,
        fontWeight: "bold"
    }
})

const information = () => {
return (
        <View style={styles.rootView}>
            <View style={styles.infoView}>
                <Text style={styles.infoViewTitle}>
                    {"커뮤니티"}
                </Text>
                <Text style={styles.infoViewContent}>
                    ・ 몇 명 구합니다.{'\n'}
                    ・ 농구 할사람{'\n'}
                </Text>
            </View>

            <View>
                <Text style={styles.infoViewTitle}>
                {"체육 시설물 정보 확인"}
                
                </Text>
            </View>
        </View>
    );
};

export default information;
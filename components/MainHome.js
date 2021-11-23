import * as React from 'react';
import {Text, View, StyleSheet, Image} from "react-native";
import App from "../App";
import {render} from "react-native/Libraries/Renderer/implementations/ReactFabric-prod";



const MainHome = () => {
    return (
        <View style={styles.home}>
            <View style={styles.head}>
                <Image source={require('../assets/shop2.png')} style={styles.logo}></Image>
                <Text style={styles.logo_name}>
                    Smart-Shopper
                </Text>
                <Image source={require('../assets/snack-icon.png')} style={styles.logo2} onPress={() => Alert.alert('Simple Button pressed')}></Image>
            </View>
            <View style={styles.box}>
                <Text style={styles.solg}>
                    "Always stocked for your needs.Everyone loves a great deal."
                </Text>
            </View>
            <Image source={require('../assets/shop-app.png')} style={styles.img} />
        </View>
    )
}

const styles = StyleSheet.create({
    home: {},
    head: {
        backgroundColor: '#1ABC9C',
        height: 80,
        width: '100%',
        flexDirection: 'row',
        borderBottomWidth: 6,
        borderBottomColor: '#D0ECE7',
    },
    logo: {
        height: 60,
        width: 60,
        marginLeft: 20,
        marginTop: 10,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#0E6251',
    }, logo2: {
        height: 60,
        width: 60,
        marginLeft: 20,
        marginTop: 10,
    },
    logo_name: {
        fontSize: 25,
        paddingTop: '5%',
        paddingLeft: '10%',
        paddingRight: '7%',
        fontFamily: 'sans-serif-medium',
        fontWeight: 'bold',
        color: 'white',
    },
    box: {
        width: '85%',
        margin: 30,
        marginBottom: 15,
        paddingBottom: 15,
        marginRight: '7%',
        alignContent: "center"
    },
    solg: {
        fontSize: 20,
        fontFamily: 'monospace',
        color: '#5DADE2',
        paddingLeft: 8,
        marginLeft: 10,
        justifyContent: "space-around"
    },
    img: {
        width: '80%',
        height: 200,
        alignContent: "center",
        marginLeft: '10%'
    }
});
export default MainHome;

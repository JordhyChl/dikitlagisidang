import React from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet
} from 'react-native';
import { connect } from 'react-redux';

const PeriksaSekring = ({ activeRoute }) => (
<View style={styles.view}>
    <ScrollView>
        <Text style={styles.header1}>{activeRoute.name}</Text>
        <View style={{ flexDirection: "row",
        height: 360,
        width: 480,
        padding: 10,
        justifyContent: "center", 
        backgroundColor: "blue", }} />
    <Text style={styles.text}>Konten Periksa Sekring</Text>
    <Text style={styles.textSub}>1.  Periksa Kabel Aki. Kabel Aki harus terpasang secara kencang di kedua kutub, kutub positif atau kutub negatif. Dan periksa juga apakah kualitas kabel tersebut masih baik.</Text>
    <Text style={styles.textSub}>2.  Periksa Indikator warna aki. Indikator tersebut menunjukan keadaan aki apakah aki dalam keadaan baik atau tidak</Text>
    <Text style={styles.textSub}>3.  Periksa Kutub Positif dan Negatif, apakah terdapat kotoran atau kerak-kerak yang mengganggu arus listrik kendaraan.</Text>
    </ScrollView>
</View>
);

const styles = StyleSheet.create({
    view: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      marginTop: 20,
      padding: 10,
    },
    header1: {
      fontSize: 24,
      marginBottom: '5%',
    },
    text: {
      fontSize: 20,
      width: '70%',
      textAlign: 'justify',
      lineHeight: 30,
      marginBottom: '5%',
      width: '100%',
    },
    textSub: {
      fontSize: 18,
      width: '70%',
      textAlign: 'justify',
      lineHeight: 30,
      marginBottom: '5%',
      width: '100%',
    },
  });

const mapStateToProps = state => ({
  activeRoute: state.routes.activeRoute,
});

export default connect(
  mapStateToProps,
)(PeriksaSekring);

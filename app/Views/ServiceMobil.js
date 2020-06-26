import React, {Component} from 'react';
import {
  ScrollView,
  Text,
  View,
  Picker,
  StyleSheet
} from 'react-native';
import { connect } from 'react-redux';

class ServiceMobil extends Component {
    state = {Tahun: ''}
    updateTahun = (Tahun) => {
       this.setState({ Tahun: Tahun })
    }
    state = {Merek: ''}
    updateMerek = (Merek) => {
       this.setState({ Merek: Merek })
    }
    state = {Tipe: ''}
    updateTipe = (Tipe) => {
       this.setState({ Tipe: Tipe })
    }
    state = {Interval: ''}
    updateInterval = (Interval) => {
       this.setState({ Interval: Interval })
    }
    render() {
       return (
        <View>
        <ScrollView>
                <Picker selectedValue = {this.state.Tahun} onValueChange = {this.updateTahun}>
                        <Picker.Item label = "Tahun" />
                        <Picker.Item label = "2018" value = "2018" />
                        <Picker.Item label = "2019" value = "2019" />
                        <Picker.Item label = "2020" value = "2020" />
                </Picker>
                <Picker selectedValue = {this.state.Merek} onValueChange = {this.updateMerek}>
                        <Picker.Item label = "Merek" />
                        <Picker.Item label = "Toyota" value = "Toyota" />
                        <Picker.Item label = "Honda" value = "Honda" />
                </Picker>
                <Picker selectedValue = {this.state.Tipe} onValueChange = {this.updateTipe}>
                        <Picker.Item label = "Tipe" />
                        <Picker.Item label = "Camry" value = "Camry" />
                        <Picker.Item label = "Accord" value = "Accord" />
                </Picker>
                <Picker selectedValue = {this.state.Interval} onValueChange = {this.updateInterval}>
                        <Picker.Item label = "Interval" />
                        <Picker.Item justifyContent label = "1.000 KM" value = "1.000 KM" />
                        <Picker.Item label = "5.000 KM" value = "5.000 KM" />
                        <Picker.Item label = "10.000 KM" value = "10.000 KM" />
                        <Picker.Item label = "15.000 KM" value = "15.000 KM" />
                        <Picker.Item label = "20.000 KM" value = "20.000 KM" />
                </Picker>
                {/* <Text style = {styles.text2}>{this.state.user}</Text> */}
                {/* <Text style={styles.header1}>{activeRoute.name}</Text> */}
            {/* <View style={{ flexDirection: "row",
            height: 360,
            width: 480,
            padding: 10,
            justifyContent: "center", 
            backgroundColor: "blue", }} /> */}
        <Text style={styles.text}>Detail Service:</Text>
        <Text style={styles.textSub}>Detail nya disini</Text>
        </ScrollView>
    </View>
       )
    }
 }

const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    //marginTop: '10%',
    padding: 5,
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
    marginTop: '7%',
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
)(ServiceMobil);

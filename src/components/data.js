// @flow

import React from 'react'
import {
  Linking,
  StyleSheet,
  Text,
  View,
} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  url: {
    color: 'blue',
    textDecorationLine: 'underline',
    fontSize: 20,
  },
})

const openUrl = url => {
  Linking.openURL(url)
    .catch(console.log)
}

export default class Data extends React.Component {
  static navigationOptions = {
    title: 'Data',
  }

  componentWillUnmount() {
    const { resetState } = this.props.navigation.state.params
    resetState()
  }

  render() {
    const { scannedData } = this.props.navigation.state.params
    if (scannedData == null) {
      return (
        <View />
      )
    }

    if (!Linking.canOpenURL(scannedData)) {
      return (
        <View style={styles.container}>
          <Text>{scannedData}</Text>
        </View>
      )
    }

    return (
      <View style={styles.container}>
        <Text
          onPress={() => openUrl(scannedData)}
          style={styles.url}
        >{scannedData}</Text>
      </View>
    )
  }
}

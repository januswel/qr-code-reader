// @flow

import React from 'react'
import {
  StyleSheet,
} from 'react-native'
import Camera from 'react-native-camera'

const styles = StyleSheet.create({
  preview: {
    flex: 1,
  },
})

export default class Scan extends React.Component {
  static navigationOptions = {
    header: null,
  }

  state = {
    isScannedOnce: false,
  }

  resetState = () => {
    this.setState({
      isScannedOnce: false,
    })
  }

  handleQrCodeRead = (event: any) => {
    if (this.state.isScannedOnce) {
      return
    }

    this.setState({
      isScannedOnce: true,
    })

    const scannedData = event.data.toString()
    this.props.navigation.navigate('Data', {
        scannedData,
        resetState: this.resetState,
    })
  }

  render() {
    console.log(this.state)
    return (
      <Camera
        style={styles.preview}
        aspect={Camera.constants.Aspect.fill}
        onBarCodeRead={this.handleQrCodeRead}
      />
    )
  }
}

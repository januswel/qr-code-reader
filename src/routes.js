// @flow

import React from 'react'
import {
  StackNavigator,
} from 'react-navigation'

import Scan from './components/scan'
import Data from './components/data'

export default StackNavigator({
  Scan: {
    screen: Scan,
  },
  Data: {
    screen: Data,
  },
}, {
  headerMode: 'screen',
})

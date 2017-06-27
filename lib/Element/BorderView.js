//import liraries
import React, { PureComponent } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Screen from '../Tool/Screen'
import Color from '../Config/Color'

// create a component
class BorderView extends PureComponent {
    render() {
        return (
            <View style={{ borderWidth: Screen.onePixel, borderColor: Color.border }}>
                {this.props.children}
            </View>
        )

    }
}

//make this component available to the app
export default BorderView;

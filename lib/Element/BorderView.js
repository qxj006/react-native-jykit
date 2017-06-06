//import liraries
import React, { PureComponent } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { screen, color } from '../'

// create a component
class BorderView extends PureComponent {
    render() {
        return (
            <View style={{ borderWidth: screen.onePixel, borderColor: color.border }}>
                {this.props.children}
            </View>
        )

    }
}

//make this component available to the app
export default BorderView;

/**
 * Copyright (c) 2017-present, Liu Jinyong
 * All rights reserved.
 *
 * @flow
 */

//import liraries
import React, { PureComponent } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Screen from '../Tool/Screen'
import Color from '../Config/Color'

// create a component
class Separator extends PureComponent {
    render() {
        return (
            <View style={[styles.line, this.props.style && this.props.style]} />
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    line: {
        height: Screen.onePixel,
        backgroundColor: Color.border,
    },
});

//make this component available to the app
export default Separator;

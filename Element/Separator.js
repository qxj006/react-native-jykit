/**
 * Copyright (c) 2017-present, Liu Jinyong
 * All rights reserved.
 *
 * @flow
 */

//import liraries
import React, { PureComponent } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import screen from '../Tool/screen'
import color from '../Config/color'

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
        height: screen.onePixel,
        backgroundColor: color.border,
    },
});

//make this component available to the app
export default Separator;

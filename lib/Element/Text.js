/**
 * Copyright (c) 2017-present, Liu Jinyong
 * All rights reserved.
 *
 * @flow
 */

import React, { PureComponent } from 'react'
import { View, StyleSheet, Text } from 'react-native'

import normalize from '../Tool/NormalizeText'

class TextComponent extends PureComponent {

    render() {
        const { style, children, h1, h2, h3, p1, p2, p3, ...rest } = this.props

        return (
            <Text
                style={[
                    styles.text,
                    h1 && { fontSize: normalize(18) },
                    h2 && { fontSize: normalize(16) },
                    h3 && { fontSize: normalize(14) },
                    p1 && { fontSize: normalize(14) },
                    p2 && { fontSize: normalize(13) },
                    p3 && { fontSize: normalize(12) },

                    h1 && styles.bold,
                    h2 && styles.bold,
                    h3 && styles.bold,
                    style && style,
                ]}
                {...rest}
            >
                {children}
            </Text>
        )
    }

}

const styles = StyleSheet.create({
    text: {
        color: '#333333',
        marginBottom: 4,
    },
})

export default TextComponent
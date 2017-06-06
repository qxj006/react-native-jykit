/**
 * Copyright (c) 2017-present, Liu Jinyong
 * All rights reserved.
 *
 * @flow
 */

import React, { PureComponent } from 'react'
import { View, StyleSheet } from 'react-native'

import normalize from '../Tool/normalizeText'

class Text extends PureComponent {

    render() {
        const { style, children, h1, h2, h3, h4, ...rest } = this.props

        return (
            <Text
                style={[
                    styles.text,
                    h1 && { fontSize: normalize(18) },
                    h2 && { fontSize: normalize(16) },
                    h3 && { fontSize: normalize(14) },
                    h4 && { fontSize: normalize(13) },
                    h1 && styles.bold,
                    h2 && styles.bold,
                    h3 && styles.bold,
                    h4 && styles.bold,
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

})

export default Text
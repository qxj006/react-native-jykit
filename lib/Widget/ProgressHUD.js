/**
 * Copyright (c) 2017-present, Liu Jinyong
 * All rights reserved.
 *
 * @flow
 */

import React, { PureComponent } from 'react'
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'

import screen from '../Tool/screen'

class ProgressHUD extends PureComponent {

    props: {
        isVisible?: boolean,
        isTouchable?: boolean,
        title?: string,

    }

    static defaultProps = {
        isVisible: true,
        isTouchable: true,
        title: '加载中...',
    }

    render() {
        if (!this.props.isVisible) {
            return null
        }

        return (
            <View style={styles.overlay} pointerEvents={this.props.isTouchable ? 'auto' : 'none'}>
                <View style={styles.popContainer}>
                    <View style={styles.popBackground} />
                    <ActivityIndicator
                        animating={true}
                        color='white'
                        size='large'
                    />
                    <Text style={styles.title}>{this.props.title}</Text>
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({

    overlay: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    popContainer: {
        width: screen.width / 2.6,
        height: screen.width / 3.6,
        justifyContent: 'center',
        alignItems: 'center',
    },
    popBackground: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#555555',
        opacity: 0.7,
        borderRadius: 7,
    },
    title: {
        marginTop: 7,
        color: 'white',
        fontSize: 15,
        backgroundColor: 'transparent',
    }
})

export default ProgressHUD
/**
 * Copyright (c) 2017-present, Liu Jinyong
 * All rights reserved.
 *
 * @flow
 */

import React from 'react'
import { Image, StyleSheet, TouchableOpacity, View, Dimensions, PixelRatio, Animated } from 'react-native'

import Camera from 'react-native-camera'

class ScanScene extends React.Component {

    camera: Camera

    state: {
        camera: Object,
        moveAnimation: Object,
        barCodeResult: string,
    }

    static navigationOptions = ({ navigation: Object }) => ({
        title: '扫码',
    })

    constructor(props: Object) {
        super(props)

        this.camera = null

        this.state = {
            camera: {
                aspect: Camera.constants.Aspect.fill,
                captureTarget: Camera.constants.CaptureTarget.cameraRoll,
                type: Camera.constants.Type.back,
                orientation: Camera.constants.Orientation.auto,
                flashMode: Camera.constants.FlashMode.auto,
            },
            moveAnimation: new Animated.Value(0),
            barCodeResult: '',
        }
    }

    componentDidMount() {
        this.startAnimation()
    }

    componentWillUnmount() {
        this.state.moveAnimation.stopAnimation()
    }

    startAnimation() {
        let toValue = Dimensions.get('window').width / 2
        Animated.loop(
            Animated.timing(
                this.state.moveAnimation,
                {
                    toValue: toValue,
                    duration: 1500,
                },
            )
        ).start()
    }

    render() {
        return (
            <View style={styles.container}>
                <Camera
                    ref={(camera) => {
                        this.camera = camera;
                    }}
                    style={styles.preview}
                    aspect={this.state.camera.aspect}
                    captureTarget={this.state.camera.captureTarget}
                    type={this.state.camera.type}
                    flashMode={this.state.camera.flashMode}
                    onFocusChanged={() => { }}
                    onZoomChanged={() => { }}
                    defaultTouchToFocus
                    mirrorImage={false}
                    onBarCodeRead={(result) => {
                        if (this.state.barCodeResult.length > 0) {
                            return
                        }

                        let text = result.data
                        this.setState({ barCodeResult: text })

                        let onBarCodeRead = this.props.navigation.state.params.onBarCodeRead
                        onBarCodeRead && onBarCodeRead(text)

                        this.props.navigation.goBack()
                    }}
                />
                <View style={styles.overlay}>
                    <Image style={styles.box} source={require('./img/scanning_box.png')} >
                        <Animated.Image
                            style={[styles.line, { top: this.state.moveAnimation }]}
                            source={require('./img/scanning_line.png')}
                        />
                    </Image>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    preview: {
        position: 'absolute',
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    overlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    box: {
        width: Dimensions.get('window').width / 2,
        height: Dimensions.get('window').width / 2,
    },
    line: {
        position: 'absolute',
        width: Dimensions.get('window').width / 2,
        height: Dimensions.get('window').width / 2 * 0.02,
    },
});

export default ScanScene
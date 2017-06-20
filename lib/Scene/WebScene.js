/**
 * Copyright (c) 2017-present, Liu Jinyong
 * All rights reserved.
 *
 * @flow
 */

//import liraries
import React, { PureComponent } from 'react'
import { View, Text, StyleSheet, WebView, InteractionManager } from 'react-native'

// create a component
class WebScene extends PureComponent {

    webView: WebView
    
    state: {
        source: Object
    }

    static navigationOptions = ({ navigation }) => ({
        headerStyle: { backgroundColor: 'white' },
        title: navigation.state.params.title,
    })

    constructor(props: Object) {
        super(props)
        this.state = {
            source: {}
        }
        this.props.navigation.setParams({ title: '加载中'})
    }

    componentDidMount() {
        InteractionManager.runAfterInteractions(() => {
            this.props.navigation.setParams({ title: '加载中' })
            this.setState({ source: { uri: this.props.navigation.state.params.url } })
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <WebView
                    ref={(e) => this.webView = e}
                    automaticallyAdjustContentInsets={false}
                    style={styles.webView}
                    source={this.state.source}
                    onLoadEnd={(e) => this.onLoadEnd(e)}
                    scalesPageToFit={true}
                />
            </View>
        );
    }

    onLoadEnd(e: any) {
        if (e.nativeEvent.title.length > 0) {
            this.props.navigation.setParams({ title: e.nativeEvent.title })
        }
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2c3e50',
    },
    webView: {
        flex: 1,
        backgroundColor: 'white',
    }
});

//make this component available to the app
export default WebScene;

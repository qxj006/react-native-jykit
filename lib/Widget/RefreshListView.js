//
//  Created by Liu Jinyong on 17/4/5.
//  Copyright © 2016年 Liu Jinyong. All rights reserved.
//
//  @flow

import React, { PureComponent } from 'react';
import { View, Text, StyleSheet, RefreshControl, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';

type RefreshState = 'Idle' | 'Refreshing' | 'NoMoreData' | 'Failure'

let debug = false

class RefreshListView extends PureComponent {

    props: {
        onHeaderRefresh: () => void,
        onFooterRefresh: () => void,
        footerRefreshingText?: string,
        footerFailureText?: string,
        footerNoMoreDataText?: string,
        data: Array<any>,
    }

    state: {
        headerState: RefreshState,
        footerState: RefreshState,
    }

    static defaultProps = {
        footerRefreshingText: '数据加载中……',
        footerFailureText: '点击重新加载',
        footerNoMoreDataText: '已加载全部数据'
    }

    constructor(props: Object) {
        super(props)

        this.state = {
            headerState: 'Idle',
            footerState: 'Idle',
        }
    }

    startHeaderRefreshing() {
        debug && console.log('startHeaderRefreshing')

        this.setState({ headerState: 'Refreshing' })

        if (this.props.onHeaderRefresh) {
            this.props.onHeaderRefresh()
        }
    }

    startFooterRefreshing() {
        debug && console.log('startFooterRefreshing')

        this.setState({ footerState: 'Refreshing' })

        if (this.props.onFooterRefresh) {
            this.props.onFooterRefresh()
        }
    }

    shouldStartHeaderRefreshing() {
        debug && console.log('shouldStartHeaderRefreshing')

        if (this.state.headerState == 'Refreshing' ||
            this.state.footerState == 'Refreshing') {
            return false
        }

        return true
    }

    shouldStartFooterRefreshing() {
        debug && console.log('shouldStartFooterRefreshing')

        if (this.state.headerState == 'Refreshing' ||
            this.state.footerState == 'Refreshing') {
            return false
        }
        if (this.state.footerState == 'Failure' ||
            this.state.footerState == 'NoMoreData') {
            return false
        }
        if (this.props.data.length == 0) {
            return false
        }

        return true
    }

    endRefreshing(refreshState: RefreshState) {
        debug && console.log('endRefreshing')

        if (refreshState == 'Refreshing') {
            return
        }
        let footerState = refreshState
        if (this.props.data.length == 0) {
            footerState = 'Idle'
        }

        this.setState({
            headerState: 'Idle',
            footerState: footerState
        })
    }

    headerState() {
        return self.state.headerState
    }

    footerState() {
        return self.state.footerState
    }

    onHeaderRefresh() {
        if (this.shouldStartHeaderRefreshing()) {
            this.startHeaderRefreshing();
        }
    }

    onEndReached(info: any) {
        debug && console.log('onEndReached   ' + info.distanceFromEnd)

        if (this.shouldStartFooterRefreshing()) {
            this.startFooterRefreshing();
        }
    }

    render() {
        return (
            <FlatList
                {...this.props}
                onEndReachedThreshold={0.3}
                onEndReached={(info) => this.onEndReached(info)}
                onRefresh={() => this.onHeaderRefresh()}
                refreshing={this.state.headerState == 'Refreshing'}
                ListFooterComponent={() => this.renderFooter()}
            />

        );
    }

    renderFooter() {
        let footer = null;

        switch (this.state.footerState) {
            case 'Idle':
                <TouchableOpacity
                    style={styles.footerContainer}
                >
                </TouchableOpacity>
                break;
            case 'Failure': {
                footer =
                    <TouchableOpacity
                        style={styles.footerContainer}
                        onPress={() => this.startFooterRefreshing()}
                    >
                        <Text style={styles.footerText}>
                            {this.props.footerFailureText}
                        </Text>
                    </TouchableOpacity>
                break;
            }
            case 'Refreshing': {
                footer =
                    <View style={styles.footerContainer} >
                        <ActivityIndicator size="small" color="#888888" />
                        <Text style={[styles.footerText, { marginLeft: 7 }]}>
                            {this.props.footerRefreshingText}
                        </Text>
                    </View>
                break;
            }
            case 'NoMoreData': {
                footer =
                    <View style={styles.footerContainer} >
                        <Text style={styles.footerText}>
                            {this.props.footerNoMoreDataText}
                        </Text>
                    </View>
                break;
            }
        }

        return footer;
    }

}

// define your styles
const styles = StyleSheet.create({
    footerContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        height: 44,
    },
    footerText: {
        fontSize: 14,
        color: '#555555'
    }
});

//make this component available to the app
export default RefreshListView;

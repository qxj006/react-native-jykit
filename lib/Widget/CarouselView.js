/**
 * Copyright (c) 2017-present, Liu Jinyong
 * All rights reserved.
 *
 * @flow
 */

'use strict';

import React, { PureComponent } from 'react'
import { StyleSheet, Text, View, TouchableWithoutFeedback, Image, ScrollView, Dimensions } from 'react-native'
import { CachedImage } from "react-native-img-cache"

import { screen, PageControl } from '../'

class CarouselView extends PureComponent {

    props: {
        imageUrls: Array<any>,
        resizeMode: 'cover' | 'contain' | 'stretch' | 'repeat' | 'center',
        width: number,
        imageRate: number,
        indicatorColor: string,
        currentIndicatorColor: string,
        onPress: (index: number) => void,
    }

    state: {
        currentPage: number,
    }

    static defaultProps = {
        imageUrls: [],
        resizeMode: 'cover',
        width: Dimensions.get('window').width,
        imageRate: 0.6,
        indicatorColor: 'gray',
        currentIndicatorColor: 'white',
    }

    constructor(props: Object) {
        super(props);

        this.state = {
            currentPage: 0,
        }

        console.log('Carousel View constructor')
    }

    // shouldComponentUpdate(nextProps, nextState) {

    //     return false
    // }

    componentDidMount() {

        console.log('Carousel View componentDidMount')
    }

    onScroll(e: any) {
        let x = e.nativeEvent.contentOffset.x;
        let currentPage = x / screen.width;

        console.log('currentPage' + currentPage)
        if (this.state.currentPage != currentPage) {
            this.setState({
                currentPage: Math.round(currentPage)
            })
        }
    }

    selectAtIndex(index: number) {
        this.props.onPress && this.props.onPress(index)
    }

    render() {
        let { width, imageUrls, resizeMode, imageRate, indicatorColor, currentIndicatorColor } = this.props
        let height = width * imageRate

        console.log('Carousel View render!!!!')
        return (
            <View
                style={{ height: height }}
                removeClippedSubviews={true}>
                <ScrollView
                    horizontal={true}
                    pagingEnabled={true}
                    scrollsToTop={false}
                    showsHorizontalScrollIndicator={false}
                    onScroll={(e) => this.onScroll(e)}
                >
                    {imageUrls.map((url, index) => (
                        <TouchableWithoutFeedback
                            key={index + url}
                            onPress={() => this.selectAtIndex(index)}
                        >
                            <CachedImage
                                style={{ width: width, height: height }}
                                source={{ uri: url }}
                                resizeMode={resizeMode}
                            />
                        </TouchableWithoutFeedback>

                    ))}
                </ScrollView>


                <PageControl
                    style={{ position: 'absolute', width: width, top: height - 20 }}
                    numberOfPages={imageUrls.length}
                    currentPage={this.state.currentPage}
                    hidesForSinglePage
                    pageIndicatorTintColor={indicatorColor}
                    currentPageIndicatorTintColor={currentIndicatorColor}
                    indicatorSize={{ width: 8, height: 8 }}
                />
            </View>

        );
    }
}

const styles = StyleSheet.create({

});


export default CarouselView;
/**
 * Copyright (c) 2017-present, Liu Jinyong
 * All rights reserved.
 *
 * @flow
 */

'use strict';

import React, { PureComponent } from 'react'
import { StyleSheet, Text, View, TouchableWithoutFeedback, Image, ScrollView, Dimensions } from 'react-native'
import Swiper from 'react-native-swiper'
import { CachedImage } from "react-native-img-cache"

import { screen, PageControl } from '../'

class CarouselView extends PureComponent {

    props: {
        imageUrls: Array<any>,
        resizeMode: 'cover' | 'contain' | 'stretch' | 'repeat' | 'center',
        width: number,
        imageRate: number,
        dotColor: string,
        activeDotColor: string,
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
        dotColor: 'gray',
        activeDotColor: 'white',
    }

    constructor(props: Object) {
        super(props);

        this.state = {
            currentPage: 0,
        }

        console.log('Carousel View constructor')
    }

    componentDidMount() {

        console.log('Carousel View componentDidMount')
    }

    selectAtIndex(index: number) {
        this.props.onPress && this.props.onPress(index)
    }

    render() {
        console.log('Carousel View render')

        let { width, imageUrls, resizeMode, imageRate, dotColor, activeDotColor, ...attributes } = this.props
        let height = width * imageRate

        return (
            <Swiper
                height={height}
                autoplay
                paginationStyle={{ bottom: height * 0.06 }}
                dotColor={dotColor}
                activeDotColor={activeDotColor}
                {...attributes}
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
            </Swiper>
        )
    }
}

const styles = StyleSheet.create({

});


export default CarouselView;
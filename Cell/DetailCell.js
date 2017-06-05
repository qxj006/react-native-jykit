/**
 * Copyright (c) 2017-present, Liu Jinyong
 * All rights reserved.
 *
 * @flow
 */

//import liraries
import React, { PureComponent } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Heading1, Heading2, Paragraph } from '../Element/Text'
import { Separator } from '../'

// create a component
class DetailCell extends PureComponent {

    props: {
        title: string,
        subtitle?: string,
        style?: Object,
        image?: Object,
        detailImage?: Object,
        isArrowVisiable: boolean,
        onPress?: () => void,
    }

    static defaultProps = {
        isArrowVisiable: true,
    }

    render() {
        let icon = this.props.image && <Image style={styles.icon} source={this.props.image} />
        let detailIcon = this.props.detailImage && <Image style={styles.detailIcon} source={this.props.detailImage} />
        let arrow = this.props.isArrowVisiable && <Image style={styles.arrow} source={require('../../img/public/cell_arrow.png')} />
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.props.onPress}>
                    <View style={[styles.content, this.props.style]}>
                        {icon}
                        <Heading2>{this.props.title}</Heading2>
                        <View style={{ flex: 1, backgroundColor: 'blue' }} />
                        <Paragraph style={{ color: '#999999' }}>{this.props.subtitle}</Paragraph>
                        {detailIcon}
                        {arrow}
                    </View>

                    <Separator />
                </TouchableOpacity>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    content: {
        height: 44,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 15,
        paddingRight: 10,
    },
    icon: {
        width: 25,
        height: 25,
        marginRight: 10,
    },
    detailIcon: {
        width: 33,
        height: 33,
        marginRight: 10,
    },
    subtitleContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    arrow: {
        width: 14,
        height: 14,
        marginLeft: 5,
    }
});

//make this component available to the app
export default DetailCell;

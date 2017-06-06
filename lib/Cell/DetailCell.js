/**
 * Copyright (c) 2017-present, Liu Jinyong
 * All rights reserved.
 *
 * @flow
 */

//import liraries
import React, { PureComponent } from 'react'
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import Text from '../Element/Text'
import { Separator } from '../'
import { Icon } from 'react-native-elements'

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
        let arrow = this.props.isArrowVisiable && <Icon name='ios-arrow-forward' size={20} type='ionicon' color='#555555' style={styles.icon} />
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.props.onPress}>
                    <View style={[styles.content, this.props.style]}>
                        {icon}
                        <Text h2>{this.props.title}</Text>
                        <View style={{ flex: 1, backgroundColor: 'blue' }} />
                        <Text h4 style={{ color: '#999999' }}>{this.props.subtitle}</Text>
                        {detailIcon}
                        {arrow}
                    </View>

                    <Separator />
                </TouchableOpacity>
            </View>
        )
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
        marginLeft: 10,
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

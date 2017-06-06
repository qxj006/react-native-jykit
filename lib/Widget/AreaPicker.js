/**
 * Copyright (c) 2017-present, Liu Jinyong
 * All rights reserved.
 *
 * @flow
 */

import React, { PureComponent } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Picker from 'react-native-picker';
import area from './area.json';

class AreaPicker {

    static createAreaData() {
        let data = []
        let len = area.length
        for (let i = 0; i < len; i++) {
            let city = []
            for (let j = 0, cityLen = area[i]['city'].length; j < cityLen; j++) {
                let _city = {}
                _city[area[i]['city'][j]['name']] = area[i]['city'][j]['area']
                city.push(_city)
            }

            let _data = {}
            _data[area[i]['name']] = city
            data.push(_data)
        }
        return data
    }

    static show(options = {}) {
        Picker.init({
            pickerTitleText: '选择地区',
            pickerCancelBtnText: '取消',
            pickerConfirmBtnText: '确定',
            pickerData: this.createAreaData(),
            selectedValue: options.selectedValue,
            onPickerConfirm: pickedValue => {
                console.log('area', pickedValue);
                options.onPickerConfirm && options.onPickerConfirm(pickedValue)
            },
            onPickerCancel: pickedValue => {
                console.log('area', pickedValue);
                options.onPickerCancel && options.onPickerCancel(pickedValue)
            },
            onPickerSelect: pickedValue => {
                //Picker.select(['福建', '福州', '鼓楼区'])
                console.log('area', pickedValue);
                options.onPickerSelect && options.onPickerSelect(pickedValue)
            }
        })
        Picker.show()
    }

    static hide() {
        Picker.hide()
    }
}

const styles = StyleSheet.create({

})

export default AreaPicker
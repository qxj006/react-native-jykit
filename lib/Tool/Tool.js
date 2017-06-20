/**
 * Copyright (c) 2017-present, Liu Jinyong
 * All rights reserved.
 *
 * @flow
 */

const urlByAppendingParams = (url: string, params: Object) => {
    let result = url
    if (result.substr(result.length - 1) != '?') {
        result = result + `?`
    }

    for (let key in params) {
        let value = params[key]
        result += `${encodeURIComponent(key)}=${encodeURIComponent(value)}&`
    }

    result = result.substring(0, result.length - 1);
    return result;
}

const formatDate = (timestamp: number) => {
    const date = new Date(parseInt(timestamp) * 1000);
    const year = date.getFullYear();
    const month = parseInt(date.getMonth()) + 1;
    const day = date.getDate();
    return `${year}-${month}-${day}`;
}

export default {
    urlByAppendingParams: urlByAppendingParams,
    formatDate: formatDate,

}
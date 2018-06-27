import React from 'react'
import {
    View
} from 'react-native'
import {
    Button
} from 'antd-mobile-rn'
import { connect } from 'react-redux'

import { getAblumList } from '../../models/home'

@connect(
    state => state.home,
    {
        getAblumList
    }
)
export default class Home extends React.Component {

    render() {
        return (
            <View>
                <Button onClick={() => this.props.getAblumList()}>
                    get
                </Button>
            </View>
        )
    }


}
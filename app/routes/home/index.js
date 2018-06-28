import React from 'react'
import {
    View,
    Platform
} from 'react-native'
import {
    Button
} from 'antd-mobile-rn'
import { connect } from 'react-redux'
import ImagePicker from 'react-native-image-crop-picker';

import { getAblumList } from '../../models/home'
import { uploadFile } from '../../utils'
import { WarpperState } from '../../components'
@connect(
    state => state.home,
    {
        getAblumList
    }
)
@WarpperState
export default class Home extends React.Component {

    render() {
        return (
            <View>

                <Button onClick={() => { this.selectImage() }}>
                    ImagePicker
                </Button>

                <Button onClick={() => uploadFile(this.props.state.uri, this.props.state.key)}>
                    uploadFile
                </Button>
            </View>
        )
    }

    selectImage = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            log.l(image);
            const uri = Platform.OS === 'ios' ? image.sourceURL : image.path;
            const key = Platform.OS === 'ios' ? image.filename : uri.substr(uri.lastIndexOf('/') + 1, uri.length);
            this.props.handleState('uri', uri)
            this.props.handleState('key', key)
        });
    }
}
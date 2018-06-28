import React from 'react'
import {
  View,
  Image,
} from 'react-native'
import { connect } from 'react-redux'
import {
  Grid
} from 'antd-mobile-rn'

import { getCoverList } from '../../models/cover'

@connect(
  state => state.cover,
  {
    getCoverList
  }
)
export default class Cover extends React.Component {

  render() {
    const { coverList } = this.props
    return (
      <View>
        <Grid
          data={coverList}
          columnNum={1}
          renderItem={this.renderCard}
        />
      </View>
    )
  }

  renderCard = ({ item, index }) => (
    <View>
      <Image 
        source={require}
      />
    </View>
  )
}

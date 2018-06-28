import React from 'react'

export default function wrapperState(Comp) {
    return class WrapperComp extends React.Component {

        constructor(props) {
            super(props)
            this.state = {}
        }

        handleState = (key, value) => {
            this.setState({
                [key]: value
            })
            log.i(`KEY:${key}, VALUE:${value}`)
        }

        render() {
            return <Comp handleState={this.handleState} state={this.state} {...this.props} />
        }
    }
}
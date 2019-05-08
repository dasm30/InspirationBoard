import React, { Component } from 'react'

export default class ResponsiveLayout extends Component {
  static defaultProps = {
    maxMobileWidth: 768,
  }
  constructor(props) {
    super(props)
    this.state = {
      isMobile: window.innerWidth < props.maxMobileWidth,
    }
  }
  componentDidMount() {
    window.addEventListener('resize', this.handleWindowSizeChange)
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange)
  }
  handleWindowSizeChange = () => {
    const { maxMobileWidth } = this.props
    this.setState({ isMobile: window.innerWidth < maxMobileWidth })
  }
  render() {
    const { isMobile } = this.state
    const { children, childrenMobile = children } = this.props

    if (isMobile) {
      return (
        <React.Fragment>
          {childrenMobile}
        </React.Fragment>
      )
    } else {
      return (
        <React.Fragment>
          {children}
        </React.Fragment>
      )
    }
  }
}

import * as React from 'react'
import * as common from 'tour-component'
export * from 'tour-component'

/**
 * @public
 */
export class Tour extends React.PureComponent<{
  data: common.TourData;
  update: (index: number) => void;
}, {}> {
  private index = 0

  private get step() {
    return (this.props.data.index < this.props.data.steps.length && this.props.data.index >= 0) ? this.props.data.steps[this.props.data.index] : null
  }
  private get arrowClassName() {
    return this.step ? `tour-arrow tt-${this.step.direction}` : 'tour-arrow'
  }
  private get position() {
    return common.getStepPosition(this.step)
  }

  UNSAFE_componentWillMount() {
    this.index = this.props.data.index
  }

  componentDidMount() {
    this.highlight()
  }

  render() {
    return this.step ? (
      <div className='tour-tip' style={this.position}>
        <span className={this.arrowClassName}></span>
        <div className='tour-content-wrapper'>
          <p>{this.step.content}</p>
          <a className='small button tour-next-tip' onClick={e => this.next()}>{this.step.next}</a>
          <a className='tour-close-tip' onClick={e => this.close()}>×</a>
        </div>
      </div>
    ) : null
  }

  private highlight() {
    common.unhighlight(this.props.data.steps)
    if (this.step) {
      common.highlight(this.step)
      if (typeof this.step.scrollTop === 'number') {
        window.scrollTo(0, this.step.scrollTop)
      }
    }
  }

  private next() {
    this.index++
    this.setState({ index: this.index })
    this.props.update(this.index)
    this.highlight()
    if (this.index >= this.props.data.steps.length) {
      this.close()
    }
  }

  private close() {
    this.index = -1
    this.setState({ index: this.index })
    this.props.update(this.index)
    this.highlight()
    if (this.props.data.localStorageKey) {
      localStorage.setItem(this.props.data.localStorageKey, '1')
    }
  }
}

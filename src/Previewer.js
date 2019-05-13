import React from 'react'

export default class Previewer extends React.Component {
  constructor () {
    super()
    this.canvas = React.createRef()
    this.video = React.createRef()

    this.setSize = this.setSize.bind(this)
    this.getThumnbnail = this.getThumnbnail.bind(this)
  }

  setSize () {
    this.canvas.current.width = this.video.current.videoWidth
    this.canvas.current.height = this.video.current.videoHeight
  }

  getThumnbnail () {
    const ctx = this.canvas.current.getContext('2d')
    // Placing the current frame image of the video in the canvas
    ctx.drawImage(this.video.current, 0, 0, this.video.current.videoWidth, this.video.current.videoHeight)
    this.props.onChange(this.canvas.current.toDataURL())
  }

  componentDidMount () {
    this.video.current.addEventListener('loadedmetadata', this.setSize)
    this.video.current.addEventListener('timeupdate', this.getThumnbnail)
  }

  componentWillUnmount () {
    this.video.current.removeEventListener('loadedmetadata', this.setSize)
    this.video.current.removeEventListener('timeupdate', this.getThumnbnail)
  }

  render () {
    return <>
      <video src={this.props.source} ref={this.video} controls style={this.props.style} />
      <canvas ref={this.canvas} style={{ display: 'none' }} />
    </>
  }
}

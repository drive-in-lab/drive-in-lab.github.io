import { Component } from 'react'

// WebGL isn't guaranteed everywhere (locked-down browsers, old GPUs, some
// screen readers/automation tooling). Catch render failures so a broken
// canvas never takes the rest of the page down with it.
class Safe3D extends Component {
  state = { failed: false }

  static getDerivedStateFromError() {
    return { failed: true }
  }

  componentDidCatch(error) {
    console.warn('3D accent failed to render, showing fallback instead.', error)
  }

  render() {
    if (this.state.failed) {
      return this.props.fallback ?? null
    }
    return this.props.children
  }
}

export default Safe3D

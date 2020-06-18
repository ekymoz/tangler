class Tangler {
  constructor(target, value = false) {
    this._target = target
    if (!value) value = this.targetValue
    this._value = value
    if (value) this.setState(value)
  }

  get value() {
    return this._value
  }

  get targetValue() {
    return this._target.innerHTML
  }

  set value(val) {
    this._value = val
    this.render(val)
  }

  render(val) {
    this._target.innerHTML = val
  }
}

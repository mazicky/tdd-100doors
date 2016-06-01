import { DOOR_STATE } from './types'

class Door {
  static makeDoors(count, state = DOOR_STATE.CLOSED) {
    const doors = []
    for (let i = 0; i < count; ++i) {
      doors.push({ state })
    }
    return doors
  }

  static toggle(type) {
    switch (type) {
      case DOOR_STATE.CLOSED:
        return DOOR_STATE.OPEN
      case DOOR_STATE.OPEN:
        return DOOR_STATE.CLOSED
      default:
        break
    }

    return null
  }

  constuctor() {
    this.doors = null
  }

  init(count) {
    this.doors = Door.makeDoors(count)
  }

  visitEach(value) {
    this.doors.forEach((door, index) => {
      if ((index+1) % value === 0) {
        door.state = Door.toggle(door.state)
      }
    })
  }

  getState() {
    this.doors.forEach((door, index) => {
      if (door.state === DOOR_STATE.OPEN) {
        console.log('open : ' + (index+1))
      }
    })
    return this.doors
  }
}

export default Door

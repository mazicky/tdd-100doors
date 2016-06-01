import chai from 'chai'
import Door from '../src/door/door'
import { DOOR_STATE } from '../src/door/types'
chai.should()

let door = null
const DOOR_COUNT = 100

describe ('Test', () => {

  before(() => {
    door = new Door()
  })

  beforeEach(() => {
    door.init(DOOR_COUNT)
  })

  it ('visit Each 1', () => {
    door.visitEach(1)
    door.getState().should.deep.equal(
      Door.makeDoors(DOOR_COUNT, DOOR_STATE.OPEN)
    )
  })

  it ('visit Each 2', () => {
    door.visitEach(2)
    const doors = Door.makeDoors(DOOR_COUNT)
    doors.forEach((door, index) => {
      if ((index+1) % 2 === 0) {
        door.state = DOOR_STATE.OPEN
      }
    })
    door.getState().should.deep.equal(doors)
  })

  it ('visit coutinously', () => {
    door.visitEach(1)
    door.visitEach(2)

    const doors = Door.makeDoors(DOOR_COUNT, DOOR_STATE.OPEN)
    doors.forEach((door, index) => {
      if ((index+1) % 2 === 0) {
        door.state = Door.toggle(door.state)
      }
    })

    door.getState().should.deep.equal(doors)
  })
})

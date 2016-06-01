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

  it ('should return door state object', () => {
    door.visitEach(1)
    door.getState().should.deep.equal(
      Door.makeDoors(DOOR_COUNT, DOOR_STATE.OPEN)
    )
  })
})

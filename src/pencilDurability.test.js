import { Paper } from './pencilDurability'

describe('Paper', () => {
  it('has a write method that returns a string', () => {
    const expected = 'a string'

    const paper = Paper();
    const actual = paper.write();

    expect(actual).toEqual(expected)
  })
})

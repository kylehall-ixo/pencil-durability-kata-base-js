import add from './exercise'

describe('add', () => {
  it('sums to numbers', () => {
    const expected = 3

    const actual = add(1, 2)

    expect(actual).toEqual(expected)
  })
})

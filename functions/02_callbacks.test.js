import { describe, it, expect, vi } from 'vitest'
import {
  useCallbacksAsDataType,
  forEach
} from './02_callbacks'

describe('Callbacks', () => {
  it('01 - function can be used as any data type like members of array', () => {
    expect(useCallbacksAsDataType()).toEqual('Callbacks are powerful')
  })

  it('02 - callback is called in iterations with arguments', () => {
    const array = [1, 2, 3]
    const spy = vi.fn()

    forEach(array, spy)

    expect(spy).toHaveBeenCalledTimes(array.length)
    array.forEach((value, index) => {
      expect(spy).toHaveBeenNthCalledWith(index + 1, value, index)
    })
  })
})

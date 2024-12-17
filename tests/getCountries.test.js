import { describe, it, expect, vi } from 'vitest'
import { getCountries } from '../utils/getCountries'

describe('Get South America countries using getCountries function', () => {
  // Happy path 🙂
  it('The promise is resolved successfully', async () => {
    // Arrange
    vi.spyOn(global, 'fetch').mockResolvedValue({
      json: vi.fn().mockResolvedValue([])
    })

    // Act

    // Assert
  })

  // Sad path 🙁
  it('The promise is rejected and returns null value', async () => {
    // Arrange
    vi.spyOn(global, 'fetch').mockRejectedValue(
      new Error('Server unavailable')
    )

    // Act

    // Assert
  })
})

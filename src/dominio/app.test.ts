import { existsSync } from 'node:fs'
import { describe, expect, it } from 'vitest'
import { app } from './app'

describe('le app di casa', () => {
  it('hanno nomi e indirizzi diversi tra loro', () => {
    expect(new Set(app.map((a) => a.nome)).size).toBe(app.length)
    expect(new Set(app.map((a) => a.indirizzo)).size).toBe(app.length)
  })

  it('hanno un indirizzo https che finisce con la barra', () => {
    for (const { indirizzo } of app) {
      expect(indirizzo).toMatch(/^https:\/\/.+\/$/)
    }
  })

  it('hanno un colore esadecimale', () => {
    for (const { colore } of app) {
      expect(colore).toMatch(/^#[0-9a-f]{6}$/)
    }
  })

  it('hanno ognuna la sua icona in src/ui/icone/', () => {
    for (const { icona } of app) {
      expect(existsSync(new URL(`../ui/icone/${icona}.svg`, import.meta.url)), icona).toBe(true)
    }
  })
})

import { useCallback, useRef } from 'react'
import { useSettings } from './useSettings'

type SoundType = 'click' | 'success' | 'switch'

class SoundManager {
  private audioContext: AudioContext | null = null

  private getContext(): AudioContext {
    if (!this.audioContext) {
      this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
    }
    return this.audioContext
  }

  play(type: SoundType) {
    try {
      const ctx = this.getContext()
      
      if (ctx.state === 'suspended') {
        ctx.resume()
      }

      switch (type) {
        case 'click':
          this.playClick(ctx)
          break
        case 'success':
          this.playSuccess(ctx)
          break
        case 'switch':
          this.playSwitch(ctx)
          break
      }
    } catch (e) {
      // Ignore audio errors
    }
  }

  private playClick(ctx: AudioContext) {
    const oscillator = ctx.createOscillator()
    const gainNode = ctx.createGain()

    oscillator.connect(gainNode)
    gainNode.connect(ctx.destination)

    oscillator.frequency.value = 800
    oscillator.type = 'sine'

    gainNode.gain.setValueAtTime(0.1, ctx.currentTime)
    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.05)

    oscillator.start(ctx.currentTime)
    oscillator.stop(ctx.currentTime + 0.05)
  }

  private playSwitch(ctx: AudioContext) {
    const oscillator = ctx.createOscillator()
    const gainNode = ctx.createGain()

    oscillator.connect(gainNode)
    gainNode.connect(ctx.destination)

    oscillator.frequency.value = 600
    oscillator.type = 'sine'

    gainNode.gain.setValueAtTime(0.08, ctx.currentTime)
    gainNode.gain.setValueAtTime(0.01, ctx.currentTime + 0.08)

    oscillator.start(ctx.currentTime)
    oscillator.stop(ctx.currentTime + 0.08)
  }

  private playSuccess(ctx: AudioContext) {
    const notes = [523.25, 659.25, 783.99]
    
    notes.forEach((freq, i) => {
      const oscillator = ctx.createOscillator()
      const gainNode = ctx.createGain()

      oscillator.connect(gainNode)
      gainNode.connect(ctx.destination)

      oscillator.frequency.value = freq
      oscillator.type = 'sine'

      const startTime = ctx.currentTime + i * 0.1
      gainNode.gain.setValueAtTime(0.1, startTime)
      gainNode.gain.setValueAtTime(0.01, startTime + 0.15)

      oscillator.start(startTime)
      oscillator.stop(startTime + 0.15)
    })
  }
}

const soundManager = new SoundManager()

export function useSound() {
  const { settings } = useSettings()
  const lastPlayTime = useRef(0)

  const play = useCallback((type: SoundType = 'click') => {
    if (!settings.soundEnabled) return
    
    const now = Date.now()
    if (now - lastPlayTime.current < 50) return
    lastPlayTime.current = now
    
    soundManager.play(type)
  }, [settings.soundEnabled])

  return { play }
}

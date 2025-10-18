'use client'
import { useState, useRef, useEffect } from 'react'

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [currentTime, setCurrentTime] = useState('0:00')
  const [duration, setDuration] = useState('0:00')
  const audioRef = useRef(null)

  // Sample audio URL - replace with your actual audio file
  const audioUrl = '/audio/sample-song.mp3'

  const togglePlay = () => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play().catch(error => {
        console.log('Audio play failed:', error)
      })
    }
    setIsPlaying(!isPlaying)
  }

  const updateProgress = () => {
    const audio = audioRef.current
    if (audio && audio.duration) {
      const progressPercent = (audio.currentTime / audio.duration) * 100
      setProgress(progressPercent)
      setCurrentTime(formatTime(audio.currentTime))
    }
  }

  const formatTime = (seconds) => {
    if (isNaN(seconds)) return '0:00'
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`
  }

  const handleLoadedMetadata = () => {
    const audio = audioRef.current
    if (audio) {
      setDuration(formatTime(audio.duration))
    }
  }

  const handleSeek = (e) => {
    const audio = audioRef.current
    if (!audio || !audio.duration) return

    const rect = e.currentTarget.getBoundingClientRect()
    const percent = (e.clientX - rect.left) / rect.width
    audio.currentTime = percent * audio.duration
  }

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    audio.addEventListener('loadedmetadata', handleLoadedMetadata)
    audio.addEventListener('timeupdate', updateProgress)
    audio.addEventListener('ended', () => setIsPlaying(false))

    return () => {
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata)
      audio.removeEventListener('timeupdate', updateProgress)
      audio.removeEventListener('ended', () => setIsPlaying(false))
    }
  }, [])

  return (
    <div className="music-player">
      <audio
        ref={audioRef}
        src={audioUrl}
        preload="metadata"
      />
      
      <div className="player-controls">
        <button onClick={togglePlay} className="play-btn">
          {isPlaying ? '❚❚' : '▶'}
        </button>
        
        <div className="progress-container">
          <span className="time-current">{currentTime}</span>
          <div className="progress-bar" onClick={handleSeek}>
            <div 
              className="progress" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <span className="time-duration">{duration}</span>
        </div>
      </div>

      <div className="now-playing">
        <span>Now Playing: Sample Track</span>
      </div>
    </div>
  )
}

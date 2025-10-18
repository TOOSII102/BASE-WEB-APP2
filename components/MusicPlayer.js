import { useState, useRef, useEffect } from 'react'

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [currentTime, setCurrentTime] = useState('0:00')
  const [duration, setDuration] = useState('0:00')
  const audioRef = useRef(null)

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  const updateProgress = () => {
    const audio = audioRef.current
    if (audio.duration) {
      const progressPercent = (audio.currentTime / audio.duration) * 100
      setProgress(progressPercent)
      setCurrentTime(formatTime(audio.currentTime))
    }
  }

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`
  }

  useEffect(() => {
    const audio = audioRef.current
    if (audio) {
      audio.addEventListener('loadedmetadata', () => {
        setDuration(formatTime(audio.duration))
      })
      audio.addEventListener('timeupdate', updateProgress)
      audio.addEventListener('ended', () => setIsPlaying(false))
    }

    return () => {
      if (audio) {
        audio.removeEventListener('timeupdate', updateProgress)
        audio.removeEventListener('ended', () => setIsPlaying(false))
      }
    }
  }, [])

  return (
    <div className="music-player">
      <audio
        ref={audioRef}
        src="/audio/sample-song.mp3"
        preload="metadata"
      />
      
      <div className="player-controls">
        <button onClick={togglePlay} className="play-btn">
          {isPlaying ? '❚❚' : '▶'}
        </button>
        
        <div className="progress-container">
          <span className="time-current">{currentTime}</span>
          <div className="progress-bar">
            <div 
              className="progress" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <span className="time-duration">{duration}</span>
        </div>
      </div>
    </div>
  )
}

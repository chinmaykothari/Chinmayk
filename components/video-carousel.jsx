"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"
import { Button } from "@/components/ui/button"

const videos = [
  {
    id: 1,
    title: "Personalized Learning Experience",
    description: "See how ELARA adapts to your unique learning style",
    thumbnail: "/placeholder.svg?height=400&width=600",
    videoUrl: "/videos/personalized-learning.mp4",
    duration: "2:30",
  },
  {
    id: 2,
    title: "Multi-Style Tutor Engine",
    description: "Explore our 25+ learning modes and teaching styles",
    thumbnail: "/placeholder.svg?height=400&width=600",
    videoUrl: "/videos/tutor-engine.mp4",
    duration: "3:15",
  },
  {
    id: 3,
    title: "Adaptive Study Plans",
    description: "Watch how ELARA creates customized learning roadmaps",
    thumbnail: "/placeholder.svg?height=400&width=600",
    videoUrl: "/videos/study-plans.mp4",
    duration: "2:45",
  },
  {
    id: 4,
    title: "Real-Time Feedback",
    description: "Experience instant guidance and recommendations",
    thumbnail: "/placeholder.svg?height=400&width=600",
    videoUrl: "/videos/feedback.mp4",
    duration: "1:50",
  },
]

export default function VideoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const videoRef = useRef(null)
  const [progress, setProgress] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length)
    setProgress(0)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length)
    setProgress(0)
  }

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100
      setProgress(progress)
    }
  }

  const handleVideoEnd = () => {
    if (autoplay) {
      nextSlide()
    } else {
      setIsPlaying(false)
    }
  }

  // Touch handlers for swipe functionality
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50
    
    if (isLeftSwipe) {
      nextSlide()
    }
    if (isRightSwipe) {
      prevSlide()
    }
    
    setTouchStart(null)
    setTouchEnd(null)
  }

  useEffect(() => {
    let interval
    if (autoplay && !isHovered && !isPlaying) {
      interval = setInterval(() => {
        nextSlide()
      }, 5000)
    }
    return () => clearInterval(interval)
  }, [autoplay, isHovered, isPlaying])

  return (
    <section className="py-0 bg-gradient-to-b from-slate-900 to-slate-950 overflow-hidden">
      <div className="container mx-auto px-0">
        <motion.div 
          className="text-center mb-8 pt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white mb-4">
            See <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">ELARA</span> in Action
          </h2>
          <p className="max-w-[700px] mx-auto text-slate-300 text-lg">
            Watch how our AI tutors adapt to different learning styles and subjects
          </p>
        </motion.div>

        <div 
          className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="absolute inset-0 bg-slate-800">
            <video
              ref={videoRef}
              src={videos[currentIndex].videoUrl}
              poster={videos[currentIndex].thumbnail}
              className="w-full h-full object-cover"
              onTimeUpdate={handleTimeUpdate}
              onEnded={handleVideoEnd}
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent"></div>
            
            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{videos[currentIndex].title}</h3>
                <p className="text-slate-300 text-sm md:text-base mb-4">{videos[currentIndex].description}</p>
                
                <div className="flex items-center gap-4">
                  <Button 
                    size="sm" 
                    className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/20"
                    onClick={togglePlay}
                  >
                    {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                  </Button>
                  <span className="text-white text-sm">{videos[currentIndex].duration}</span>
                </div>
              </motion.div>
            </div>
            
            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-700/50">
              <div 
                className="h-full bg-gradient-to-r from-cyan-500 to-blue-500"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            
            {/* Navigation Buttons */}
            <div className="absolute inset-y-0 left-0 flex items-center">
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-12 w-12 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm ml-4 border border-white/20"
                onClick={prevSlide}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center">
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-12 w-12 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm mr-4 border border-white/20"
                onClick={nextSlide}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
        
        {/* Indicators */}
        <div className="flex justify-center mt-4 space-x-2">
          {videos.map((_, index) => (
            <button
              key={index}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                index === currentIndex 
                  ? "bg-gradient-to-r from-cyan-500 to-blue-500 w-8" 
                  : "bg-slate-700 hover:bg-slate-600"
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        {/* Feature Links */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4 md:px-6">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div 
                className="relative h-40 rounded-xl overflow-hidden border border-slate-700/50 backdrop-blur-sm cursor-pointer"
                onClick={() => setCurrentIndex(index)}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-blue-500/10"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20 group-hover:bg-white/20 transition-colors">
                    <Play className="h-5 w-5 text-white" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-medium group-hover:text-cyan-300 transition-colors">{video.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 
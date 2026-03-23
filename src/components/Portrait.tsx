import { useCallback, useEffect, useRef, useState } from "react"

function lerp(value: number, inMin: number, inMax: number, outMin: number, outMax: number) {
  return outMin + ((value - inMin) / (inMax - inMin)) * (outMax - outMin)
}

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max)
}

export function Portrait() {
  const containerRef = useRef<HTMLElement>(null)
  const [mouse, setMouse] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)
  const [fgLoaded, setFgLoaded] = useState(false)
  const [bgLoaded, setBgLoaded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)")
    setIsMobile(mq.matches)
    const onChange = (e: MediaQueryListEvent) => setIsMobile(e.matches)
    mq.addEventListener("change", onChange)
    return () => mq.removeEventListener("change", onChange)
  }, [])

  useEffect(() => {
    if (!isMobile) return

    const onOrientation = (e: DeviceOrientationEvent) => {
      const gamma = e.gamma || 0
      const beta = e.beta || 0
      setTilt((prev) => ({
        x: prev.x + (gamma - prev.x) * 0.1,
        y: prev.y + (beta - prev.y) * 0.1,
      }))
    }

    window.addEventListener("deviceorientation", onOrientation)
    return () => window.removeEventListener("deviceorientation", onOrientation)
  }, [isMobile])

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    const el = containerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    setMouse({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }, [])

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const el = containerRef.current
  const w = el?.clientWidth ?? 1
  const h = el?.clientHeight ?? 1

  const offsetX = isMobile
    ? lerp(clamp(tilt.x, -30, 30), -30, 30, -16, 16)
    : lerp(clamp(mouse.x, 0, w), 0, w, -16, 16)

  const offsetY = isMobile
    ? lerp(clamp(tilt.y, -30, 30), -30, 30, -8, 8)
    : lerp(clamp(mouse.y, 0, h), 0, h, -8, 8)

  const scrollOffset = Math.min(scrollY * 0.15, 128)

  return (
    <figure
      ref={containerRef}
      onMouseMove={onMouseMove}
      className="relative flex-shrink-0 w-full overflow-hidden bg-muted"
      style={{ perspective: 1000 }}
    >
      <div
        className="absolute inset-0 bottom-0 left-0 z-10 scale-125 transition-opacity duration-[4000ms]"
        style={{
          opacity: fgLoaded ? 1 : 0,
          transform: `translateX(${offsetX / 4}px) translateY(${scrollOffset + offsetY / 4}px) rotateY(${offsetX / 4}deg)`,
        }}
      >
        <img
          alt="The foreground of the picture"
          className="block w-full scale-110 object-cover"
          src="/me/me_fg.png"
          onLoad={() => setFgLoaded(true)}
        />
      </div>

      <div
        className="transition-opacity duration-[4000ms]"
        style={{
          opacity: bgLoaded ? 1 : 0,
          transform: `translateX(${offsetX}px) translateY(${scrollOffset + offsetY}px)`,
        }}
      >
        <img
          alt="The background of the picture"
          className="block w-full scale-125 object-cover"
          src="/me/me_bg.png"
          onLoad={() => setBgLoaded(true)}
        />
      </div>
    </figure>
  )
}
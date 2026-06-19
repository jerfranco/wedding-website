import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import image from "/home_image_mini.webp"
import imageRight from "/flower_right.webp"
import imageLeft from "/flower_left.webp"

export function Home() {
  useEffect(() => {
    document.title = "Home | Janelle & Jeremiah"
  }, [])

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const weddingDate = new Date("2026-08-08T00:00:00")

    const timer = setInterval(() => {
      const now = new Date()
      const difference = weddingDate.getTime() - now.getTime()

      if (difference <= 0) {
        clearInterval(timer)
        return
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference % (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
        ),
        minutes: Math.floor(
          (difference % (1000 * 60 * 60)) /
            (1000 * 60)
        ),
        seconds: Math.floor(
          (difference % (1000 * 60)) /
            1000
        ),
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const location = useLocation()
  const submitted = location.state?.submitted

  return (
    <section id="homeWrapper">
      <section id="home">
        <div id="homeImg">
          <h2 className="bellota-regular">8 / 8 / 2026</h2>

          <div id="countdown" className="barlow-regular">
            <div>
              <span>{timeLeft.days}</span>
            </div>
            <span className="colon">:</span>
            <div>
              <span>{timeLeft.hours}</span>
            </div>
            <span className="colon">:</span>
            <div>
              <span>{timeLeft.minutes}</span>
            </div>
            <span className="colon">:</span>
            <div>
              <span>{timeLeft.seconds}</span>
            </div>
          </div>

          <p className="barlow-regular">Sealing - Oakland, CA</p>
          <p className="barlow-regular">Reception - Brentwood, CA</p>
        </div>

        <div id="homeContent">
          <h1 className="great-vibes-regular">
            <span id="janelle">Janelle</span>
            <span id="and">
              <br />
              & <br />
            </span>
            <span id="jeremiah">Jeremiah</span>
          </h1>

          {submitted && (
            <p style={{ color: "green", fontWeight: "bold" }}>
              Your RSVP has been submitted successfully!
            </p>
          )}
        </div>
      </section>

      <section id="inviteSection">
        <p className="barlow-regular">
          You are invited to the wedding of Janelle Stewart & Jeremiah Franco
          <br />
          <strong>Please RSVP by July 1st</strong> and get ready for some fun!
        </p>

        <p id="salamat" className="great-vibes-regular">
          Maraming salamat po!
        </p>

        <div id="miniHome">
          <img src={imageLeft} alt="Flower left side" />
          <img
            id="homeMiddlePic"
            src={image}
            alt="Holding hands"
          />
          <img src={imageRight} alt="Flower right side" />
        </div>
      </section>
    </section>
  )
}
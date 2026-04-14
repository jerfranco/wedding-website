import { useLocation } from "react-router-dom"
import image from '/home_image_mini.webp'

export function Home() {

  const location = useLocation()

  const submitted = location.state?.submitted

  return (
    <section id="homeWrapper">
      <section id="home">
        <div id="homeImg">
          {/* <img src={image} /> */}
          <h2 className="bellota-regular">8 / 8 / 2026</h2>
          <p className="barlow-regular">Sealing - Oakland</p>
          <p className="barlow-regular">Reception - Brentwood </p>
        </div>

        <div id="homeContent">
          {/* <h2>
            August 8, 2026
          </h2> */}
          <h1 className="great-vibes-regular">
            <span id="janelle">Janelle</span><span id="and"><br /> & <br /></span><span id="jeremiah">Jeremiah</span>
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
        You are invited to the wedding of Janelle & Jeremiah Franco<br />
        <strong>Please RSVP by July 1st</strong> and get ready for some fun!
        </p>
        {/* <p>Please RSVP <a href="/rsvp">here</a> by July 1st</p> */}
        <p id="salamat" className="great-vibes-regular">Maraming salamat!</p>
        <img src={image} alt="Holding hands"></img>
      </section>
    </section>
  )
}
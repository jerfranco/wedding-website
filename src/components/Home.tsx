import { useLocation } from "react-router-dom"
import image from '../../public/image.png'

export function Home() {

  const location = useLocation()

  const submitted = location.state?.submitted

  return (
    <section id="homeWrapper">
      <section id="home">
        <div id="homeImg">
          <img src={image} />
        </div>

        <div id="homeContent">
          <h2>
            August 8, 2026
          </h2>
          <h1 className="lavishly-yours-regular">
            Janelle Stewart <br /> & <br /> Jeremiah Franco
          </h1>
          

          {submitted && (
            <p style={{ color: "green", fontWeight: "bold" }}>
              Your RSVP has been submitted successfully!
            </p>
          )}
        </div>
      </section>
      <section id="inviteSection">
        <p>
          You are invited to our special day! <br />Please RSVP above and get ready for some fun!
          <br /> Maraming salamat!
        </p>
      </section>
      <section id="homeInfo">
        <div id="homeInfoContent">
          <h1>
            Where is the reception?
          </h1>
          <p>
            <strong>Date:</strong> August 8, 2026 <br />
            <strong>Location:</strong> Antioch Stake Center -
            2350 Jeffery Way, Brentwood, CA 94513 <br />
            <strong>Time: </strong>4:30pm-7pm
          </p>
        </div>
        <div id="homeInfoImg">
          <img src={image}></img>
        </div>
      </section>
    </section>
  )
}
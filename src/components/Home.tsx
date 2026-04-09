import { useLocation } from "react-router-dom"
import image from '/home_image.webp'

export function Home() {

  const location = useLocation()

  const submitted = location.state?.submitted

  return (
    <section id="homeWrapper">
      <section id="home">
        <div id="homeImg">
          {/* <img src={image} /> */}
          <h1 className="bellota-regular">August 8th, 2026</h1>
          <p className="barlow-regular">Sealing - Oakland</p>
          <p className="barlow-regular">Reception - Brentwood </p>
        </div>

        <div id="homeContent">
          {/* <h2>
            August 8, 2026
          </h2> */}
          <h1 className="great-vibes-regular">
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
        <p className="barlow-regular">
        You are invited to the wedding of Janelle & Jeremiah Franco<br />
        <strong>Please RSVP by July 1st</strong> and get ready for some fun!
        </p>
        {/* <p>Please RSVP <a href="/rsvp">here</a> by July 1st</p> */}
        <p id="salamat" className="great-vibes-regular">Maraming salamat!</p>
        <img src={image}></img>
      </section>
      {/* <section id="homeInfo">
        <div id="homeInfoContent">
          <h1>
            Where is the reception?
          </h1>
          <p>
            <strong>Date:</strong> August 8, 2026 <br />
            <strong>Location:</strong> Antioch Stake Center -
            2350 Jeffery Way, Brentwood, CA 94513 <br />
            <strong>Time: </strong>Seated by 4:30pm
          </p>
          <h1>
            What if I have a severe food allergy?
          </h1>
          <p>
            Let us know when you RSVP!
          </p>
          <h1>
            Can I bring a date or a friend?
          </h1>
          <p>
            We would love to have your friends and family come. Please input the party amount when you RSVP
          </p>
        </div>
        <div id="homeInfoImg">
          <img src={image}></img>
        </div>
      </section> */}
    </section>
  )
}
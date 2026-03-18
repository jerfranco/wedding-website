import { useNavigate, useLocation } from "react-router-dom"

export function Home() {
  const navigate = useNavigate()
  const location = useLocation()

  const submitted = location.state?.submitted

  return (
    <section id="home">
      <h1 className="lavishly-yours-regular">
        Janelle Rae Teoxon <br /> & <br /> Jeremiah Ariola Franco
      </h1>

      {submitted && (
        <p style={{ color: "green", fontWeight: "bold" }}>
          Your RSVP has been submitted successfully!
        </p>
      )}

      <section id="homeInfo">
        <p>
          You are invited to our special day! Please RSVP below and check out
          our guest list. <br /> Maraming salamat!
        </p>
        <p>
          <strong>Date:</strong> August 8, 2026 <br />
          <strong>Location:</strong> Antioch Stake Center <br />
          2350 Jeffery Way, Brentwood, CA 94513 <br />
          <strong>4:30pm-7pm</strong>
        </p>
      </section>

      <button onClick={() => navigate("/rsvp")} id="rsvpbutton">
        RSVP Here
      </button>
    </section>
  )
}
import { useState } from "react"
import { supabase } from "../supabaseClient"
import { useNavigate } from "react-router-dom"
// import image from '/home_image.webp';

export function RSVPForm() {
  const [name, setName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [party, setParty] = useState<string>("");
  const [allergies, setAllergies] = useState<string>("")
  const [attending, setAttending] = useState<boolean>(true)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const { error } = await supabase
      .from("guests")
      .insert([{ name, attending, email, party, allergies}])

    if (error) {
      console.error("Error submitting RSVP:", error)
      setError(error.message)
      setLoading(false)
      return
    }

    setName("")
    setAttending(false)
    setLoading(false)
    setEmail("")
    setParty("")
    setAllergies("")

    navigate("/", { state: { submitted: true } })
  }

  return (
    <section id="rsvpSection">
      <div id="forms">
        <h2 className="bellota-regular">RSVP</h2>
        {/* <div>
          <img src={image} alt="image" />
        </div> */}
        <div>
          <form onSubmit={handleSubmit}>
              {/* <label htmlFor="name">Name:</label> */}
            <input
              className="barlow-regular"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              required
            />
            {/* <label htmlFor="email">Email:</label> */}
            <input
              className="barlow-regular"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              required
            />
            {/* <label htmlFor="phone">Phone Number:</label> */}
            <input
              className="barlow-regular"
              type="number"
              value={party}
              onChange={(e) => setParty(e.target.value)}
              placeholder="Total party amount"
              required
            />
            {/* <label htmlFor="allergies">Allergies:</label> */}
            <input
              className="barlow-regular"
              type="text"
              value={allergies}
              onChange={(e) => setAllergies(e.target.value)}
              placeholder="Any allergies?"
              required
            />
            {/* <label>
              <input
                type="checkbox"
                checked={attending}
                onChange={(e) => setAttending(e.target.checked)}
              />
              Attending
            </label> */}
            <button className="bellota-regular" id="submitForm" type="submit" disabled={loading}>
              {loading ? "Submitting..." : "Submit"}
            </button>
            {error && <p style={{ color: "red" }}>{error}</p>}
          </form>
        </div>
      </div>
    </section>
    
    
  )
}
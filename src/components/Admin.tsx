import { useEffect, useState } from "react"
import { supabase } from "../supabaseClient"
import { useNavigate } from "react-router-dom"

interface Guest {
  id: number
  name: string
  email: string
  attending: boolean
  party?: number
}

export function Admin() {
  const [guests, setGuests] = useState<Guest[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const [totalRSVPs, setTotalRSVPs] = useState(0)
  const [totalGuests, setTotalGuests] = useState(0)
  const [attendingCount, setAttendingCount] = useState(0)

  const navigate = useNavigate()

  useEffect(() => {
    const fetchGuests = async () => {
      setLoading(true)
      const { data, error } = await supabase.from("guests").select("*")

      if (error) {
        setError(error.message)
      } else if (data) {
        setGuests(data)

        setTotalRSVPs(data.length)

        const totalPeople = data.reduce(
          (sum, g) => sum + Number(g.party || 1),
          0
        )

        const attendingPeople = data
          .filter((g) => g.attending)
          .reduce((sum, g) => sum + Number(g.party || 1), 0)

        setTotalGuests(totalPeople)
        setAttendingCount(attendingPeople)
      }

      setLoading(false)
    }

    fetchGuests()
  }, [])

  useEffect(() => {
    setTotalRSVPs(guests.length)
  
    const totalPeople = guests.reduce(
      (sum, g) => sum + Number(g.party || 1),
      0
    )
  
    const attendingPeople = guests
      .filter((g) => g.attending)
      .reduce((sum, g) => sum + Number(g.party || 1), 0)
  
    setTotalGuests(totalPeople)
    setAttendingCount(attendingPeople)
  }, [guests])

  const handleDelete = async (id: number) => {
    await supabase.from("guests").delete().eq("id", id)
    setGuests((prev) => prev.filter((g) => g.id !== id))
  }

  const handleToggleAttending = async (guest: Guest) => {
    await supabase
      .from("guests")
      .update({ attending: !guest.attending })
      .eq("id", guest.id)

    const updatedGuests = guests.map((g) =>
      g.id === guest.id ? { ...g, attending: !g.attending } : g
    )

    const sorted = [...updatedGuests].sort((a, b) => {
      return Number(b.attending) - Number(a.attending)
    })

    setGuests(sorted)
  }

  return (
    <div id="adminInfo">
      <h1>Guest List (Admin)</h1>

      <div>
        <p><strong>Total RSVPs:</strong> {totalRSVPs}</p>
        <p><strong>Total Guests:</strong> {totalGuests}</p>
        <p><strong>Attending:</strong> {attendingCount}</p>
        <p><strong>Not Attending:</strong> {totalGuests - attendingCount}</p>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : (
        <>
          {/* Desktop Table */}
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Party</th>
                <th>Attending</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {guests.map((guest) => (
                <tr key={guest.id}>
                  <td>{guest.name}</td>
                  <td>{guest.email}</td>
                  <td>{guest.party}</td>
                  <td>{guest.attending ? "Yes" : "No"}</td>
                  <td>
                    <button id="round" onClick={() => handleToggleAttending(guest)}>
                      Toggle
                    </button>
                    <button id="red" onClick={() => handleDelete(guest.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Mobile Cards */}
          <div id="mobileCards">
            {guests.map((guest) => (
              <div key={guest.id} className="guest-card">
                <div id="rsvpDetails">
                  <p><strong>Name:</strong> {guest.name}</p>
                  <p><strong>Email:</strong> {guest.email}</p>
                  <p><strong>Party:</strong> {guest.party}</p>
                  <p><strong>Attending:</strong> {guest.attending ? "Yes" : "No"}</p>
                </div>
                <div className="actions">
                  <button id="round" onClick={() => handleToggleAttending(guest)}>
                    Toggle
                  </button>
                  <button id="red" onClick={() => handleDelete(guest.id)}>
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
    </>
  )}
      
      <div id="adminButtons">
        <button id="round" onClick={() => supabase.auth.signOut()}>Log Out</button>
        <button id="red" onClick={() => navigate("/")}>Home Page</button>
      </div>
      
    </div>
  )
}
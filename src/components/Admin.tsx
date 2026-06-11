import { useEffect, useState } from "react"
import { supabase } from "../supabaseClient"
import { useNavigate } from "react-router-dom"

interface Guest {
  id: number
  name: string
  email: string
  phone_number: string
  attending: boolean
  allergies: string
  party?: number
  created_at?: string
}

export function Admin() {
  const [guests, setGuests] = useState<Guest[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const [totalRSVPs, setTotalRSVPs] = useState(0)
  const [totalGuests, setTotalGuests] = useState(0)
  const [attendingCount, setAttendingCount] = useState(0)

  const [sortBy, setSortBy] = useState("name")

  const navigate = useNavigate()

  useEffect(() => {
    const fetchGuests = async () => {
      setLoading(true)

      const { data, error } = await supabase
        .from("guests")
        .select("*")

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

  const sortedGuests = [...guests].sort((a, b) => {
    switch (sortBy) {
      case "name":
        return a.name.localeCompare(b.name)

      case "party":
        return (b.party || 1) - (a.party || 1)

      case "allergies":
        return Number(Boolean(b.allergies?.trim())) -
          Number(Boolean(a.allergies?.trim()))

      case "newest":
        if (a.created_at && b.created_at) {
          return (
            new Date(b.created_at).getTime() -
            new Date(a.created_at).getTime()
          )
        }

        return b.id - a.id

      default:
        return 0
    }
  })

  const handleDelete = async (id: number) => {
    await supabase
      .from("guests")
      .delete()
      .eq("id", id)

    setGuests((prev) =>
      prev.filter((g) => g.id !== id)
    )
  }

  const handleToggleAttending = async (guest: Guest) => {
    await supabase
      .from("guests")
      .update({ attending: !guest.attending })
      .eq("id", guest.id)

    setGuests((prev) =>
      prev.map((g) =>
        g.id === guest.id
          ? { ...g, attending: !g.attending }
          : g
      )
    )
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

      <div style={{ marginBottom: "1rem" }}>
        <label>Sort By: </label>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="name">Name (A-Z)</option>
          <option value="newest">Recently Added</option>
          <option value="party">Largest Party</option>
          <option value="allergies">Has Allergies</option>
        </select>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : (
        <>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Party</th>
                <th>Allergies</th>
                <th>Attending</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {sortedGuests.map((guest) => (
                <tr key={guest.id}>
                  <td>{guest.name}</td>
                  <td>{guest.email}</td>
                  <td>{guest.phone_number}</td>
                  <td>{guest.party}</td>
                  <td>{guest.allergies}</td>
                  <td>{guest.attending ? "Yes" : "No"}</td>

                  <td>
                    <button
                      id="round"
                      onClick={() =>
                        handleToggleAttending(guest)
                      }
                    >
                      Toggle
                    </button>

                    <button
                      id="red"
                      onClick={() =>
                        handleDelete(guest.id)
                      }
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div id="mobileCards">
            {sortedGuests.map((guest) => (
              <div
                key={guest.id}
                className="guest-card"
              >
                <div id="rsvpDetails">
                  <p><strong>Name:</strong> {guest.name}</p>
                  <p><strong>Email:</strong> {guest.email}</p>
                  <p><strong>Phone:</strong> {guest.phone_number}</p>
                  <p><strong>Party:</strong> {guest.party}</p>
                  <p><strong>Allergies:</strong> {guest.allergies}</p>
                  <p>
                    <strong>Attending:</strong>{" "}
                    {guest.attending ? "Yes" : "No"}
                  </p>
                </div>

                <div className="actions">
                  <button
                    id="round"
                    onClick={() =>
                      handleToggleAttending(guest)
                    }
                  >
                    Toggle
                  </button>

                  <button
                    id="red"
                    onClick={() =>
                      handleDelete(guest.id)
                    }
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      <div id="adminButtons">
        <button
          id="round"
          onClick={() => supabase.auth.signOut()}
        >
          Log Out
        </button>

        <button
          id="red"
          onClick={() => navigate("/")}
        >
          Home Page
        </button>
      </div>
    </div>
  )
}
import { useEffect, useState } from "react"
import { supabase } from "../supabaseClient"

interface Guest {
  id: number
  name: string
  email: string
  attending: boolean
}

export function Admin() {
  const [guests, setGuests] = useState<Guest[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchGuests = async () => {
      setLoading(true)
      const { data, error } = await supabase.from("guests").select("*")
      if (error) setError(error.message)
      else if (data) setGuests(data)
      setLoading(false)
    }

    fetchGuests()
  }, [])

  const handleDelete = async (id: number) => {
    await supabase.from("guests").delete().eq("id", id)
    setGuests((prev) => prev.filter((g) => g.id !== id))
  }

  const handleToggleAttending = async (guest: Guest) => {
    await supabase
      .from("guests")
      .update({ attending: !guest.attending })
      .eq("id", guest.id)
    setGuests((prev) =>
      prev.map((g) =>
        g.id === guest.id ? { ...g, attending: !g.attending } : g
      )
    )
  }

  return (
    <div>
      <h1>Guest List (Admin)</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Attending</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {guests.map((guest) => (
              <tr key={guest.id}>
                <td>{guest.name}</td>
                <td>{guest.email}</td>
                <td>{guest.attending ? "Yes" : "No"}</td>
                <td>
                  <button onClick={() => handleToggleAttending(guest)}>
                    Toggle Attending
                  </button>
                  <button onClick={() => handleDelete(guest.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <button onClick={() => supabase.auth.signOut()}>Log Out</button>
    </div>
  )
}
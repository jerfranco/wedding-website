import { useEffect, useState } from 'react'
import { supabase } from '../supabaseClient'

interface Guest {
  id: number
  name: string
  attending: boolean
}

export function Guests() {
  const [guests, setGuests] = useState<Guest[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchGuests = async () => {
      setLoading(true)
      const { data, error } = await supabase.from('guests').select('*')

      if (error) {
        console.error('Error fetching guests:', error)
        setError(error.message)
      } else if (data) {
        setGuests(data)
      }

      setLoading(false)
    }

    fetchGuests()
  }, [])

  return (
    <div>
      {loading ? (
        <p>Loading guests...</p>
      ) : error ? (
        <p>Failed to load guests: {error}</p>
      ) : (
        <ul>
          {guests.map((guest) => (
            <li key={guest.id}>
              {guest.name} - {guest.attending ? 'Yes' : 'No'}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

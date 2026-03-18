import { useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { supabase } from "./supabaseClient"

import { Home } from "./components/Home"
import { RSVPForm } from "./components/RSVPform"
import { Admin } from "./components/Admin"
import { Login } from "./components/Login"

const ALLOWED_EMAILS = import.meta.env.VITE_ADMIN_EMAILS.split(",")

function App() {
  const [user, setUser] = useState<any>(null)
  const [loadingUser, setLoadingUser] = useState(true)

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user ?? null)
      setLoadingUser(false)
    })

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })

    return () => listener.subscription.unsubscribe()
  }, [])

  if (loadingUser) return <p>Loading...</p>

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h1>Welcome to Our Wedding</h1>
              <Home />
              <RSVPForm />
              {/* <a href="/admin">Admin Login</a> */}
            </>
          }
        />
        <Route
          path="/admin"
          element={
            user && ALLOWED_EMAILS.includes(user.email)
              ? <Admin />
              : <Login onLogin={() => supabase.auth.getUser()} />
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  )
}

export default App
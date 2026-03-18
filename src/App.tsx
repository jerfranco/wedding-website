import { Guests } from './components/Guests'
import {RSVPForm} from './components/RSVPform'
import {Home} from './components/Home'

function App() {
  return (
    <div>
      <h1>Welcome to Our Wedding</h1>
      <Home/>
      <RSVPForm />
      <Guests />
    </div>
  )
}

export default App
import { useState } from 'react';
import './App.css'
import { LoadingScreen } from './components/LoadingScreen';
import './index.css'

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  // return <> 
  // {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}{" "} 
  // </>; } 

return (
  <>
    {!isLoaded ? (
      <LoadingScreen onComplete={() => setIsLoaded(true)} />
    ) : (<LoadingScreen onComplete={() => setIsLoaded(false)} />)}
  </>
)
}
export default App

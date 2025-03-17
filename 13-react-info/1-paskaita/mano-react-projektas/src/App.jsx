import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <Header />

      <section>
        <div>
          <div>
            <h3>What we do</h3>
            <h4>Some services we provide for our children</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius
              enim in eros elementum tristique.
            </p>

            <div>
              <div>
                <h3>Family support</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius
                  enim in eros.
                </p>
              </div>
              <div>
                <h3>Health benefits</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius
                  enim in eros.
                </p>
              </div>
              <div>
                <h3>Scholarships</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius
                  enim in eros.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <h6>© 2025 My Website. All rights reserved.</h6>
      </footer>
    </>
  );
}

export default App;

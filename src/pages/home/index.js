import { useNavigate } from 'react-router-dom'

const Index = () => {
  const navigate = useNavigate()
  return (
    <section className="home">
      <div className="text">
        <h3>SO, YOU WANT TO TRAVEL TO</h3>
        <h2>SPACE</h2>
        <p>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="btn-container">
        <button
          onClick={() => {
            navigate('/destination')
          }}
        >
          Explore
        </button>
      </div>
    </section>
  )
}
export default Index

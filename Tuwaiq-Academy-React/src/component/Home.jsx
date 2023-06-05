import {Link} from 'react-router-dom'

function Home() {
  return (
    <div className="home">
    <main>
        <div className="bootcamps">
            <h1>bootcamps</h1>

                
                <Link className="start" to ={`/register`}>Let's Start </Link>
            
        </div>

    </main>        
    </div>
  )
}

export default Home
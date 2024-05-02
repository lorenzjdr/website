
import EmailSection from '../../components/EmailSection/EmailSection';
import Message from '../../components/Message/Message';
import NavBar from '../../components/NavBar/NavBar';
import './Home.css'

function Home()
{
  // JSX: JS XML
  return <body className="bod">
    <div>
      <NavBar />
      <Message />
        <div className="card-row">
        </div>
        <div className="footer">
        <EmailSection />
        </div>
    </div>
    </body>
}


export default Home;
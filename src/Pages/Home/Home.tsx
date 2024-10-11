import CardContainer from '../../components/CardContainer/CardContainer';
import EmailSection from '../../components/EmailSection/EmailSection';
import Message from '../../components/Message/Message';
import NavBar from '../../components/NavBar/NavBar';
import './Home.css'

function Home()
{
  return <body className="bod">
    <div>
      <div className='sticky'>
      <NavBar />
      </div>
      <Message />
      <CardContainer/>
        <div className="footer">
        <EmailSection />
        </div>
    </div>
    </body>
}


export default Home;
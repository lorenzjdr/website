import './EmptyPage.css';

interface EmptyPageProps {
   message: string;
}

const EmptyPage = ({message} : EmptyPageProps) => {
   return (
      <div className="midContainer">
         <h1>{message}</h1>
      </div>
   );
}

export default EmptyPage;

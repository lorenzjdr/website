import './Card.css'

const Card = () =>{
  return (
    <div className="card">
      <img 
        src=""
        alt="Image" 
        className="card-image" 
      />
      <div className="card-body">
        <h3 className="card-title">Card Title</h3>
        <p className="card-text">
            Description and etc
        </p>
        <a className="" href="demo/link">Demo</a>
      </div>
    </div>
  );
}

export default Card;

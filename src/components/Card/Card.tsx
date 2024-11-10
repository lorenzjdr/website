import './Card.css';

interface CardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  linkText?: string;
}

const Card = ({ title, description, image, link, linkText }: CardProps) => {
  const placeholderImage = 'src/assets/placeholder.png';

  return (
    <div className="card">
      <img 
        src={image || placeholderImage}
        alt="Image" 
        className="card-image" 
      />
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{description}</p>
        <a className="card-link" href={link}>{linkText || 'WIP'}</a>
      </div>
    </div>
  );
}

export default Card;

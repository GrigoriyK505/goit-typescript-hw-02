import s from './ImageCard.module.css'

type ImageCardProps = {
    item: SelectImage;
    openModal: (imageUrl: string) => void; 
}

const ImageCard: React.FC<ImageCardProps> = ({ item, openModal }) => {
    return (
        <div>
            <img
                src={item.urls.regular}
                alt={item.alt_description}
                onClick={() => openModal(item.urls.regular)}
                className={s.card} />
        </div>
    );
}
export default ImageCard 
import s from './ImageCard.module.css'

const ImageCard = ({ item, openModal }) => {
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
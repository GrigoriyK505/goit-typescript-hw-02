import ImageCard from "../ImageCard/ImageCard"
import s from './ImageGallery.module.css'

const ImageGallery = ({ articles, openModal }) => {
    
    return (
        <div>
            <ul className={s.gallery}>
                {articles.map((item) => (
                    <li key={item.id} className={s.gallery-item}>
                        <ImageCard item={item} openModal={openModal} />
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default ImageGallery
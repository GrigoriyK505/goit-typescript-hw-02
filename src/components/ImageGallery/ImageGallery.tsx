import ImageCard from "../ImageCard/ImageCard"
import s from './ImageGallery.module.css'

type ImageGalleryProps = {
    articles: SelectImage;
    openModal: (imageUrl: string) => void; 

}

const ImageGallery: React.FC<ImageGalleryProps> = ({ articles, openModal }) => {
    
    return (
        <div>
            <ul className={s.gallery}>
                {articles.map((item) => (
                    <li key={item.id} className={s.galleryItem}>
                        <ImageCard item={item} openModal={openModal} />
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default ImageGallery
import React, { MouseEvent } from 'react';
import s from './App.module.css'
import fetchRequest from '../../services/api';
import toast, { Toaster } from 'react-hot-toast';
import { useEffect, useState } from 'react';
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import SearchBar from '../SearchBar/SearchBar';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ImageModal from '../ImageModal/ImageModal';

function App() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>("");
  const [articles, setArticles] = useState<SelectImage[]>([])
  const [targetImage, setTargetImage] = useState<string | null>(null)
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)

  useEffect(() => {
    if (!query) return;
    const getData = async () => {
      setLoading(true);
      setError(false);
     
      try {
        const data = await fetchRequest(query, page);
        if (data.length === 0) {
          toast.error("No images founded for this request!", {
            style: {
              background: "#b1cc29",
              color: "#fff",
              fontWeight: "bold",
              padding: "12px",
              borderRadius: "10px",
            },
            position: "top-right"
          });
        }
        setArticles((prev) => [...prev, ...data])

      } catch (error) {
        console.error(error);
        setError(true);
        toast.error("Oops, something went wrong!", {
          style: {
            background: "red",
            color: "#fff",
            fontWeight: "bold",
            padding: "12px",
            borderRadius: "10px",
          },
          position: "top-right"
        });

      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [query, page]);
  
  const handleSetQuery = (newQuery: string) => {
    setQuery(newQuery);
    setArticles([]);
    setPage(1);
  };

  const openModal = (imageUrl: string) => {
    setTargetImage(imageUrl);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setTargetImage(null);
    setModalIsOpen(false);
  };

  const handleClick = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <section className={s.container}>
      <Toaster />
      <SearchBar handleSetQuery={handleSetQuery} />
      {!error ? (
        <ImageGallery openModal={openModal} articles={articles}/>
      ) : (
          <ErrorMessage />
      )}

      <Loader loading={loading} />
      
      {articles.length > 0 && !loading && !error && (
        <LoadMoreBtn handleClick={handleClick} />
      )}
      <ImageModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        targetImage={targetImage}
      />
    </section>
  );
}

export default App;

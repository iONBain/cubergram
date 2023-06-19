import { useEffect, useState } from "react";

const InfiniteScroll = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
  
    // ... rest of the component
    const fetchData = async () => {
        setIsLoading(true);
        setError(null);
      
        try {
          const response = await fetch(`/api/posts`);
          const {data:{posts:data}} = await response.json();
          console.log(data,"hi ds")
          setItems(prevItems => [...prevItems, ...data]);
          setPage(prevPage => prevPage + 1);
        } catch (error) {
            setError(error);
        } finally {
          setIsLoading(false);
        }
      };
      useEffect(() => {
        fetchData();
      }, []);

      const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isLoading) {
          return;
        }
        fetchData();
      };
      
      useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, [isLoading]);

      return (
        <div>
          <ul>
            {items.map(item => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
          {isLoading && <p>Loading...</p>}
          {error && <p>Error: {error.message}</p>}
        </div>
      );
  };


  export default InfiniteScroll
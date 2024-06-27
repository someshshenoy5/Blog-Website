// AppProvider.js
import { createContext, useState, useEffect } from "react";
import { fetchBlogs } from "./api";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);
  const [isError, setError] = useState(null);

  useEffect(() => {
    const fetchBlogsData = async () => {
      try {
        const data = await fetchBlogs();
        setBlogs(data);
      } catch (error) {
        setError(error);
      }
    };
    fetchBlogsData();
  }, []);

  return (
    <AppContext.Provider value={{ blogs, isError }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };

import { createContext, useState } from "react";

export const BookmarkContext = createContext({});

export function BookmarkProvider({ children }) {
  const [bookmark, setBookmark] = useState([]);

  const onClickBookmark = (e) => {
    const selectedProuduct = e.target.value;

    const index = bookmark.findIndex((markedProduct) => markedProduct.id === selectedProuduct.id);
    if (index === -1) {
      setBookmark((prev) => [...prev, selectedProuduct]);
    } else {
      setBookmark((prev) => [...prev.slice(0, index), ...prev.slice(index + 1)]);
    }
  };

  return (
    <BookmarkContext.Provider value={{ bookmark, onClickBookmark }}>
      {children}
    </BookmarkContext.Provider>
  );
}

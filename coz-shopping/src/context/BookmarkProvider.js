import { createContext, useState } from "react";

export const BookmarkContext = createContext({});

export function BookmarkProvider({ children }) {
  const [bookmark, setBookmark] = useState({});

  const onClickBookmark = (product) => {
    if (product.id in bookmark) {
      setBookmark((prev) => {
        const current = { ...prev };
        delete current[product.id];
        return current;
      });
    } else {
      setBookmark((prev) => ({ ...prev, [product.id]: product }));
    }
  };

  // console.log("bookmark:", bookmark);

  return (
    <BookmarkContext.Provider value={{ bookmark, onClickBookmark }}>
      {children}
    </BookmarkContext.Provider>
  );
}

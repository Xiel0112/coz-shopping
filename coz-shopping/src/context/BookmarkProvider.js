import { createContext, useState } from "react";

export const BookmarkContext = createContext({});

export function BookmarkProvider({ children }) {
  const [bookmark, setBookmark] = useState({});

  const onClickBookmark = (e) => {
    const selectedProuduct = e.target.value;

    // bookmark 객체에 북마크할 상품의 id가 있다면 ? 삭제 : 등록
    if (bookmark in selectedProuduct.id) {
      setBookmark((prev) => ({ ...prev, [selectedProuduct.id]: selectedProuduct }));
    } else {
      setBookmark((prev) => {
        const current = { ...prev };
        delete current[selectedProuduct.id];
        return current;
      });
    }
  };

  return (
    <BookmarkContext.Provider value={{ bookmark, onClickBookmark }}>
      {children}
    </BookmarkContext.Provider>
  );
}

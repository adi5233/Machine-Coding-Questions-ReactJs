import { useState, useCallback, useRef } from "react";
// import "./App.css";
import InfiniteScroll from "./InfiniteScroll";
function Main() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  const controllerRef = useRef(null);

  const handleInput = useCallback((e) => {
    setQuery(e.target.value);
  }, []);

  const renderItem = useCallback(({ title }, key, ref) => (
    <div ref={ref} key={key}>
      {title}
    </div>
  ));

  const getData = useCallback((query, pageNumber) => {
    return new Promise(async (resolve, reject) => {
      try {
        if (controllerRef.current) controllerRef.current.abort();
        controllerRef.current = new AbortController();

        const promise = await fetch(
          "https://openlibrary.org/search.json?" +
            new URLSearchParams({
              q: query,
              page: pageNumber,
            }),
          { signal: controllerRef.current.signal }
        );
        const data = await promise.json();
        console.log(data);
        resolve();
        setData((prevData) => [...prevData, ...data.docs]);
      } catch (e) {
        reject();
      }
    });
  }, []);
  return (
    <>
      <div className=" bg-slate-200 p-10">
        <h1>Infinite scroll</h1>
        <input
          type="text"
          placeholder="search"
          value={query}
          onChange={handleInput}
          className="outline-none"
        />

        <InfiniteScroll
          renderListItem={renderItem}
          getData={getData}
          listData={data}
          query={query}
        />
      </div>
    </>
  );
}

export default Main;

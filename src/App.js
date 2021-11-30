import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import React, { useState, useEffect } from "react";
import Card from "./components/Card/Card";
import Filter from "./components/Filter/Filter";
import NavBar from "./components/NavBar/NavBar";
import Pagination from "./components/Pagination/Pagination";
import Search from "./components/Search/Search";

function App() {
  // let api = `https://rickandmortyapi.com/api/character/?page=1`;

  let [fetchedData, updateFetchedData] = useState([]);
  let { info, results } = fetchedData;

  let [pageNumber, setPageNumber] = useState(1);
  let [search, setSearch] = useState("");

  let [status, setStatus] = useState("");
  let [gender, setGender] = useState("");
  let [species, setSpecies] = useState("");

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  console.log(results);

  return (
    <div className="App">
      <h1 className="text-center mb-3">Characters</h1>
      <Search setSearch={setSearch} setPageNumber={setPageNumber} />
      <div className="container">
        <div className="row">
          <Filter
            pageNumber={pageNumber}
            status={status}
            updateStatus={setStatus}
            updateGender={setGender}
            updateSpecies={setSpecies}
            updatePageNumber={setPageNumber}
          />
          <div className=" col-12 d-flex">
            <div className="d-flex col-12">
              <Card results={results} />
            </div>
          </div>
        </div>
      </div>
      <Pagination
        info={info}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />
    </div>
  );
}

export default App;

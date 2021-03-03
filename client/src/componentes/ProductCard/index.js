import react, { useEffect, useState } from "react"
import { connect } from "react-redux";
import { setSearch, maxPrice, minPrice, newCondition, usedCondition } from "../redux/actions"
import ProductCard from "./ProductCard"
import Pagination from "../pagination/pagination"

const Catalog = ({
    string,
    results,
    maxPrice,
    minPrice,
    setSearch,
    resultsNew,
    resultsUsed,
    newCondition,
    usedCondition,
    }) => {

    const [resultados, setResultados] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [ResultsPerPage] = useState(25)
    
    useEffect(() => {
        setResultados(results)
    }, [results])
    useEffect(() => {
        setResultados(resultsUsed)
    }, [resultsUsed])
    useEffect(() => {
        setResultados(resultsNew)
    }, [resultsNew])

    useEffect(() => {
        paginate(1)
    }, [resultados])


    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const indexOfLastPost = currentPage * ResultsPerPage;
    const indexOfFirstPost = indexOfLastPost - ResultsPerPage;
    const currentResults = resultados.slice(indexOfFirstPost, indexOfLastPost);
    const button = "background-color:#ffc107;color:black"
    return (
        <div>
            <p>ordenar por </p>
            
            <button className="btn btn-primary"
                Style={button}
                onClick={() => minPrice()}>Menor precio</button>
            <button className="btn btn-primary"
                Style={button}
                onClick={() => maxPrice()}>Mayor precio</button>
            <button className="btn btn-primary"
                Style={button}
                onClick={() => setSearch(string)}>Mas relevante</button>
            <br /><br />
            <p>condicion</p>
            <button className="btn btn-primary"
                Style={button}
                onClick={() => newCondition(resultados)}>nuevos</button>
            <button className="btn btn-primary"
                Style={button}
                onClick={() => usedCondition(resultados)}>usados</button>
            <br /><br />
            <div Style="justify-content: center">
                <ProductCard
                    Results={currentResults} />
            </div>
            <Pagination
                resultsPerPage={ResultsPerPage}
                totalresults={resultados.length}
                paginate={paginate}
            />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        results: state.results.results,
        resultsUsed: state.results.resultsUsed,
        resultsNew: state.results.resultsNew,
        string: state.results.string
    }
}

export default connect
    (mapStateToProps, { setSearch, maxPrice, minPrice, newCondition, usedCondition })
    (Catalog);
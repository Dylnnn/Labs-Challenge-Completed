import react, { useEffect } from "react"
import { connect } from "react-redux"
import { setSearch, setString } from "../redux/actions"
const Search = ({ setSearch, setString, results }) => {
  const handleSubmit = (e) => {
    e.preventDefault()

    let search = document.getElementById("search").value
    console.log(search)
    setSearch(search)
    setString(search)
  }
  return (

    <form onSubmit={handleSubmit} className="input-group mb-3">
      <button type="submit" className="btn btn-warning">buscar</button>
      <input type="text" className="form-control" placeholder="Buscar Porducto" id="search" aria-describedby="basic-addon1"></input>
    </form>

  )
}
const mapStateToProps = (state) => {
  return {
    results: state.results.results
  };
};

export default connect(mapStateToProps, { setSearch, setString })(Search);
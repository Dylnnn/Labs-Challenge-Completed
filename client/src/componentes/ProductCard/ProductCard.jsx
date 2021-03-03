import react from "react"

const ProductCard = ({ Results }) => (
    <div className="row">
        {Results.map(result => (
            <div className="card mb-3" Style="max-width:1180px;max-height:400px">
                <div className="row g-0">
                    <div className="col-sm-4" Style="display:flex;justify-content:center;align-items:center">
                        <img Style="max-width:300px;height:200px;border-radius:0.3rem" src={result.thumbnail} alt={result.title} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5>{result.title}</h5>
                            <p>{result.price}  {result.currency_id}</p>
                            <p>{result.condition === "used" ? "usado" : "nuevo"}</p>
                            <p>stock: {result.available_quantity}</p>
                            <button className="btn btn-primary">Comprar</button>
                        </div>
                    </div>
                </div>
            </div>
        ))}
    </div>
)


export default ProductCard
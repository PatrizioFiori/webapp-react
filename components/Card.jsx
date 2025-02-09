import { useNavigate, useParams } from "react-router-dom"

const Card = ({ item }) => {

    return (

        < div className="card-custom-info border text-center px-3 py-2" >
            <img className="py-2" src={item.image} alt="img-movie" style={{
                width: "100%",
                height: "auto",
                border: "1px solid black",
            }} />
            <div>
                <h5>{item.title}</h5>
                <p>{item.abstract}</p>
                <a className="btn border text-bg-primary" href={`/movies/${item.id}`} >Details</a>
            </div>
        </div>
    )
}

export default Card
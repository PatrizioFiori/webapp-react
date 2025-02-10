import { useState } from "react"
import axios from "axios";

const FormRecensioni = ({ movie_id }) => {


    const api_url = `${import.meta.env.VITE_API_URL}/${movie_id}/recensioni`;

    const initialFormData = {
        text: "",
        name: "",
        vote: "",
    }
    const [formData, setFormData] = useState(initialFormData);

    const handlerSubmit = (e) => {
        e.preventDefault()
        console.log("Recensione inviata");
        console.log(api_url)

        axios.post(api_url, formData, { headers: { "Content-Type": "application/json" } })
            .then(res => {
                console.log(res.data);
                setFormData(initialFormData)

            })
            .catch(err => {
                console.log(err);

            })

    }

    const setFieldValue = (e) => {
        const { value, name } = e.target
        setFormData((prev => ({ ...prev, [name]: value })))

    }

    return (
        <div className="card">
            <header className="card-header">
                <h1>Scrivi una recensione !</h1>
            </header>
            <form action="" onSubmit={handlerSubmit}>
                <div className="card-body">
                    <div className="form-group">
                        <label>Name</label>
                        <input
                            className="form-control my-3"
                            type="text"
                            name="name"
                            placeholder="Inserisci nome"
                            value={formData.name}
                            onChange={setFieldValue}
                        />
                    </div>

                    <div className="card-body">
                        <label>Recensione</label>
                        <textarea
                            className="form-control my-3"
                            type="text"
                            name="text"
                            placeholder="Scrivi la recensione"
                            value={formData.text}
                            onChange={setFieldValue}>

                        </textarea>
                    </div>
                    <div className="form-group">
                        <label>Voto</label>
                        <input
                            className="form-control my-3"
                            type="number"
                            name="vote"
                            min={1}
                            max={5}
                            placeholder="Inserisci un voto"
                            value={formData.vote}
                            onChange={setFieldValue}
                        />
                    </div>
                    <div className="d-flex justify-content-end">
                        <button
                            className="btn btn-primary"
                            type="submit"
                        >Invia recensione</button>
                    </div>

                </div>
            </form>
        </div>
    )
}

export default FormRecensioni
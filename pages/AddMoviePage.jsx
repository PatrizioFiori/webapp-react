import { useState } from "react"


const AddMoviePage = () => {

    const initialData = {
        title: "",
        director: "",
        abstract: "",
        genre: "",
        image: null



    }
    const [formData, setFormData] = useState(initialData)

    const handlSetValue = (e) => {
        setFormData(e.target.value)
    }


    const handlSubmit = (e) => {
        e.preventDefault()
    }

    return (

        <div className="container">
            <div className="card">
                <form action="#" onSubmit={handlSubmit}>
                    <div className="card-header">
                        <h1>Aggiungi un nuovo film</h1>
                    </div>
                    <div className="card-body">
                        <div className="form-group">
                            <label>Titolo</label>
                            <input
                                className="form-control my-3"
                                type="text"
                                name="title"
                                placeholder="Inserisci un titolo"
                                value={formData.title}
                                onChange={handlSetValue}
                            />
                        </div>
                        <div className="form-group">
                            <label>Director</label>
                            <input
                                className="form-control my-3"
                                type="text"
                                name="director"
                                placeholder="Inserisci chi ha diretto il film"
                                value={formData.director}
                                onChange={handlSetValue}
                            />
                        </div>
                        <div className="form-group">
                            <label>Genere</label>
                            <input
                                className="form-control my-3"
                                type="text"
                                name="genere"
                                placeholder="Inserisci il genere"
                                value={formData.genre}
                                onChange={handlSetValue}
                            />
                        </div>
                        <div className="form-group">
                            <label>Abstract</label>
                            <textarea
                                className="form-control my-3"
                                type="text"
                                name="director"
                                placeholder="Inserisci una breve descrizione del film"
                                value={formData.abstract}
                                onChange={handlSetValue}
                            />
                        </div>
                        <div className="form-group">
                            <label>Locandina</label>
                            <input
                                className="form-control my-3"
                                type="file"
                                name="image"
                                value={formData.image}
                                onChange={handlSetValue}
                            />
                        </div>

                    </div>
                    <div className="d-flex justify-content-end pb-4 px-4">
                        <button className="btn btn-primary" type="submit">Add</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddMoviePage
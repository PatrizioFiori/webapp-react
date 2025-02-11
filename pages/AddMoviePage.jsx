import { useState } from "react";

const AddMoviePage = () => {
    const initialData = {
        title: "",
        director: "",
        abstract: "",
        genre: "",
        image: null
    };

    const [formData, setFormData] = useState(initialData);

    const handleSetValue = (e) => {
        const { name, value, type } = e.target;

        if (type === "file") {
            setFormData((prev) => ({ ...prev, image: e.target.files[0] }));

        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className="container">
            <div className="card">
                <form action="#" onSubmit={handleSubmit}>
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
                                onChange={handleSetValue}
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
                                onChange={handleSetValue}
                            />
                        </div>
                        <div className="form-group">
                            <label>Genere</label>
                            <input
                                className="form-control my-3"
                                type="text"
                                name="genre"
                                placeholder="Inserisci il genere"
                                value={formData.genre}
                                onChange={handleSetValue}
                            />
                        </div>
                        <div className="form-group">
                            <label>Abstract</label>
                            <textarea
                                className="form-control my-3"
                                name="abstract"
                                placeholder="Inserisci una breve descrizione del film"
                                value={formData.abstract}
                                onChange={handleSetValue}
                            />
                        </div>
                        <div className="form-group">
                            <label>Locandina</label>
                            <input
                                className="form-control my-3"
                                type="file"
                                name="image"
                                accept="image/*"
                                onChange={handleSetValue}
                            />
                        </div>
                    </div>
                    <div className="d-flex justify-content-end pb-4 px-4">
                        <button className="btn btn-primary" type="submit">
                            Aggiungi
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddMoviePage;

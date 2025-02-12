import { useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const AddMoviePage = () => {


    const fileInputRef = useRef(null);
    const api_url = import.meta.env.VITE_API_URL;
    const navigate = useNavigate()

    const initialData = {
        title: "",
        director: "",
        abstract: "",
        genre: "",
        image: null
    };

    const initialThumb = '/image/no-image.jpg'

    const [formData, setFormData] = useState(initialData);
    const [thumb, setThumb] = useState(initialThumb)

    const handleSetValue = (e) => {
        const { name, value, type } = e.target;

        if (type === "file") {
            setThumb(URL.createObjectURL(e.target.files[0]));
            setFormData((prev) => ({ ...prev, image: e.target.files[0] }));

        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const dataToSend = new FormData();
        for (let key in formData) {
            dataToSend.append(key, formData[key])
        }
        axios.post(api_url, dataToSend, {
            headers: { 'Content-Type': 'multipart/form-data' }
        })
            .then(() => navigate("/movies"))
            .catch((err) => console.log(err))
    };

    return (
        <div className="container py-5">
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
                                onChange={handleSetValue}
                                ref={fileInputRef}
                            />

                            <img className="thumb" src={thumb} />
                        </div>
                    </div>
                    <div className="d-flex justify-content-between pb-4 px-4">
                        <button className="btn btn-danger" onClick={() => {
                            setFormData(initialData);
                            setThumb(initialThumb);

                            if (fileInputRef.current) {
                                fileInputRef.current.value = "";
                            }
                        }}>
                            Elimina
                        </button>


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

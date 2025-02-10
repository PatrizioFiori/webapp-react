import Star from "./Star";

const Recensioni = ({ recensioni }) => {
    return (
        <div className="sezione-recensioni">
            <h2 className="py-5">Recensioni</h2>
            <div>
                {recensioni && recensioni.length > 0 ? (
                    recensioni.map((recensione) => (
                        <div key={recensione.id} className="">
                            <h3>{recensione.name}</h3>
                            <Star vote={recensione.vote} />
                            <p>{recensione.text}</p>
                        </div>
                    ))
                ) : (
                    <p>Nessuna recensione disponibile.</p>
                )}
            </div>
        </div>
    );
};

export default Recensioni;

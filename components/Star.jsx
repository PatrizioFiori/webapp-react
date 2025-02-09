const Star = ({ vote }) => {
    const maxStars = 5;

    const stars = [];
    for (let index = 0; index < maxStars; index++) {
        stars.push(
            index < vote ? (
                <i key={index} className="bi bi-star-fill text-warning"></i>
            ) : (
                <i key={index} className="bi bi-star text-warning"></i>
            )
        );
    }


    return <div>{stars}</div>;
};

export default Star;

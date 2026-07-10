export const Child = ({ image, title, price, description }) => {
    return (
        <>
            <img
                src={image}
                alt={title}
                className="card-img-top"
                style={{ height: "250px", objectFit: "cover" }}
            />

            <div className="card-body">
                <h5 className="card-title text-center">{title}</h5>

                <p className="card-text text-center text-muted">
                    {description}
                </p>

                <h4 className="text-success text-center mb-3">
                    ₹{price}
                </h4>

                <button className="btn btn-primary w-100">
                    Add to Cart
                </button>
            </div>
        </>
    )
};
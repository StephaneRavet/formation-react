import React from 'react';

function Counter(props) {
    return (
        <div>
            <div className="card" style={{ width: '18rem' }}>
                <img src="https://ericheymans.b-cdn.net/wp-content/uploads/2012/08/dawn-field-grass-164025.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button className="btn btn-primary">Go somewhere</button>
                </div>
            </div>
        </div>
    );
}

export default Counter;
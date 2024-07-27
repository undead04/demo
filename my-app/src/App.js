import React, { useState, useEffect } from 'react';

function App() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('/api/naruto')
            .then(response => response.json())
            .then(data => setData(data));
    }, []);

    return (
        <div>
            <h1>Hello from React!</h1>
            {data ? (
                <div>
                    <h2>{data.name}</h2>
                    <p>Age: {data.age}</p>
                    <p>Address: {data.address}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default App;

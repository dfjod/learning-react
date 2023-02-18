import { useState } from 'react';

function Header ({ title }) {
    return <h1>{ title ? title : 'Default Title' }</h1>;
}


// Export default is used to distinguish which component to render as the main component of the page

export default function HomePage () {
    const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
    const [likes, setLikes] = useState(0);

    return (
        <div>
            <Header />
            <Header title="Welcome to my Home page!"/>
            <Header title="Other title!"/>

            <ul>
                {names.map(name => (
                        <li key={name}>{name}</li>
                ))}
            </ul>

            <button onClick={() => setLikes(likes + 1)}>Like({likes})</button>
        </div>
    );
}
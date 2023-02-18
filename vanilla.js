// Imperative programming

// const app = document.getElementById('app');
// const h1 = document.createElement('h1');
// const content = document.createTextNode('Develop cool stuff!');

// h1.appendChild(content);
// app.appendChild(h1);

// Declerative programming with React
const app = document.getElementById('app');


// React component, must start with capital letter
// Curly braces lets Javascript into JSX, anything that evaluates to a single value at the end can be inserted into curly braces
function Header ({ title }) {
    return <h1>{ title ? title : 'Default Title' }</h1>;
}

// Nesting components
function HomePage () {
    const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
    const [likes, setLikes] = React.useState(0);

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

// React components must show up as html elements, passing a top-level component
ReactDOM.render (<HomePage />, app);
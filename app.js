const React = require('react');
const ReactDOM = require('react-dom/client');

//React element => object => html element(render)
const element = React.createElement('h1', {id:"head"}, 'Hello World');

//React component
const Component = () => {
    return ( <div>
        {element}
        <h1 id="heading">Hello World using JSX</h1>
        </div>)
} 

//jsx - html-like syntax or XML-like syntax
// const jsxElement = <h1 id="heading" className= "heads">Hello World using JSX</h1>;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Component/>);

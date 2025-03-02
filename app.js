/**
 * 
 * <div id="parent">
 *  <div id="child">
 *     <h1>H1</h1>
 *     <h2>H2</h2>
 * </div>
 * 
 * <div id="child2">
 *    <h1>H1</h1>
 *    <h2>H2</h2>
 * </div>
 *  
 * </div>
 * 
 */

const React = require('react');
const ReactDOM = require('react-dom/client');

const heading = React.createElement('div', { id: "parent" }, [
    React.createElement('div', { id: "child" }, [
        React.createElement('h1', {}, 'H1'),
        React.createElement('h2', {}, 'H2'),
    ]),
    React.createElement('div', { id: "child2" }, [
        React.createElement('h1', {}, 'H1'),
        React.createElement('h2', {}, 'H2'),
    ])
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(heading);


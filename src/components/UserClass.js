import React from 'react';

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        // console.log(props)
        this.state = {
            // count: 0,
            userInfo: {
                name: 'Sample Name',
                location: 'Sample Location',
                contact: 'Sample Contact',
                avatar_url: 'Sample URL'
            }
        }
    }

    async componentDidMount() {
        const data = await fetch(' https://api.github.com/users/P-ayush');
        const response = await data.json();
        // console.log(response)
        this.setState({ userInfo: response })
    }

    componentWillUnmount() {
        console.log('Component is unmounted')
    }
    render() {
        const { login, location, contact, avatar_url } = this.state.userInfo;
        return (

            <div className='user-card'>
                {/* <h2>Count : {this.state.count}</h2> */}
                {/* <button onClick={() => {
                    this.setState({ count: this.state.count + 1 })
                }}>Increse Count</button> */}
                <img src={avatar_url} alt='user' />
                <div>{login}</div>
                <div>{location}</div>
                <div>{contact}</div>
            </div>
        )
    }
}

export default UserClass;
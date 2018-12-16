import React from 'react';
import { Redirect } from 'react-router';


export class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { email: '', password: '', isAuthenticated: false };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch('https://players-api.developer.alchemy.codes/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
            })
        }).then(response => {
            return response.json();
        }).then(resp => {
            console.log("Logged in successfully " + JSON.stringify(resp));

            // store the user information
            localStorage.setItem("token", resp.token);
            this.setState({ isAuthenticated : true});
        });
    }

    handleInputChange(event) {
        const target = event.target;
        this.setState({
            [target.name]: target.value
        });
    }

    render() {
        if (this.state.isAuthenticated) {
            return <Redirect to='/roster' />;
        } else {
            return (
                <form onSubmit={this.handleSubmit}>

                    <label>
                        Email:
                  <input type="text" name="email" value={this.state.email} onChange={this.handleInputChange} />
                    </label>

                    <label>
                        Password:
                  <input type="text" name="password" value={this.state.password} onChange={this.handleInputChange} />
                    </label>

                    <input type="submit" value="Submit" />
                </form>
            );
        }

    }
}

export default Login;
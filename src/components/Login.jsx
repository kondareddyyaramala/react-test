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
            this.setState({ isAuthenticated: true });
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
                    <div className="form-group">
                        <label className="form-check-label">
                            Email: </label>
                        <input type="text" className="form-control" name="email" value={this.state.email} onChange={this.handleInputChange} />

                    </div>
                    <div className="form-group">
                        <label className="form-check-label">
                            Password:</label>
                        <input type="text" className="form-control" name="password" value={this.state.password} onChange={this.handleInputChange} />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            );
        }

    }
}

export default Login;
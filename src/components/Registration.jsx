import React from 'react';
import { Redirect } from 'react-router';

export class Registration extends React.Component {
    constructor(props) {
        super(props);
        this.state = { first_name: '', last_name: '', email: '', password: '', confirm_password: '', isAcctCreated: false };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        // save the user
        console.log("State ", this.state);
        fetch('https://players-api.developer.alchemy.codes/api/user', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                first_name: this.state.first_name,
                last_name: this.state.last_name,
                email: this.state.email,
                password: this.state.password,
                confirm_password: this.state.confirm_password
            })
        }).then(response => {
           return response;
        }).then(resp => {
            if (response.ok) {
                // if account create is successful then route the user to roster page
                this.setState({ isAcctCreated: true });
            }
        });
    }

    handleInputChange(event) {
        const target = event.target;
        this.setState({
            [target.name]: target.value
        });
    }

    render() {
        if (this.state.isAcctCreated) {
            return <Redirect to='/roster' />;
        } else {
            return (
                <form onSubmit={this.handleSubmit}>
                    <label>
                        First Name:
                  <input type="text" name="first_name" value={this.state.first_name} onChange={this.handleInputChange} />
                    </label>
                    <label>
                        Last Name:
                  <input type="text" name="last_name" value={this.state.last_name} onChange={this.handleInputChange} />
                    </label>

                    <label>
                        Email:
                  <input type="text" name="email" value={this.state.email} onChange={this.handleInputChange} />
                    </label>

                    <label>
                        Password:
                  <input type="text" name="password" value={this.state.password} onChange={this.handleInputChange} />
                    </label>
                    <label>
                        Confirm Password:
                  <input type="text" name="confirm_password" value={this.state.confirm_password} onChange={this.handleInputChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            );
        }

    }
}

export default Registration;

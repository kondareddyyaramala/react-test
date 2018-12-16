import React from 'react';
import { Redirect } from 'react-router';
export class Player extends React.Component {

    constructor(props) {
        super(props);
        this.state = { first_name: '', last_name: '', rating: '', handedness: '', isCreatePlayerSuccessful: false };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        this.setState({
            [target.name]: target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch('https://players-api.developer.alchemy.codes/api/players', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify({
                first_name: this.state.first_name,
                last_name: this.state.last_name,
                rating: this.state.rating,
                handedness: this.state.handedness
            })
        }).then(response => {
            return response.json();
        }).then(resp => {
            if (resp.success) {
                this.setState({ isCreatePlayerSuccessful: true })
            }
        });
    }

    render() {
        if (this.state.isCreatePlayerSuccessful) {
            return <Redirect to='/roster' />;
        }
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
                    Rating:
<input type="text" name="rating" value={this.state.rating} onChange={this.handleInputChange} />
                </label>

                <label>
                    Handedness:
<input type="text" name="handedness" value={this.state.handedness} onChange={this.handleInputChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default Player;
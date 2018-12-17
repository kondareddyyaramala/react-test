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
                <div className="form-group">
                    <label className="form-check-label">
                        First Name:</label>
                    <input type="text" className="form-control" name="first_name" value={this.state.first_name} onChange={this.handleInputChange} />

                </div>
                <div className="form-group">
                    <label className="form-check-label">
                        Last Name:</label>
                    <input type="text" className="form-control" name="last_name" value={this.state.last_name} onChange={this.handleInputChange} />

                </div>
                <div className="form-group">
                    <label className="form-check-label">
                        Rating:</label>
                    <input type="text" className="form-control" name="rating" value={this.state.rating} onChange={this.handleInputChange} />

                </div>
                <div className="form-group">
                    <label className="form-check-label">
                        Handedness:</label>
                    <input type="text" className="form-control" name="handedness" value={this.state.handedness} onChange={this.handleInputChange} />

                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        )
    }
}

export default Player;
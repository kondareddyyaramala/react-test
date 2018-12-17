import React from 'react';
import { Link } from 'react-router-dom';
export class Roster extends React.Component {

    constructor(props) {
        super(props);
        this.state = { players: [] };
        // fetch the users
        fetch('https://players-api.developer.alchemy.codes/api/players', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`
            }
        }).then(response => {
            return response.json();
        }).then(resp => {
            console.table("Players ::: " + JSON.stringify(resp.players));
            this.setState({ players: resp.players ? resp.players : [] });
        });
    }

    render() {
        const players = this.state.players || [];
        return (
            <div>
                <button type="submit" className="btn btn-primary">
                    <Link to='/player/new' style={{color: 'white'}}>Add a new player</Link>
                </button>
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Rating</th>
                            <th scope="col">Handedness</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            players.map(player => {
                                return (
                                    <tr key={player.id}>
                                        <td>{player.first_name}</td>
                                        <td>{player.last_name}</td>
                                        <td>{player.rating}</td>
                                        <td>{player.handedness}</td>
                                    </tr>);

                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Roster;
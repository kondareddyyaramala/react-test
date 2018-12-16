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
            this.setState({ players: resp.players ? resp.players : []});
        });
    }

    render() {
        const players = this.state.players || [];
        return (
            <div>
                <Link to='/player/new'>Add a new player</Link>

                <ul>{
                    players.map(player => {
                        return <li key={player.id}>{player.first_name}</li>
                    })
                }
                </ul>
            </div>
        )
    }
}

export default Roster;
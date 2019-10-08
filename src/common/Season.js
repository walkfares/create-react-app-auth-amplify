import React, { Component } from 'react';
import { Table, Card } from 'react-bootstrap';
import { API } from 'aws-amplify';

class MatchList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            league: "",
            season: "",
            matchday: "",
            matches: []
        }
    }
    componentDidMount() {
        API.get('CompetitionApi', '/competitions/2021', {})
        .then(response => {
            this.setState({
                league: response[0].name,
                season: response[0].currentSeason.id,
                matchday: response[0].currentSeason.currentMatchday,
                matches: []
            });
            API.get('CompetitionApi', '/matches/'+this.state.season+'/'+this.state.matchday, {})
            .then(matches => {
                this.items = matches.map((item, key) =>
                    <tr key={item.id}><td>{item.homeTeam.name}</td><td>{item.awayTeam.name}</td></tr>
                );
                this.setState({
                    league: this.state.league,
                    season: this.state.season,
                    matchday: this.state.matchday,
                    matches: this.items
                    });
            }).catch(err => {
                console.error("What?"+err);
            });
            }).catch(err => {
            console.error("What?"+err);
        });
    }
    render() {
        return (
            <Card>
                <Card.Body>
                    <Card.Title>
                        <h3>{this.state.league}</h3>
                        <h5>Matchday {this.state.matchday}</h5>
                    </Card.Title>
          <Table striped bordered responsive size="sm">
              <thead>
                  <tr>
                      <th width="50%">Home</th>
                      <th width="50%">Away</th>
                  </tr>
              </thead>
              <tbody>
                  {this.state.matches}
              </tbody>
          </Table>
          </Card.Body>
          </Card>
        );
      }    
}


export { MatchList };

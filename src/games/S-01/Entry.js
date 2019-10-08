import React, { Component } from 'react';
import { Form, Button, Row, Col, Card } from "react-bootstrap";
import TeamSelection from "./TeamSelection";
import { MatchList } from "../../common/Season";
import "./Entry.css";

class Entry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            team: ""
        };
    }

    validateForm() {
        return this.state.team.length > 0;
      }
    handleChange = event => {
        this.setState({
          team: event.target.value
        });
      }
    handleSubmit = async event => {
        event.preventDefault();
        console.log(this.state.team);
    }
    render() {
        return (
            <div className="entry">
                <h1>S-01</h1>
                <MatchList />
                <Card>
                <Card.Body>
                <form onSubmit={this.handleSubmit}>
                    <Form.Group>
                            <Card.Title>Team Selection</Card.Title>
                            <Form.Control
                                onChange={this.handleChange}
                                value={this.state.team}
                                as="select">
                                    <TeamSelection />
                                </Form.Control>
                    </Form.Group>

                    <Button variant="success" type="submit" disabled={!this.validateForm()}>
                        Submit
                    </Button>
                </form>
                </Card.Body>
                </Card>
            </div>
        );
    }    
}

export default Entry;

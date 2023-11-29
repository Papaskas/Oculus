import React from 'react';
import {
    Alert,
    Button,
} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function MatchesNotFound() {
    const navigate = useNavigate();

    return (
        <Alert variant="danger">
            <Alert.Heading className="mb-3">Matches not found</Alert.Heading>
            <Button variant="danger" onClick={() => navigate('/')}>
                Click me to go back
            </Button>
        </Alert>
    );
}

export default MatchesNotFound;
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Card, CardTitle, CardText, CardBody, Col, Container
} from 'reactstrap';
import styled from 'styled-components';

const CharName = styled.h1`
    border: 1px solid white;

`



const CharacterCard = props => {
    return (
        <div>
            
            
            <Container >
            <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333', marginBottom: '2%'}}>
                
                <CardBody>
                    {/* <CardTitle>Name: {props.content.name}</CardTitle> */}
                    <CharName>{props.content.name}</CharName>
                    <CardText>Height: {props.content.height}</CardText>
                    <CardText>Birth Year: {props.content.birth_year}</CardText>
                    <CardText>Gender: {props.content.gender}</CardText>
                </CardBody>
                
            </Card>
            </Container>
            
            
        </div>
    )
}

export default CharacterCard;
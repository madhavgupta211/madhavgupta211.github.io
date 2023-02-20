import React from 'react';
import blueground from '../../blueground.png';
import styled from 'styled-components';
import mavitable from '../../mavitable.png';

const Container = styled.div`
    overflow-x: hidden;
    overflow-y: hidden;
`

const Roof = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: #dfdfdf
`

const Blueground = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: 0px;
    display: block;
    background-image: url(${blueground});
    background-position: center;
    background-size: cover;
`

const Table = styled.div`
    width: 100%;
    overflow-x: hidden;
    margin-left: auto;
    margin-right: auto;
    max-width: 1300px;
    min-height: 250px;
    z-index: 1;
    height: 45%;
    position: absolute;
    left: 0px;
    right: 0px;
    bottom: 0px;
    display: block;
    background-image: url(${mavitable});
    background-position: bottom center;
    background-size: cover;
`

export default function Home () {
    return(
        <Container>
            <Roof>
                <Blueground />
                <Table />
            </Roof>
        </Container>
    );
}
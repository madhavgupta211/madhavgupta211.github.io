import React from 'react';
import blueground from '../../RoomAssets/blueground.png';
import styled from 'styled-components';
import Table from '../Containers/tableComponent.js';
import MLaptop from '../Atoms/MLaptopComponent';
import VLaptop from '../Atoms/VLaptopComponent'

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

export default function Home () {
    return(
        <Container>
            <Roof>
                <Blueground />
                <Table>
                    <VLaptop />
                    <MLaptop />
                </Table>
            </Roof>
        </Container>
    );
}
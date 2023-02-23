import React from 'react';
import styled from 'styled-components';
import laptop from '../../RoomAssets/vlaptop.png';

const LaptopWrapper = styled.div`
    width: 20%;
    max-width: 300px;
    min-width: 200px;
    padding-bottom: 76.3%;
    position: absolute;
    top: 43%;
    left: 28%;
    @media (max-width: 1660px) {
        top: 28%;
    }
    @media (max-width: 1200px) {
        top: 35%;
        left: 25%;
    }
    @media (max-width: 800px) {
        left: 10%;
    }
    @media (max-width: 450px) {
        left: -4%;
    }
    @media (max-width: 340px) {
        left: -20%;
    }
`

const LaptopContent = styled.div`
    position: absolute;
    top: 0; bottom: 0; left: 0; right: 0;
    background-image: url(${laptop});
    background-size: contain;
    background-repeat: no-repeat;
`

export default function Laptop () {
    return (
        <LaptopWrapper>
            <LaptopContent />
        </LaptopWrapper>
    );
}
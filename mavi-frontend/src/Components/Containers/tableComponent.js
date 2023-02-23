import React from 'react';
import styled from 'styled-components';
import table from '../../RoomAssets/table.png';

const TableWrapper = styled.div`
    width: 100%;
    max-width: 1400px;
    position: absolute;
    bottom: 0px;
    left: 0px;
    right: 0px;
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 28%;
    box-sizing: border-box;
    overflow-x: hidden;
    overflow-y: hidden;
    @media (max-width: 1400px) {
        padding-bottom: 380px;
    }
`

const TableContent = styled.div`
    position: absolute;
    top: 0; bottom: 0; left: 0; right: 0;
    background-image: url(${table});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: bottom center;
    @media (max-width: 1400px) {
        background-size: cover;
    }
`

export default function Table (props) {
    return(
        <TableWrapper>
            <TableContent>
                {props.children}
            </TableContent>
        </TableWrapper>
    );
}
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 100%;
`

export const AppContainer = (props) => {
    return (
        <Container>
            {props.children}
        </Container>
    )
}
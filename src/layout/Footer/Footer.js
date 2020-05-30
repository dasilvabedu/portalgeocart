/* eslint-disable react/jsx-no-target-blank */
import React from 'react';

import styled from 'styled-components';
import logoEcostage from './logo-ecostage.svg';

const Wrapper = styled.footer`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 30px;
    padding: 0 16px;
    background-color: #636466;
`;

const CopyText = styled.small`
    font-size: 12px;
    color: white;
`;

const EcostageImage = styled.img`
    display: block;
    max-width: 86px;
    height: auto;
`;

export default function Footer() {
    return (
        <Wrapper>
            <CopyText>
                © Copyright - China Three Gorges Brasil Energia Ltda. - Todos os
                direitos reservados
            </CopyText>
            <a href="http://www.ecostage.com.br" target="_blank">
                <EcostageImage src={logoEcostage} alt="logo EcoStage" />
            </a>
        </Wrapper>
    );
}

import React from "react";
import styled from "styled-components";
import { LeftSidebar } from "./sidebar/leftside";
import { Navigator } from "./nav";
const Wrapper = styled.div`
    display: flex;
    background-color: #2c2f33;
`;

const MainContainer = styled.div`
    width: 100%;
`;

export function Main() {
    return (
        <Wrapper>
            <LeftSidebar>사이드</LeftSidebar>
            <MainContainer>
                <Navigator></Navigator>
            </MainContainer>
            <div>사이드</div>
        </Wrapper>
    );
}

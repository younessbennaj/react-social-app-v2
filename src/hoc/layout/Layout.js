import React from 'react';
import styled from 'styled-components';
import Navbar from '../../containers/Navbar';

const MainWrapper = styled.main`
  width: 100%;
  min-height: calc(100vh - 5rem);
  margin-top: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Layout = ({ children }) => {
    return (
        <>
            <MainWrapper>
                {children}
            </MainWrapper>
        </>
    )
}
export default Layout;
import React from "react";
import styled from "styled-components";

/**
 * Local imports
 */
import ErrorPage from "./components/shared/ErrorPage";

export default class MainErrorBoundary extends React.Component {
  state = {};
  
  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { "hasError": true };
  }

  render() {    
    if ((this.state as any).hasError) {
      return (
        <Container>
          <Header />
          <ErrorPage hasCrashed={true} />
        </Container>
      );
    }
    
    return this.props.children;
  }
}

/**
 * Styled Components...
 */

const Header = styled.div`
  height: 56px;
  width: 100%;
  background-color: #5274b9;
`;

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;  

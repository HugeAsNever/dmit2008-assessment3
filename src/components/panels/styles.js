import styled from "styled-components";

const PanelStyles = styled.div `
    width: 80%;
    color: #546E7A;
    padding: 0.5rem;
    margin-top: 1rem;
    min-height: 50vh;
`;

const PanelButton  = styled.button`
  border:none;
  background-color: transparent;
  font-size: 1.3rem;
`;

const PanelTitle = styled.h1 `
    font-size: 2rem;
    font-weight: bold;
    
`;

const PanelBarItems = styled.ul`
    display:flex;
    justify-content: space-between;
    align-items:center;
`;

const PanelBarItem = styled.li`
    margin: 0.5rem;
`;

const PanelBody = styled.div`
    padding: 2rem 3rem;
`;


export { PanelStyles, PanelButton, PanelTitle, PanelBarItems, PanelBarItem, PanelBody };
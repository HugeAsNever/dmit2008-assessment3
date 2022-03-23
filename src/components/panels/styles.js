import styled from "styled-components";

const PanelStyles = styled.div `
    width: calc(100% - 25rem);
    color: #546E7A;
    padding: 2rem;
    margin-top: 1rem;
    min-height: 50vh;
    background-color: #e2e2e5;
    margin-left:1rem;
    margin-right:1rem;
`;

const PanelButton  = styled.button`
  border:none;
  background-color: transparent;
  font-size: 1.3rem;
`;

const PanelTitle = styled.div `

    padding-left:1rem;
    
    h2{
        font-size: 2.5rem;
        font-weight: bold;
    
    }
    
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
    margin: 2rem 3rem;
`;


export { PanelStyles, PanelButton, PanelTitle, PanelBarItems, PanelBarItem, PanelBody };
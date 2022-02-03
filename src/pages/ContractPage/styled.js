import styled from "styled-components"
import Card from '@mui/material/Card';
export const JobsCardContainer = styled(Card)`
    display: flex;
    flex-direction: column;
    max-width: 250px;
    background-color: #e0d8f2;
`
export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`
export const JobsContainer = styled.div`
    display: grid;
    gap: 10px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin: 10px;
`
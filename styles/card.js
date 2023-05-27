import styled from "styled-components"
import { Palette } from "./theme"

export const Card = styled.ul`
  display: flex;
  flex-direction: row;
  margin: 1rem 0;
  width: fit-content;
  cursor: pointer;
  transition: .5s;

  &:hover {
    padding: 0 1rem;

    li:first-child {
    background-color:${Palette.fifthColor};
    }
  }
`

export const CardId = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  margin:1rem;
  color: ${Palette.firstColor};
  font-weight: bold;
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 50%;
  background-color: ${Palette.fourthColor};
`

export const CardText = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 70%;
`

export const Item = styled.p`
  display: flex;
  color: ${Palette.secondColor};
  margin: .5rem;

  & span{
    font-weight: bold;
  }
`

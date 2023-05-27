import styled from 'styled-components';
import { Palette, ScreenSizes } from './theme';

export const Background = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${Palette.thirdColor};
  min-height: 100svh;
` 
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${Palette.firstColor};
  padding: 2rem 3.5rem;
  width: 100%;
  max-width: ${ScreenSizes.tablet};  
  box-shadow: 0 0 50px ${Palette.secondColor};
  min-height: 100svh;
`
export const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  padding: 0 0 1rem;
  color: ${Palette.secondColor}
`

export const SubTitle = styled.h2`
  font-size: 1.25rem;
  font-style: italic;
  padding: 0 0 1rem;
  color: ${Palette.secondColor}
`

export const Text = styled.p`
  color: ${ Palette.secondColor };
  line-height: 1.75rem;
`

export const Button = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: fit-content;
  padding: 1rem 2rem;
  margin: 1rem 0;
  background-color: ${Palette.thirdColor};
  border-radius: 4px;
  color: ${Palette.firstColor};
  font-weight: bold;
  text-decoration: none;
  transition: .3s;
  box-shadow: 2px 2px 2px 1px ${Palette.secondColor};
  cursor: pointer;

  &:hover{
    background-color: ${Palette.fifthColor};
  }
`

import styled from 'styled-components';
import { Palette, ScreenSizes } from './theme';

export const Background = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${Palette.thirdColor};
` 
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${Palette.firstColor};
  padding: 2rem 3.5rem;
  max-width: ${ScreenSizes.tablet};
  box-shadow: 0 0 50px ${Palette.secondColor}
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

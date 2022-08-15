import styled from '@emotion/styled';

export const Title = styled.h1`
  font-family: ${p => p.theme.fonts.heading};
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.text};
  margin-bottom: ${p => p.theme.space[4]}px;
  text-align: center;
`;

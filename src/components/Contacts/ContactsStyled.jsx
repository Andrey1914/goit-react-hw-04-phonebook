import styled from '@emotion/styled';

export const Text = styled.p`
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.normal};
  color: ${p => p.theme.colors.text};
`;

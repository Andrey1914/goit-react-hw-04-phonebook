import styled from '@emotion/styled';

export const Label = styled.label`
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.normal};
  color: ${p => p.theme.colors.text};
  display: flex;
  justify-content: space-between;
  margin-bottom: ${p => p.theme.space[5]}px;
`;

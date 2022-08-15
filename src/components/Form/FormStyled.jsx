import styled from '@emotion/styled';

export const Input = styled.input`
  width: 300px;
  height: 20px;
  margin-bottom: ${p => p.theme.space[4]}px;
`;

export const Label = styled.label`
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.normal};
  color: ${p => p.theme.colors.text};
  display: flex;
  justify-content: space-between;
`;

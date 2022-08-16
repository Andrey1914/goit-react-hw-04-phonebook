import styled from '@emotion/styled';

export const Input = styled.input`
  width: 300px;
  height: 20px;
  margin-bottom: ${p => p.theme.space[4]}px;
  border-radius: ${p => p.theme.radii.small};
  background-color: transparent;
  border: 1px solid #ccc;
  outline-color: #ccc;
`;

export const Label = styled.label`
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.normal};
  color: ${p => p.theme.colors.text};
  display: flex;
  justify-content: space-between;
`;

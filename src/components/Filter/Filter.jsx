import PropTypes from 'prop-types';
import { Label } from './FilterStyled';
import { Input } from 'components/Form/FormStyled';

export default function Filter({ value, onChange }) {
  return (
    <Label>
      Find contacts by name
      <Input type="text" value={value} onChange={onChange}></Input>
    </Label>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

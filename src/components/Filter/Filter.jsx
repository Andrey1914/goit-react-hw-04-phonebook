import PropTypes from 'prop-types';
import { Label } from './FilterStyled';

export default function Filter({ value, onChange }) {
  return (
    <Label>
      Find contacts by name
      <input type="text" value={value} onChange={onChange}></input>
    </Label>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

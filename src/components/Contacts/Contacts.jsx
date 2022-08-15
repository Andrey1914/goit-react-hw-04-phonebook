import PropTypes from 'prop-types';
import { Text } from './ContactsStyled';
import { Button } from 'components/Button/Button';
import { MdDelete } from 'react-icons/md';
import { Box } from 'components/Box';

export default function Contacts({ contacts, onDeleteContacts }) {
  return (
    <Box as="ul" display="flex" flexDirection="column" px={5}>
      {contacts.map(({ id, name, number }) => {
        return (
          <Box
            key={id}
            as="li"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb={4}
          >
            <Text>
              {name}&#32;:&#32;{number}
            </Text>
            <Button type="button" onClick={() => onDeleteContacts(id)}>
              Delete
              <MdDelete size={20} />
            </Button>
          </Box>
        );
      })}
    </Box>
  );
}

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDeleteContacts: PropTypes.func.isRequired,
};

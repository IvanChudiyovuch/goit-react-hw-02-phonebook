import PropTypes from 'prop-types';
import { ListItem, Button, ItenInfoText } from './ContactsList.styled';

export const ContactsListItem = ({ contacts, onDeleteContact }) => {
  return (
    <>
      {contacts.map(({ id, name, number }) => (
        <ListItem key={id}>
          <ItenInfoText>{name}:</ItenInfoText>
          <ItenInfoText>{number}</ItenInfoText>
          <Button type="button" onClick={() => onDeleteContact(id)}>
            Delete
          </Button>
        </ListItem>
      ))}
    </>
  );
};

ContactsListItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

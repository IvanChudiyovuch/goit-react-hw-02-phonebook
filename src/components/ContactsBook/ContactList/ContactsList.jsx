import { List } from './ContactsList.styled';
import { ContactsListItem } from './ContactsListItem';

export const ContactsList = ({ contacts, onDeleteContact }) => {
  return (
    <List>
      <ContactsListItem contacts={contacts} onDeleteContact={onDeleteContact} />
    </List>
  );
};

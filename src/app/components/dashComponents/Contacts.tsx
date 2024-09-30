'use client';

import React, { useState } from 'react';
import AdminCard from '../AdminCard';
import contactsData from '../../../../data/contacts.json';
import Button from '../Button';

const ContactsContainer = () => {
  const [contacts, setContacts] = useState(contactsData.contact.contacts);

  const handleDelete = (id: number) => {
    setContacts((prevContacts: any[]) =>
      prevContacts.filter((contacts: { id: number }) => contacts.id !== id)
    );
  };

  return (
    <div className="space-y-4">
      <Button text={'Nova Contato'} variant="secondary" />
      {contacts.map(
        (contacts: { linkImage: string; id: any; title: any; desc1: any }) => (
          <>
            <AdminCard
              key={contacts.id}
              id={contacts.id}
              title={contacts.title}
              desc1={contacts.desc1}
              onDelete={handleDelete}
              linkImage={contacts.linkImage}
            />
          </>
        )
      )}
    </div>
  );
};

export default ContactsContainer;

import * as React from 'react';

interface ContactEmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const ContactEmailTemplate: React.FC<Readonly<ContactEmailTemplateProps>> = ({ name, email, message }) => (
  <div style={{ fontFamily: 'sans-serif', lineHeight: '1.6' }}>
    <h1 style={{ color: '#333' }}>New Message from your Portfolio Contact Form</h1>
    <p>
      You have received a new message from <strong>{name}</strong>.
    </p>
    <hr />
    <h2>Message Details:</h2>
    <ul>
      <li><strong>From:</strong> {name}</li>
      <li><strong>Email:</strong> <a href={`mailto:${email}`}>{email}</a></li>
    </ul>
    <h2>Message:</h2>
    <p style={{ 
        border: '1px solid #ddd', 
        padding: '15px', 
        borderRadius: '5px', 
        backgroundColor: '#f9f9f9',
        whiteSpace: 'pre-wrap',
        wordWrap: 'break-word'
    }}>
      {message}
    </p>
    <hr />
    <p style={{ fontSize: '12px', color: '#777' }}>
      This email was sent from your portfolio contact form.
    </p>
  </div>
);

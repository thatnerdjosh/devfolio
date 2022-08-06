import React from 'react';
import SummaryItem from '../summary-item';

const CertificateItem = ({ name, description, date_acquired, date_expired, link = false, internal = false }) => {
  return (
    <div>
      <SummaryItem
        key={name}
        name={name}
        link={link}
        description={description} />
      <div>Aquired on: {date_acquired}</div>
      <div>Expires: {date_expired}</div>
    </div>
  );
};

export default CertificateItem;

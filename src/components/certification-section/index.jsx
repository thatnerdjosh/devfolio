import React from 'react';

import Section from '../section';
import CertificateItem from '../certificate-item';

const CertificationSection = ({ certifications }) => {
    return (
        <Section title="Certifications">
            {certifications.map((certificate) => (
                <CertificateItem
                    key={certificate.name}
                    name={certificate.name}
                    link={certificate.link}
                    date_acquired={certificate.date_acquired}
                    date_expired={certificate.date_expired}
                    description={certificate.description}
                />
            ))}
        </Section>
    );
};

export default CertificationSection;

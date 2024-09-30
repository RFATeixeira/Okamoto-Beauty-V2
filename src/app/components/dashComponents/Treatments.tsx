'use client';

import React, { useState } from 'react';
import AdminCard from '../AdminCard';
import treatmentsData from '../../../../data/treatments.json';
import Button from '../Button';

const TreatmentsContainer = () => {
  const [treatments, setTreatments] = useState(
    treatmentsData.treatments.treatments
  );

  const handleDelete = (id: number) => {
    setTreatments((prevTreatments: any[]) =>
      prevTreatments.filter((treatment: { id: number }) => treatment.id !== id)
    );
  };

  return (
    <div className="space-y-4">
      <Button text={'Nova Categoria'} variant="secondary" />
      {treatments.map(
        (treatment: { id: any; linkImage: any; title: any; desc: any }) => (
          <>
            <AdminCard
              key={treatment.id}
              id={treatment.id}
              linkImage={treatment.linkImage}
              title={treatment.title}
              desc1={treatment.desc}
              onDelete={handleDelete}
            />
          </>
        )
      )}
    </div>
  );
};

export default TreatmentsContainer;

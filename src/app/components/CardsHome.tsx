import CardPrimary from './CardPrimary';
import treatmentsData from '../../../data/treatments.json';

interface ServiceCategory {
  linkImage: string;
  title: string;
  desc: string;
  refPage: string;
  id: number;
}

interface TreatmentsData {
  treatments: {
    title: string;
    description: string;
    treatments: ServiceCategory[];
  };
}

export default function CardsHome() {
  const { treatments } = treatmentsData as TreatmentsData;

  const serviceCategories = treatments.treatments;

  if (!Array.isArray(serviceCategories)) {
    console.error('serviceCategories não é um array:', serviceCategories);
    return null;
  }

  return (
    <>
      {serviceCategories.map(treatment => (
        <CardPrimary
          key={treatment.id}
          id={treatment.id}
          refPage={treatment.refPage}
          linkImage={treatment.linkImage}
          title={treatment.title}
          desc={treatment.desc}
        />
      ))}
    </>
  );
}

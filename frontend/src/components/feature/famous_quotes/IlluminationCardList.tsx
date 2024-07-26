import type { FamousQuote } from '@/types';
import IlluminationCard from './IlluminationCard';

interface ItemsProps {
  items: FamousQuote[];
}

const IlluminationCardList = ({ items }: ItemsProps) => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 py-10">
      {items.map((item) => (
        <IlluminationCard key={item.id} data={item} />
      ))}
    </div>
  );
};

export default IlluminationCardList;

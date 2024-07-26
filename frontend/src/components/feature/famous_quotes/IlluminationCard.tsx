'use client';
import { Card, CardContent } from '@/components/ui/card';
import type { FamousQuote } from '@/types';

interface DataProps {
  data: FamousQuote;
}

const IlluminationCard: React.FC<DataProps> = ({ data }) => {
  const { text, quotable } = data;

  return (
    <Card className="animate-text-focus-in p-4 md:p-6  rounded-lg shadow-lg">
      <div className="flex justify-between items-start">
        <CardContent className="h-full flex flex-col justify-center gap-y-4 pt-10">
          <div className="text-lg md:text-xl font-semibold mb-2">{text}</div>
          <div className="text-gray-500 dark:text-gray-400 text-sm md:text-base mt-2 text-left">
            <cite>
              <p>{quotable.name}</p>
            </cite>
          </div>
        </CardContent>
      </div>
    </Card>
  );
};

export default IlluminationCard;

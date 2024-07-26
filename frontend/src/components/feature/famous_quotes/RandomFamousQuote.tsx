import type { Author, FamousQuote } from '@/types';
import React from 'react';

interface DataProps {
  data: FamousQuote;
}

const RandomFamousQuote: React.FC<DataProps> = ({ data }) => {
  const { text, quotable } = data;

  // テキストを。と、を基準に分割する
  const textArray = text.split(/[。、]/);

  return (
    <main className="flex min-h-screen items-center justify-center md:p-16 p-9">
      <div className="animate-text-focus-in max-w-5xl relative">
        <div className="font-medium lg:leading-normal md:leading-normal leading-loose lg:text-5xl md:text-4xl text-2xl tracking-wider text-left">
          {/* 分割した各要素を改行して表示 */}
          {textArray.map((t, index) => (
            <React.Fragment key={index}>
              {t}
              {/* 最後の要素でなければ句読点と改行を追加 */}
              {index !== textArray.length - 1 && (
                <>
                  {/[。、]/.test(text[text.indexOf(t) + t.length]) &&
                    text[text.indexOf(t) + t.length]}
                  <br />
                </>
              )}
            </React.Fragment>
          ))}
        </div>
        <div className="text-gray-500 opacity-75 text-sm lg:text-lg md:text-base text-left pt-8 md:pt-20">
          <cite>
            <p>{(quotable as Author).profession}</p>
            <p>
              {quotable.name}
              {(quotable.birth_year || quotable.death_year) && (
                <>
                  ({quotable.birth_year} - {quotable.death_year})
                </>
              )}
            </p>
          </cite>
        </div>
      </div>
    </main>
  );
};

export default RandomFamousQuote;

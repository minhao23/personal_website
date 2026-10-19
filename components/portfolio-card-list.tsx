import { ContentCard } from './content-card';
import type { TabCard } from './portfolio-types';

type PortfolioCardListProps = {
  cards: TabCard[];
  layout: 'projects' | 'about' | 'grid';
  onModalOpen: (modal: NonNullable<TabCard['modal']>) => void;
};

function renderCard(card: TabCard, onModalOpen: PortfolioCardListProps['onModalOpen'], key: string) {
  const modal = card.modal;

  return (
    <ContentCard key={key} {...card} onClick={modal ? () => onModalOpen(modal) : undefined} />
  );
}

export function PortfolioCardList({ cards, layout, onModalOpen }: PortfolioCardListProps) {
  if (layout === 'projects') {
    const bottomCardIndex = cards.length - 1;

    return (
      <>
        {cards.map((card, index) => (
          <div key={card.title} className={index === bottomCardIndex ? 'md:col-span-2' : ''}>
            {renderCard(card, onModalOpen, card.title)}
          </div>
        ))}
      </>
    );
  }

  if (layout === 'about') {
    return (
      <div className="flex min-h-0 flex-col gap-4">
        {cards.map((card, index) => {
          const sizeClass =
            card.title === 'Travels'
              ? 'flex-[1.2] min-h-0'
              : card.title === 'Off the clock'
                ? 'flex-[0.78] min-h-0'
                : index === 0
                  ? 'flex-[0.92] min-h-0'
                  : 'min-h-0';

          return (
            <div key={card.title} className={sizeClass}>
              {renderCard(card, onModalOpen, card.title)}
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="grid min-h-0 gap-4 md:grid-cols-3 lg:grid-cols-1">
      {cards.map((card) => (
        renderCard(card, onModalOpen, card.title)
      ))}
    </div>
  );
}

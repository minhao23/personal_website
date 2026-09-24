import type { ExperienceEntry } from './portfolio-data';
import { TimelineList, type TimelineEvent } from './timeline-list';

type ExperienceTimelineProps = {
  entries: ExperienceEntry[];
};

export function ExperienceTimeline({ entries }: ExperienceTimelineProps) {
  const events: TimelineEvent[] = entries.map((entry) => ({
    name: entry.company,
    dates: entry.dateRange,
    location: entry.location,
    logo: entry.image,
    logoAlt: entry.imageAlt,
    title: entry.role,
    duration: entry.duration,
    tags: entry.stack,
    description: entry.bullets,
  }));

  return (
    <div className="relative flex h-full min-h-0 flex-col overflow-hidden rounded-[30px] border border-white/10 bg-black/24 p-5 backdrop-blur-sm md:p-6">
      <TimelineList events={events} scrollable />
    </div>
  );
}

import {useCallback, useEffect, useRef, useState} from 'react';
import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

export type RoadmapStatus = 'done' | 'active' | 'planned';

export type RoadmapItem = {
  title: string;
  status: RoadmapStatus;
  area: string;
  description?: string;
};

type RoadmapProps = {
  items: RoadmapItem[];
};

const STATUS_ORDER: RoadmapStatus[] = ['done', 'active', 'planned'];

const STATUS_META: Record<
  RoadmapStatus,
  {label: string; dotClass: string; cardClass: string}
> = {
  done: {
    label: 'Done',
    dotClass: styles.dotDone,
    cardClass: styles.cardDone,
  },
  active: {
    label: 'In progress',
    dotClass: styles.dotActive,
    cardClass: styles.cardActive,
  },
  planned: {
    label: 'Planned',
    dotClass: styles.dotPlanned,
    cardClass: styles.cardPlanned,
  },
};

export default function Roadmap({items}: RoadmapProps): ReactNode {
  const groups = STATUS_ORDER.map((status) => ({
    status,
    ...STATUS_META[status],
    items: items.filter((item) => item.status === status),
  }));

  const counts = groups.reduce(
    (result, group) => ({...result, [group.status]: group.items.length}),
    {done: 0, active: 0, planned: 0},
  );
  const total = items.length;
  const percent = total > 0 ? Math.round((counts.done / total) * 100) : 0;
  const width = (count: number) =>
    total > 0 ? `${(count / total) * 100}%` : '0%';

  const orderedItems = STATUS_ORDER.flatMap((status) =>
    items.filter((item) => item.status === status),
  );

  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollState = useCallback(() => {
    const scroller = scrollerRef.current;
    if (!scroller) {
      return;
    }

    setCanScrollLeft(scroller.scrollLeft > 4);
    setCanScrollRight(
      scroller.scrollLeft + scroller.clientWidth < scroller.scrollWidth - 4,
    );
  }, []);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) {
      return;
    }

    updateScrollState();
    scroller.addEventListener('scroll', updateScrollState, {passive: true});

    const observer = new ResizeObserver(updateScrollState);
    observer.observe(scroller);

    return () => {
      scroller.removeEventListener('scroll', updateScrollState);
      observer.disconnect();
    };
  }, [updateScrollState]);

  const scrollByPage = (direction: -1 | 1) => {
    const scroller = scrollerRef.current;
    if (!scroller) {
      return;
    }

    const amount = Math.max(scroller.clientWidth * 0.75, 240);
    scroller.scrollBy({left: direction * amount, behavior: 'smooth'});
  };

  return (
    <section className={styles.roadmap} aria-label="Project roadmap">
      <div className={styles.summary}>
        <div className={styles.summaryText}>
          <span className={styles.summaryLabel}>Overall progress</span>
          <span className={styles.summaryValue}>{percent}%</span>
          <span className={styles.summaryMeta}>
            {counts.done} of {total} milestones complete
          </span>
        </div>

        <div className={styles.summaryChart}>
          <div
            className={styles.progressBar}
            role="img"
            aria-label={`${counts.done} of ${total} milestones complete`}>
            <span
              className={clsx(styles.segment, styles.segmentDone)}
              style={{width: width(counts.done)}}
            />
            <span
              className={clsx(styles.segment, styles.segmentActive)}
              style={{width: width(counts.active)}}
            />
            <span
              className={clsx(styles.segment, styles.segmentPlanned)}
              style={{width: width(counts.planned)}}
            />
          </div>

          <div className={styles.legend}>
            {groups.map((group) => (
              <span className={styles.legendItem} key={group.status}>
                <span className={clsx(styles.dot, group.dotClass)} />
                {group.label}
                <strong>{group.items.length}</strong>
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.timelineControls}>
        <button
          type="button"
          className={styles.arrow}
          onClick={() => scrollByPage(-1)}
          disabled={!canScrollLeft}
          aria-label="Scroll roadmap left"
          aria-controls="roadmap-timeline">
          <svg
            viewBox="0 0 24 24"
            width="18"
            height="18"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button
          type="button"
          className={styles.arrow}
          onClick={() => scrollByPage(1)}
          disabled={!canScrollRight}
          aria-label="Scroll roadmap right"
          aria-controls="roadmap-timeline">
          <svg
            viewBox="0 0 24 24"
            width="18"
            height="18"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      <div
        className={styles.scroller}
        ref={scrollerRef}
        id="roadmap-timeline"
        tabIndex={0}
        role="region"
        aria-label="Roadmap timeline">
        <div className={styles.track}>
          <span className={styles.line} aria-hidden="true" />
          {orderedItems.map((item) => {
            const meta = STATUS_META[item.status];

            return (
              <div className={styles.milestone} key={`${item.status}-${item.title}`}>
                <span
                  className={clsx(styles.node, meta.dotClass)}
                  aria-hidden="true"
                />
                <span className={styles.connector} aria-hidden="true" />
                <article className={clsx(styles.card, meta.cardClass)}>
                  <div className={styles.cardMeta}>
                    <span className={styles.area}>{item.area}</span>
                    <span className={styles.statusChip}>{meta.label}</span>
                  </div>
                  <Heading as="h3" className={styles.cardTitle}>
                    {item.title}
                  </Heading>
                  {item.description ? (
                    <p className={styles.cardDescription}>{item.description}</p>
                  ) : null}
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

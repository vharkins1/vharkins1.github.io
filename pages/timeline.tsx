import React, { useEffect, useRef } from 'react';
import { timelineData, TimelineEvent } from '../lib/timeline';
import styles from '../styles/Timeline.module.css';
import Image from 'next/image';

const Timeline = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timeline = timelineRef.current;
    const svg = svgRef.current;

    if (!timeline || !svg) return;

    const drawPath = () => {
      const { height } = timeline.getBoundingClientRect();
      svg.setAttribute('viewBox', `0 0 10 ${height}`);
      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      let d = 'M 5 0';
      const amplitude = 5;
      const frequency = 0.01;
      for (let y = 0; y < height; y++) {
        const x = 5 + amplitude * Math.sin(y * frequency);
        d += ` L ${x} ${y}`;
      }
      path.setAttribute('d', d);
      path.setAttribute('stroke', 'url(#timeline-gradient)');
      path.setAttribute('stroke-width', '2');
      path.setAttribute('fill', 'none');

      const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
      const gradient = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
      gradient.setAttribute('id', 'timeline-gradient');
      gradient.setAttribute('x1', '0%');
      gradient.setAttribute('y1', '0%');
      gradient.setAttribute('x2', '0%');
      gradient.setAttribute('y2', '100%');

      const colors = timelineData.map(event => `var(--color-${event.year})`);
      colors.forEach((color, i) => {
        const stop = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
        stop.setAttribute('offset', `${(i / (colors.length - 1)) * 100}%`);
        stop.setAttribute('stop-color', color);
        gradient.appendChild(stop);
      });

      defs.appendChild(gradient);
      svg.innerHTML = '';
      svg.appendChild(defs);
      svg.appendChild(path);
    };

    drawPath();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.isVisible);
          }
        });
      },
      { threshold: 0.1 }
    );

    const items = timeline.querySelectorAll(`.${styles.timelineItem}`);
    items.forEach((item) => observer.observe(item));

    window.addEventListener('resize', drawPath);

    return () => {
      window.removeEventListener('resize', drawPath);
      items.forEach((item) => observer.unobserve(item));
    };
  }, []);

  return (
    <div className={styles.timelineContainer}>
      <div className={styles.timeline} ref={timelineRef}>
        <svg ref={svgRef} className={styles.timelineSvg}></svg>
        {timelineData.map((event, index) => (
          <div
            className={`${styles.timelineItem} ${index % 2 === 0 ? styles.left : styles.right}`}
            key={event.year}
            style={{ '--year-color': `var(--color-${event.year})` } as React.CSSProperties}
          >
            <div className={styles.timelineContent}>
              <Image src={event.image} alt={event.title} className={styles.timelineImage} width={80} height={80} />
              <h2>{event.title}</h2>
              <p>{event.description}</p>
              <span className={styles.year}>{event.year}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;

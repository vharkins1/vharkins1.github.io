import React, { useEffect, useState } from 'react';
import { timelineData } from '../lib/timeline';
import styles from '../styles/Timeline.module.css';
import Head from 'next/head';

const Timeline = () => {
  useEffect(() => {
    const themeToggle = document.getElementById('theme-toggle');
    const lightIcon = document.getElementById('theme-icon-light');
    const darkIcon = document.getElementById('theme-icon-dark');
    const htmlEl = document.documentElement;

    const setTheme = (theme: string) => {
      if (theme === 'dark') {
        htmlEl.classList.add('dark');
        lightIcon?.classList.add('hidden');
        darkIcon?.classList.remove('hidden');
        localStorage.setItem('theme', 'dark');
      } else {
        htmlEl.classList.remove('dark');
        lightIcon?.classList.remove('hidden');
        darkIcon?.classList.add('hidden');
        localStorage.setItem('theme', 'light');
      }
    };

    const storedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(storedTheme || (systemPrefersDark ? 'dark' : 'light'));

    const handleThemeToggle = () => {
      const isDark = htmlEl.classList.contains('dark');
      setTheme(isDark ? 'light' : 'dark');
    };

    themeToggle?.addEventListener('click', handleThemeToggle);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.isVisible);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const timelineItems = document.querySelectorAll(`.${styles.timelineItem}`);
    timelineItems.forEach((item) => observer.observe(item));

    return () => {
      themeToggle?.removeEventListener('click', handleThemeToggle);
      timelineItems.forEach((item) => observer.unobserve(item));
    };
  }, []);

  const groupedByYear = timelineData.reduce((acc, event) => {
    const year = event.year;
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(event);
    return acc;
  }, {} as Record<string, typeof timelineData>);

  let itemIndex = 0;

  return (
    <>
      <Head>
        <title>My Personal Timeline</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&family=Inter:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <button id="theme-toggle" className="fixed top-4 right-4 z-50 bg-slate-200 dark:bg-slate-700 rounded-full p-2 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        <svg id="theme-icon-light" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
        <svg id="theme-icon-dark" className="h-6 w-6 hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      </button>
      <div className="container mx-auto p-4 md:p-8">
        <h1 className="text-6xl md:text-8xl font-bold text-center mb-12 font-handwriting" style={{ color: 'var(--header-color)' }}>
          Timeline
        </h1>
        <div className={styles.timeline}>
          {Object.entries(groupedByYear).map(([year, events]) => (
            <React.Fragment key={year}>
              <div className={`${styles.timelineStart} text-center`}>
                <div className={styles.yearDisplay}>
                  <span className="font-handwriting text-5xl text-gray-700 dark:text-gray-300">{year}</span>
                </div>
              </div>
              {events.map((event) => {
                const side = itemIndex % 2 === 0 ? styles.right : styles.left;
                itemIndex++;
                const hasGallery = event.images.length > 1;
                return (
                  <div className={`${styles.timelineItem} ${side} ${styles['year' + year]} ${hasGallery ? styles.hasGallery : ''}`} key={event.title}>
                    <div className={styles.content}>
                      {hasGallery ? (
                        <div className={styles.imageGallery}>
                          {event.images.map((img) => (
                            <img src={img.src} alt={img.alt} key={img.src} className="shadow-md object-cover" />
                          ))}
                        </div>
                      ) : (
                        event.images[0] && <img src={event.images[0].src} alt={event.images[0].alt} className={`shadow-md object-cover ${styles[event.images[0].shape === 'circle' ? 'shapeCircle' : 'shapeSquircle']}`} />
                      )}
                      <div className={styles.textContainer}>
                        <p className={`${styles.dateText} text-sm font-semibold mb-2`}>{event.date}</p>
                        <h2 className="font-handwriting text-4xl font-bold mb-1">{event.title}</h2>
                        <p style={{ color: 'var(--text-color-subtle)' }}>{event.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
};

export default Timeline;

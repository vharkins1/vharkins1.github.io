// pages/gallery.tsx
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import TopMenu from '../components/TopMenu';

const imageData = [
  { src: '/images/myImage.jpg', caption: "The first photo added to this website, this was taken after barging into Bryce and Raph's room" },
  { src: '/images/VincentGPT.JPG', caption: 'This is a photo of me talking to ChatGPT, while in my muppets class', link: '/cool-stuff' },
  { src: '/images/image.jpg', caption: 'This is Bryce looking like the baller he is' },
  { src: '/images/lulu.jpeg', caption: 'Lewis (aka lulu) in his ikea bag outfit for Halloween' },
  { src: '/images/Byrcewknife.jpeg', caption: 'This is Bryce while working on the muppets final' },
  { src: "/images/Bryce's21st.jpeg", caption: "Happy 21st Bryce" },
  { src: '/images/Zachary.jpg', caption: 'Candid Zach I banged on his door to take this fine ass photo' },
  { src: '/images/J-LAN.jpeg', caption: 'Had to add the boy Jalen to the website, and here he is just trying to enjoy his food' },
  { src: '/images/Raphinmotion.jpeg', caption: 'Raph running at me for little to no reason' },
  { src: '/images/RawRaph.jpeg', caption: "Totally barged into Raph and Bryce's room to get this one" },
  { src: '/images/McEds.jpeg', caption: 'Two whole bags of McDonalds. Thx for the doordash Lewis' },
  { src: '/images/Clarence.jpeg', caption: 'Clarence while standing in front of totally accurate height marks on the wall behind him' },
  { src: '/images/burritoZach.jpeg', caption: 'This is probably what Zach would look like as a burrito' },
  { src: '/images/JCdunk.jpeg', caption: 'JC dunking the basketball showing his prominence and power' },
  { src: '/images/MaybeZachIsABurrito.jpg', caption: 'I was kidding before about Zach being a burrito, but after spotting him in the wild the mind kinda wonders' },
  { src: '/images/BryceMandM.jpeg', caption: "Bryce as an M&M holding M&M's" },
  { src: '/images/ZachWithFrisbee.jpeg', caption: 'Zach as the legendary frisbee player we all know him as' },
  { src: '/images/StarbucksForJalens21st.jpeg', caption: "Jalen's 21st birthday. We got quirky and cool drinks" },
  { src: '/images/BryceWithBalloons.jpeg', caption: 'Just a good photo all around. Bryce is holding an obscene amount of small balloons' },
  { src: '/images/RaphInMotionAgain.jpeg', caption: 'I seem to only have Raph in motion, so here he is again in motion' },
  { src: '/images/MasterOfChess.jpeg', caption: 'Bryce with poofy hair and a dope ass chess hat' },
];

interface ImageCardProps {
  src: string;
  caption: string;
  link?: string;
  priority?: boolean;
  index: number;
}

const ImageCard: React.FC<ImageCardProps> = ({ src, caption, link, priority = false, index }) => {
  const imageElement = (
    <Image
      src={src}
      alt={caption}
      width={300}
      height={380}
      priority={priority}
      loading={priority ? undefined : 'lazy'}
      className="gallery-image"
      style={{
        objectFit: 'cover',
      }}
    />
  );

  return (
    <div className="image-hover-container">
      {link ? <Link href={link}>{imageElement}</Link> : imageElement}
      <span className="hover-text">
        <span className="caption-number">#{String(index + 1).padStart(2, '0')}</span>
        {caption}
      </span>
    </div>
  );
};

const GalleryPage: React.FC = () => {
  return (
    <div className="page-container">
      <Head>
        <title>Gallery - River Street Crew</title>
        <meta name="description" content="A place of friends, hopefully warmth, and maybe even food." />
      </Head>

      <header className="hero">
        <div className="hero-banner">
          <Image
            src="/images/santa-cruz-map.png"
            alt="Santa Cruz illustrated map"
            fill
            priority
          />
          <div className="hero-overlay" />
          <div className="hero-content">
            <h1>River Street Crew</h1>
            <p className="hero-tagline">
              A place of friends, hopefully warmth, and maybe even food.
            </p>
            <div className="hero-nav">
              <TopMenu />
            </div>
          </div>
        </div>
      </header>

      <section className="gallery-section">
        <div className="section-header">
          <h2>Photo Archive</h2>
          <span className="tag">{imageData.length} photos</span>
        </div>

        <div className="gallery-grid">
          {imageData.map((image, idx) => (
            <ImageCard
              key={image.src}
              src={image.src}
              caption={image.caption}
              link={image.link}
              priority={idx < 4}
              index={idx}
            />
          ))}
        </div>
      </section>

      <footer className="page-footer">
        <a href="mailto:vincenttharkins@gmail.com">vincenttharkins@gmail.com</a>
        <span className="mono">2026</span>
      </footer>

      <style jsx>{`
        .hero {
          border-bottom: 1px solid var(--color-border);
        }

        .hero-banner {
          position: relative;
          height: 360px;
          width: 100%;
          overflow: hidden;
        }

        .hero-banner :global(img) {
          object-fit: cover;
          object-position: center 30%;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.1) 0%,
            rgba(0, 0, 0, 0.5) 100%
          );
          z-index: 1;
        }

        .hero-content {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: var(--space-4);
          z-index: 2;
        }

        .hero h1 {
          margin-bottom: var(--space-1);
          color: white;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
        }

        .hero-tagline {
          color: rgba(255, 255, 255, 0.9);
          font-size: var(--text-base);
          text-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
          margin-bottom: var(--space-3);
        }

        .hero-nav {
          margin-top: var(--space-2);
        }

        .gallery-section {
          padding: var(--space-4);
        }

        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: var(--space-3);
          padding-bottom: var(--space-2);
          border-bottom: 1px solid var(--color-border);
        }

        .section-header h2 {
          font-size: var(--text-lg);
          font-weight: 600;
        }

        .gallery-grid {
          display: flex;
          flex-wrap: wrap;
          gap: var(--space-2);
          justify-content: center;
        }

        .gallery-grid :global(.caption-number) {
          display: block;
          font-family: var(--font-mono);
          font-size: var(--text-xs);
          color: var(--color-sage);
          margin-bottom: 4px;
        }

        @media (max-width: 768px) {
          .hero-banner {
            height: 240px;
          }

          .gallery-grid {
            gap: var(--space-1);
          }
        }
      `}</style>
    </div>
  );
};

export default GalleryPage;

// pages/index.tsx
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import TopMenu from '../components/TopMenu';

// Image data for the gallery
const imageData = [
  { src: '/images/myImage.jpg', caption: "The first photo added to this website, this was taken after barging into Bryce and Raph's room" },
  { src: '/images/VincentGPT.JPG', caption: 'This is a photo of me talking to ChatGPT, while in my muppets class', link: '/cool-stuff' },
  { src: '/images/image.jpg', caption: 'This is Bryce looking like the baller he is' },
  { src: '/images/lulu.jpeg', caption: 'Lewis(aka lulu) in his ikea bag outfit for Halloween!' },
  { src: '/images/Byrcewknife.jpeg', caption: 'This is Bryce while working on the muppets final' },
  { src: "/images/Bryce's21st.jpeg", caption: "Happy 21st Bryce you old ass motherf--. Naw I love you Bryce \u2661" },
  { src: '/images/Zachary.jpg', caption: 'Candid Zach I banged on his door to take this fine ass photo' },
  { src: '/images/J-LAN.jpeg', caption: 'Had to add the boy Jalen to the website, and here he is just trying to enjoy his food' },
  { src: '/images/Raphinmotion.jpeg', caption: 'Raph running at me for little to no reason' },
  { src: '/images/RawRaph.jpeg', caption: "Totally barged into Raph and Bryce's room to get this one! Sorry Raph\u263A" },
  { src: '/images/McEds.jpeg', caption: 'TWO WHOLE BAGS OF MC DONALDS WOW! THX FOR THE DOORDASH LEWIS' },
  { src: '/images/Clarence.jpeg', caption: 'Clarence while standing in front of totally accurate height marks on the wall behind him' },
  { src: '/images/burritoZach.jpeg', caption: 'This is probably what Zach would look like as a burrito' },
  { src: '/images/JCdunk.jpeg', caption: 'JC dunking the basketball showing his prominence and power!' },
  { src: '/images/MaybeZachIsABurrito.jpg', caption: "I was kidding before about Zach being a burrito, but after spotting him in the wild the mind kinda wonders" },
  { src: '/images/BryceMandM.jpeg', caption: "Bryce as an M&M? HOLDING M&M's!" },
  { src: '/images/ZachWithFrisbee.jpeg', caption: 'Zach as the legendary frisbee player we all know him as' },
  { src: '/images/StarbucksForJalens21st.jpeg', caption: "Jalen's 21 birthday, we got quirky and cool drinks twas lit! if only Jalen let me and Bryce pay the 50 cent tax for his cup smh. All Love \u2661" },
  { src: '/images/BryceWithBalloons.jpeg', caption: 'Just a good photo all around, Bryce is holding an obscene amount of small balloons' },
  { src: '/images/RaphInMotionAgain.jpeg', caption: 'I seem to only have Raph in motion, so here he is again in motion!' },
  { src: '/images/MasterOfChess.jpeg', caption: 'Bryce with poofy hair and a dope ass chess hat, yup' },
];

// Reusable image card component
interface ImageCardProps {
  src: string;
  caption: string;
  link?: string;
  priority?: boolean;
}

const ImageCard: React.FC<ImageCardProps> = ({ src, caption, link, priority = false }) => {
  const imageElement = (
    <Image
      src={src}
      alt={caption}
      width={320}
      height={400}
      priority={priority}
      loading={priority ? undefined : 'lazy'}
      className="gallery-image"
    />
  );

  return (
    <div className="image-hover-container">
      {link ? (
        <Link href={link}>
          {imageElement}
        </Link>
      ) : (
        imageElement
      )}
      <span className="hover-text">{caption}</span>
    </div>
  );
};

const HomePage: React.FC = () => {

  return (
    <div className="page-container">
      <Head>
        <title>River Street Crew</title>
        <meta name="description" content="A place of friends, hopefully warmth, and maybe even food." />
      </Head>

      <header className="page-header">
        <h1>Welcome to The River Street Crew</h1>
        <p className="tagline">A place of friends, hopefully warmth, and maybe even food.</p>
        <TopMenu />
      </header>

      <div className="page-content">
        <div className="flex-container">
          {imageData.map((image, index) => (
            <ImageCard
              key={image.src}
              src={image.src}
              caption={image.caption}
              link={image.link}
              priority={index < 3}
            />
          ))}
        </div>
      </div>

      <footer className="page-footer">
        <p>Contact me at <a href="mailto:ninjaharkins@gmail.com">ninjaharkins@gmail.com</a></p>
        <p>&copy; 2025 River Street Crew</p>
      </footer>

      <style jsx>{`
        .flex-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 2px;
        }
      `}</style>
    </div>
  );
};

export default HomePage;

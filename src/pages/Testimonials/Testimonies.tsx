import React from 'react';
import styles from './Testimonies.module.css';

interface Testimonial {
  id: number;
  height: 'tall' | 'taller' | 'tallest' | 'short'; // Define possible height values
  text?: string | null; // text is optional and can be null
  author?: string; // author is optional
}

const Testimonies: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      height: 'tall',
      text: null // Empty card
    },
    {
      id: 2,
      height: 'tallest',
      text: "Coyola Technologies' Skill Development program provided me with a deeper understanding of AWS S3 and MySQL compared to what I learned in college, covering practical aspects like creating buckets, managing files, and integrating databases with AWS that I hadn't explored before.",
      author: "A student from the IoT training sessions held in Jigani"
    },
    {
      id: 3,
      height: 'short',
      text: null // Empty card
    },
    {
      id: 4,
      height: 'taller',
      text: "It was a good experience and I'm very happy that I'm a part of this wonderful session. I'm eager to learn more things in the upcoming days and thank you for giving us such a wonderful opportunity.",
      author: "A student from the AWS training sessions held in Jigani"
    },
    {
      id: 5,
      height: 'tallest',
      text: "The sessions held by Coyola Technologies have been incredibly informative, and I learned so much—I'm eager to continue learning in the days ahead. Thank you for the valuable insights!",
      author: "A student from Mahanani Cluster University, Bengaluru"
    },
    {
      id: 6,
      height: 'taller',
      text: "The practical exposure has been amazing, thanks to the kits provided by Coyola Technologies.",
      author: "A student from the IoT training sessions held in Jigani"
    }
  ];

  return (
    <section className={styles.testimoniesSection}>
      <header className={styles.sectionHeader}>
        <h6 className={styles.sectionSubtitle}>3/ Alumni</h6>
        <h2 className={styles.sectionTitle}>Testimonials</h2>
        <p className={styles.sectionDescription}>
          We aim to lead the Skill Development world, and we don't forget where we come from:
          human touch and endless patience.
        </p>
      </header>

      <div className={styles.testimonialsGrid}>
        {testimonials.map((testimonial) => (
          <div 
            key={testimonial.id}
            className={`${styles.testimonialCard} ${styles[testimonial.height]}`}
          >
            {testimonial.text && (
              <>
                <p className={styles.testimonialText}>{testimonial.text}</p>
                <p className={styles.testimonialAuthor}>{testimonial.author}</p>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonies;

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>
        Welcome to Matthew Nunemacher's Portfolio!
        
        As a seasoned software engineer with nearly a decade of experience, I've had the privilege of working on a diverse range of projects, from building scalable web applications to developing robust backend systems.
        My passion for technology drives me to constantly seek out new challenges and innovative solutions. 
        Whether you're a potential client looking for a skilled freelancer or a fellow developer interested in exploring my work, I invite you to take a closer look at my portfolio, browse through my featured projects,
         and reach out to discuss how we can collaborate to bring your ideas to life. 
      </p>
      <section>
        <h1>Featured Projects:</h1>
        <ul>
          <li>
            * Project Name 1
              * Description: Developed a full-stack web application for managing inventory and sales data, utilizing React.js for the frontend and Node.js with Express.js for the backend. Integrated with MongoDB for database storage and implemented authentication and authorization using JSON Web Tokens (JWT).
              * Link: Live Demo | GitHub Repository
          </li>
          <li>
            * Project Name 2
              * Description: Designed and implemented a data processing pipeline using Apache Spark for real-time analytics on large-scale datasets. Utilized Kafka for message queuing and Cassandra for distributed data storage. Developed custom Spark jobs in Scala to perform complex data transformations and aggregations.
              * Link: GitHub Repository
          </li>
          <li>
            * Project Name 3
              * Description: Led a team in building a mobile application for iOS and Android platforms, providing users with personalized recommendations based on their preferences and browsing history. Utilized React Native for cross-platform development and integrated with Firebase for backend services.
              * Link: App Store | Google Play Store
          </li>
        </ul>
      </section>
      {/* TODO: turn into actual CTA with button and appropriate phone number or link to contact form */}
      <p>Ready to start your next project or have a question? Let's connect! Contact me today to discuss your requirements and how I can help you achieve your goals. [Contact Me](#)</p>
    </main>
  );
}

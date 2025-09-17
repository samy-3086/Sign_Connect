import React from "react";
import FeatureCard from "../components/FeatureCard";

function Home() {
  return (
    <div className="home">
      <header className="hero">
        <h1>Welcome to Sign Connect</h1>
        <p>Breaking barriers with universal sign language translation</p>
      </header>

      <section className="features">
        <FeatureCard 
          title="Real-time Translation" 
          description="Translate between sign and text instantly." 
          icon="💬"
        />
        <FeatureCard 
          title="Text-to-Speech" 
          description="Convert translations into speech for better communication." 
          icon="🔊"
        />
        <FeatureCard 
          title="Offline Support" 
          description="Works even in low or no internet connectivity." 
          icon="📴"
        />
        <FeatureCard 
          title="Accessibility" 
          description="User-friendly design for everyone." 
          icon="♿"
        />
      </section>
    </div>
  );
}

export default Home;

import React from "react";

function Card() {
  return (
    <>
      <div className="item community">
        <h2>Join our community</h2>
        <h3>30-day, hassle-free money back guarantee</h3>
        <p>
          Gain access to our full library of tutorials along with expert code
          reviews.<br/> Perfect for any developers who are serious about honing their
          skills.
        </p>
      </div>

      <div className="item subscription">
        <h3>Monthly Subscription</h3>
        <span>$29</span><span className="price">per month</span>
        <p>Full access for less than $1 a day</p>
        <button>Sign Up</button>
      </div>

      <div className="item why-us">
        <h3>Why Us</h3>
        
        <ul>
        <li>Tutorials by industry experts</li>
        <li>Peer & expert code review</li>
        <li>Coding exercises</li>
        <li>Access to our GitHub repos</li>
        <li>Community forum</li>
        <li>Flashcard decks</li>
        <li>New videos every week</li>
        </ul>
      </div>
    </>
  );
}
export default Card;
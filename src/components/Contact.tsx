import React from "react";

interface HomeProps {
  setCurrentSection: React.Dispatch<React.SetStateAction<string>>;
}
const Contact: React.FC<HomeProps> = () => {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <p>SNSリンクや問い合わせフォームを設置。</p>
    </section>
  );
};

export default Contact;
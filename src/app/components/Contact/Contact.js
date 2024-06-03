import React from "react";
import styles from "./contact.module.css";
import { BtnComponent } from "../ButtonComponent";
import RevealAffect from "../GsapComponents/RevealAffect";

const Contact = ({ page }) => {
  return (
    <>
      <RevealAffect>
        <div className={styles.container} id="contact">
          <div className={styles.innerContainer}>
            <h6 className={styles.sectionName}>CONTACT</h6>
            <div className={styles.title}>
              <h1>Have An Idea? Let's Make It Happen.</h1>

              <BtnComponent
                buttonText="Get In Touch"
                borderColor="rgba(255, 255, 255, 0.6)"
                bg="transparent"
                color="#fff"
                arrow="0"
                contact={true}
              />
            </div>
          </div>
        </div>
      </RevealAffect>
    </>
  );
};

export default Contact;

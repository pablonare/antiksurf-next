"use client";
import { useState } from "react";
import styles from "./Accordion.module.css";


function Accordion({ items }) {

  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className={styles.accordion}>

      {items.map((item, index) => (

        <div 
          key={index} 
          className={styles.item}
        >

          <button
            className={styles.header}
            onClick={() =>
              setOpenIndex(
                openIndex === index ? null : index
              )
            }
          >

            <span>
              {item.title}
            </span>

            <span className={styles.icon}>
              {openIndex === index ? "−" : "+"}
            </span>

          </button>


          {openIndex === index && (

            <div className={styles.content}>
              {item.content.map((text, i) => (
                <p key={i}>
                  {text}
                </p>
              ))}
            </div>

          )}

        </div>

      ))}

    </div>
  );
}

export default Accordion;
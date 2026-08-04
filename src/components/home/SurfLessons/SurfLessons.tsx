import Container from "../../ui/Container/Container";
import SplitSection from "../../layout/SplitSection/SplitSection";
import LessonsImage from "../../../assets/images/index/lessons.webp";
import Button from "../../ui/Button/Button";


import lessons from "./lessons";
import Accordion from "../../ui/Accordion/Accordion";
import styles from "./SurfLessons.module.css";


function SurfLessons() {
  return (
    <section className={styles.section}>
      <Container>

        <SplitSection reverse={true}>

          <div className={styles.media}>
            <img 
              src={LessonsImage.src}
              alt="Surf lessons in Morocco"
            />
          </div>


          <div className={styles.content}>

            <h2 className="section-title">
              Surf Lessons
            </h2>

            <p className="section-subtitle">
              Our surf lessons are designed for all levels, from beginners 
              to experienced surfers. Each session includes theory, 
              in-water practice, and personalized corrections.
            </p>

            <Accordion items={lessons} /> 

            <div className={styles.actions}>
 
              <Button as="a" href="https://wa.me/212644078565" variant="primary">
                Book Surf Lessons
              </Button>

            </div>
             
          </div>

        </SplitSection>

      </Container>
    </section>
  );
}

export default SurfLessons;
import { Transition } from "motion";

const transition: Transition = {
  duration: 0.5,
};
export const fadeInProps = {
  initial: { y: 20, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  transition,
};

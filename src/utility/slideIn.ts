import { Transition } from "motion";

const transition: Transition = {
  type: "spring",
  duration: 1.2,
};
export const slideInProps = {
  initial: { opacity: 0, x: 20 },
  whileInView: { opacity: 1, x: 0 },
  transition,
};

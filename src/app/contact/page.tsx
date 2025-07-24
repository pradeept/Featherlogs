import Image from "next/image";
import styles from "./contact.module.css";
import * as motion from "motion/react-client"
import { slideInProps } from "@/utility/slideIn";

export const metadata = {
  title: "Contact Page",
  description: "Contact description",
};

function ContactPage() {

  return (
    <div className={styles.container}>
      <motion.div {...slideInProps} className={styles.imgContainer}>
        <Image src='/contact.png' alt='' fill className={styles.img} />
      </motion.div>
      <motion.div {...slideInProps} className={styles.formContainer}>
        {/* <HydrationTestNoSSR/> */}
        {/* <div suppressHydrationWarning>{a}</div> */}
        <form action='' className={styles.form}>
          <input type='text' placeholder='Name and Surname' />
          <input type='text' placeholder='Email Address' />
          <input type='text' placeholder='Phone Number (Optional)' />
          <textarea
            name=''
            id=''
            cols={30}
            rows={10}
            placeholder='Message'
          ></textarea>
          <button>Send</button>
        </form>
      </motion.div>
    </div>
  );
}

export default ContactPage;

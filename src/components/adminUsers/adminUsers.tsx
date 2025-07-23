import { getUsers } from "@/lib/data";
import styles from "./adminUsers.module.css";
import Image from "next/image";
import { deleteUser } from "@/lib/actions";
import * as motion from "motion/react-client"
import { fadeInProps } from "@/utility/fadeIn";

const AdminUsers = async () => {
  const users = await getUsers();

  return (
    <motion.div {...fadeInProps} className={styles.container}>
      <h1>Users</h1>
      {users.map((user) => (
        <div className={styles.user} key={user.id}>
          <div className={styles.detail}>
            <Image
              src={user.img || "/noavatar.png"}
              alt=""
              width={50}
              height={50}
            />
            <span>{user.username}</span>
          </div>
          <form action={deleteUser}>
            <input type="hidden" name="id" value={user.id} />
            <button className={styles.userButton}>Delete</button>
          </form>
        </div>
      ))}
    </motion.div>
  );
};

export default AdminUsers;

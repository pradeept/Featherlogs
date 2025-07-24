import { getUsers } from "@/lib/data";
import styles from "./adminUsers.module.css";
import Image from "next/image";
import * as motion from "motion/react-client"
import { fadeInProps } from "@/utility/fadeIn";
import DeleteUser from "./deleteUser";

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
           <DeleteUser id={user.id} />
        </div>
      ))}
    </motion.div>
  );
};

export default AdminUsers;

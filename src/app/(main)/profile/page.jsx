import Image from "next/image";
import styles from "./page.module.css";
import SignOut from "@/components/SignOut/SignOut";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const Profile = async () => {
  let profile;
  try {
    const data = await fetch("https://dummyjson.com/users/3");
    profile = await data.json();

    if (profile.message) {
      throw Error(profile.message);
    }
  } catch (error) {
    throw Error(error);
  }

  return (
    <section>
      <Header />
      <div className={styles.container}>
        <section className={styles.section}>
          <div>
            <Image
              src={profile.image}
              className={styles.image}
              alt="Profile Image"
              width={200}
              height={200}
            />
            <div className={`${styles.infoWrapper}, ${styles.title}`}>
              <p>{profile.firstName}</p>
              <p>{profile.lastName}</p>
            </div>
          </div>
          <div className={styles.textdiv}>
            <div className={styles.infoWrapper}>
              <p>ემაილი: </p>
              <p>{profile.email}</p>
            </div>
            <div className={styles.infoWrapper}>
              <p>ტელეფონი: </p>
              <p>{profile.phone}</p>
            </div>
            <div className={styles.infoWrapper}>
              <p>მისამართი: </p>
              <p>{profile.address.city}, {profile.address.state}, {profile.address.address}</p>
            </div>
            <div className={styles.infoWrapper}>
              <p>პაროლი: </p>
              <p>{profile.password}</p>
            </div>
            <div className={styles.infoWrapper}>
              <p>დაბადების დღე: </p>
              <p>{profile.birthDate}</p>
            </div>
            <div className={styles.infoWrapper}>
              <p>უნივერსიტეტი: </p>
              <p>{profile.university}</p>
            </div>
            <div className={styles.infoWrapper}>
              <p>კომპანია: </p>
              <p>{profile.company.name}</p>
            </div>
            <div className={styles.infoWrapper}>
              <p>კომპანიის მისამართი: </p>
              <p>{profile.company.address.address}</p>
            </div>
          </div>
        </section>
        <SignOut />
      </div>
      <Footer />
    </section>
  );
};

export default Profile;

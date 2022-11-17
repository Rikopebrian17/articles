import React from 'react';
import Header from '../components/Header';

function Profile() {
  return (
    <>
      <Header isBack={true} />
      <div style={styles.container}>
        <h1>Tentang Saya</h1>
        <img style={styles.profile} src="./iko.jpg" alt="" />

        <p>
          Perkenalkan saya <b>Riko Pebrian </b>, saya merupakan seorang Content Writer yang dimana menulis artikel tiap hari, artikel berita, artikel blog dan lain lain
        </p>

        <p>Keahlian saya juga meliputi: Content Writer, SEO Content Writer, Graphics Design, Digital Marketing, Writing</p>
      </div>
    </>
  );
}

const styles = {
  container: {
    padding: '1.5em 2em',
    marginTop: '4em',
  },
  profile: {
    width: '100%',
    height: '300px',
    objectFit: 'cover',
    marginBottom: '1em',
  },
};

export default Profile;

import React from 'react';
import { Link } from 'react-router-dom';

function Header({ isBack }) {
  return (
    <header style={styles.heading}>
      {isBack ? (
        <Link to="/" style={{ color: '#fff' }}>
          <img src="/left.svg" style={{ marginRight: '1em' }} alt="" />
          Kembali Ke Halaman Utama
        </Link>
      ) : (
        <>
          <h3>Articles</h3>
          <Link style={styles.profile} to="/profile">
            Profilku
          </Link>
        </>
      )}
    </header>
  );
}

const styles = {
  heading: {
    padding: '1em 2em',
    background: 'red',
    color: '#fff',
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    zIndex: '50',

    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: '50px',
  },
  profile: {
    color: '#fff',
  },
};

export default Header;

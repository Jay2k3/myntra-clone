function Navbar() {
    return (
        <nav style={styles.navbar}>
      <div style={styles.logo}>🛍️ Myntra Clone</div>
      <input type="text" placeholder="Search for products" style={styles.search} />
      <div style={styles.icons}>
        <span>❤️</span>
        <span>🛒</span>
        <span>👤</span>
      </div>
    </nav>
    );
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 30px",
    backgroundColor: "#ffffff",
    borderBottom: "1px solid #e0e0e0",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },
  logo: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#ff3f6c",
  },
  search: {
    padding: "10px",
    width: "40%",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  icons: {
    fontSize: "20px",
    display: "flex",
    gap: "20px",
    cursor: "pointer",
  }
};

export default Navbar;
export default ({ colors }) => ({
  container: {
    display: 'block',
    width: '100%',
    textAlign: 'center',
    padding: '3rem 1rem',
    overflow: 'auto',
  },
  headline: {
    textAlign: 'inherit',
    fontWeight: 'normal',
    fontSize: '3rem',
    margin: '2rem auto 0 auto',
  },
  paragraph: {
    fontSize: '1.25rem',
    textAlign: 'inherit',
  },
  link: {
    background: colors.primary,
    display: 'inline-block',
    textAlign: 'inherit',
    borderRadius: '20px',
    lineHeight: '40px',
    minWidth: 100,
    color: colors.white,
    textDecoration: 'none',
    cursor: 'pointer',
  },
});

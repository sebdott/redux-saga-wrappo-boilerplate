export default ({ colors }) => ({
  container: {
    position: 'relative',
    width: '100%',
    textAlign: 'center',
    overflow: 'auto',
  },
  headline: {
    fontWeight: 'normal',
    display: 'block',
    fontSize: '2rem',
    textAlign: 'center',
    margin: '2rem auto 0 auto',
  },
  code: {
    background: colors.gray,
    display: 'inline-block',
    padding: '1rem',
    whiteSpace: 'pre-wrap',
  },
});

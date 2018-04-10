export default ({ colors, header }) => ({
  wrapper: {
    position: 'relative',
    zIndex: 999,
  },
  container: {
    background: colors.primary,
    height: '100%',
    position: 'fixed',
    width: '20%',
    minWidth: 350,
  },
  body: {
    position: 'relative',
  },
  listBody: {
    color: colors.white,
    width: '100%',
    display: 'block',
    overflow: 'auto',
    '&::after': {
      content: '""',
      display: 'table',
      clear: 'both',
    },
  },
  listItem: {
    backgroundColor: colors.primaryDarken,
    borderBottom: `1px solid ${colors.primary}`,
    color: 'inherit',
    display: 'block',
    height: 50,
    padding: ['0.5rem', '1rem'],
    textDecoration: 'none',
    width: '100%',
  },
});

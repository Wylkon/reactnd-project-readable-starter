const KEYS = ['REACT_APP_BASE_URL', 'NODE_ENV', 'REACT_APP_TOKEN'];

/* eslint-disable-next-line no-undef */
const config = Object.entries(process.env).reduce((acc, [key, value]) => {
  const keyName = KEYS.find(item => key.includes(item));
  if (keyName) return { ...acc, [keyName]: value };
  return acc;
}, {});

export default { ...config };

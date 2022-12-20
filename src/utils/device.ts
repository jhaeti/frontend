const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    tabletL: '1200px',
    laptopL: '1440px',
    desktop: '1800px',
};

const device = {
    mobileS: `(max-width: ${size.mobileS})`,
    mobileM: `(max-width: ${size.mobileM})`,
    mobileL: `(max-width: ${size.mobileL})`,
    tablet: `(max-width: ${size.tablet})`,
    tabletL: `(max-width: ${size.tabletL})`,
    laptopL: `(max-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
};

export default device;

const links = {
  purchase: {
    privacy: 'https://www.autism360.com/news/privacy-policy/',
    terms: 'https://www.autism360.com/news/terms-of-service/',
  },
  management: {
    apple: 'itms-apps://apps.apple.com/account/subscriptions',
    google: (productId : any) => `https://play.google.com/store/account/subscriptions?sku=${productId}&package=com.viaapp`,
  },
};
export default links;

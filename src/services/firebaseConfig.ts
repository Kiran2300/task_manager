const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
};

type IConfig = typeof config;

export function getFirebaseConfig(): IConfig {
  if (Object.values(config).some((value) => !value))
    throw new Error('Firebase config is not set or incomplete');
  else return config;
}

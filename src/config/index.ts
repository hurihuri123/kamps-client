import {availableLanguages} from '../consts/availableLanguages';

export const env = process.env['REACT_APP_ENV'] || 'local';

interface IConfigEnvironment {
    baseHost: string,
    apiBaseHost: string,
    authBaseApi: string,
}

export interface IClientConfig extends IConfigEnvironment {
    mapsApiKey: string,
    defaultLanguage: string,
}

/**
 * Definitions of all environments config
 */
const LOCAL_SERVER = 'http://localhost:3000';

const DEV_SERVER = 'http://0.0.0.0:3000';

const PROD_SERVER = 'https://prod.server.com';

const local: IConfigEnvironment = {
    baseHost: `${LOCAL_SERVER}`,
    apiBaseHost: `${LOCAL_SERVER}`,
    authBaseApi: `${LOCAL_SERVER}/auth`,
};
const dev: IConfigEnvironment = {
    baseHost: `${DEV_SERVER}`,
    apiBaseHost: `${DEV_SERVER}`,
    authBaseApi: `${DEV_SERVER}/auth`,
};
const prod: IConfigEnvironment = {
    baseHost: `${PROD_SERVER}`,
    apiBaseHost: `${PROD_SERVER}`,
    authBaseApi: `${PROD_SERVER}/auth`,
};

const envConfigs = {
    local,
    dev,
    prod
};

if (env !== 'prod') {
    console.log('Client started with env', env);
}

/**
 * Generate config according to env
 */
const ClientConfig: IClientConfig = {
    defaultLanguage: availableLanguages.he,

    // Get all environment configurations
    ...envConfigs[env]
};

export default ClientConfig;
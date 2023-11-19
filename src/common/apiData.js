const baseApiData = {
    host: 'http://localhost',
    port: '3000',
};
const apiData = {
    ...baseApiData,
    baseUrl: `${baseApiData.host}:${baseApiData.port}`,
};

export {apiData};
const { fetch: originalFetch } = window;

window.fetch = async (...args) => {

    let [resource, config] = args;
    console.log(resource, config);

    if (!config)
        config = { headers: {} }

    config!.headers = {
        ...config.headers,
        'Authorization': 'TOKEN DE USUARIO'
    }

    const response = await originalFetch(resource, config);

    const { url, status, statusText, headers } = response;
    console.log(url, status, statusText, headers);

    return response
}
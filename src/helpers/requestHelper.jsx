/* eslint-disable import/no-unresolved */
import serviceUrls from 'src/constants/serviceUrls';
import urlHelper from 'src/helpers/urlHelper';


const requestHelper = {
    get: async (dataSize, url) => {
        const options = {
            method: 'GET'
        };

        const data = await getRequest(
            url,
            { size: dataSize },
            options
        );

        return data.json();
    },
    post: async (dataUnit, url) => {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataUnit)
        };

        const data = await getRequest(
            url,
            {},
            options
        );

        return data.json();
    },
    delete: async (dataUnit, url) => {
        const options = {
            method: 'DELETE'
        };

        await getRequest(
            url,
            { id: dataUnit.id },
            options
        );
    },
    toggle: async (dataUnit, url) => {
        const options = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                completed: !dataUnit.completed
            })
        };

        await getRequest(
            url,
            { id: dataUnit.id },
            options
        );
    }
};

function errorHandler(response, methodName) {
    if (!response.ok) {
        throw new Error(`ServerError on ${methodName}`);
    }
}

async function getRequest(
    urlTemplate,
    parameters,
    options
) {
    const url = urlHelper.getUrlByTemplate(
        serviceUrls[urlTemplate],
        parameters
    );
    const response = await fetch(url, options);

    errorHandler(response, options.method);

    return response;
}

export default requestHelper;

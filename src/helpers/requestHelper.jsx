/* eslint-disable import/no-unresolved */
import serviceUrls from 'src/constants/serviceUrls';
import urlHelper from 'src/helpers/urlHelper';


const requestHelper = {
    get: async amount => {
        const tasks = await getRequest(
            'getLimittedTasksUrl',
            { tasksAmount: amount }
        );

        return tasks.json();
    },
    post: async task => {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(task)
        };

        const tasks = await getRequest(
            'getTasksUrl',
            {},
            options
        );

        return tasks.json();
    },
    delete: async task => {
        const options = {
            method: 'DELETE'
        };

        find(task, options);
    },
    toggle: async task => {
        const options = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                completed: !task.completed
            })
        };

        find(task, options);
    }
};

function errorHandler(response, methodName) {
    if (!response.ok) {
        throw new Error(`ServerError on ${methodName}`);
    }
}

async function getRequest(
    urlTemplate,
    parameters = {},
    options = {
        method: 'GET'
    }
) {
    const url = urlHelper.getUrlByTemplate(
        serviceUrls[urlTemplate],
        parameters
    );
    const response = await fetch(url, options);

    errorHandler(response, options.method);

    return response;
}

async function find(task, options) {
    await getRequest(
        'findByTaskIdUrl',
        { id: task.id },
        options
    );
}

export default requestHelper;

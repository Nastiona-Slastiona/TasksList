const urlHelper = {
    getUrlByTemplate: (template, parameters) => {
        let newUrl = template;
        for (const key in parameters) {
            newUrl = template.replace(`:${key}`, parameters[key]);
        }

        return newUrl;
    }
};

export default urlHelper;

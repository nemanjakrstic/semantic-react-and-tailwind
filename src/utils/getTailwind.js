import classNames from "classnames";
import kebabCase from "lodash/kebabCase";

const target = {};

/**
 * @param {string} componentName Name of the component.
 * @returns {Object}
 */
const getTailwind = (componentName) => {
    if (!componentName) {
        throw new Error("Component name is required");
    }

    return new Proxy(target, {
        get(target, prop, receiver) {
            const mainClassName = kebabCase(componentName);

            if (prop === "main") {
                return (...args) => classNames(mainClassName, ...args);
            }

            return (...args) => classNames(mainClassName + "-" + kebabCase(prop), ...args);
        },
    });
};

export default getTailwind;

import React, { useState } from "react";
import getTailwind from "../utils/getTailwind";

// Use "Tailwind" object to apply class names to elements by calling any method on the object.
// The first and only argument when getting the `tw` object is required and should have the same name as the component.
// Methods on the object are dynamic but are required to use for styling.
// `tw.youCanCallAnything()` method is just a higher order function for `classNames` function that will inject the component class name as the first argument.

// Example:
// `const tw = getTailwind("ProductListItem")`
// `tw.main('foo', 'bar')` will generate a class name "product-list-item foo bar".
// `tw.image('foo', 'bar')` will generate a class name "product-list-item-image foo bar".

const ProductListItem = ({ name, description, image }) => {
    const tw = getTailwind("ProductListItem");
    const [isSelected, setIsSelected] = useState(false);

    const handleClick = () => {
        setIsSelected(!isSelected);
    };

    return (
        <div className={tw.main("p-4 flex mb-4 hover:bg-gray-100 rounded cursor-pointer")} onClick={handleClick}>
            <img
                src={image}
                alt={name}
                className={tw.image("w-20 h-20 object-cover rounded", { "ring-2 ring-green-500": isSelected })}
            />

            <div className={tw.content("ml-4")}>
                <div className={tw.name("text-lg")}>{name}</div>
                <div className={tw.description("text-sm text-gray-500")}>{description}</div>
            </div>
        </div>
    );
};

export default ProductListItem;

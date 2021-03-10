import React from "react";
import ProductListItem from "./components/ProductListItem";
import getTailwind from "./utils/getTailwind";

const App = () => {
    const tw = getTailwind("App");

    return (
        <div className={tw.main("p-4")}>
            <ProductListItem
                name="Hiking"
                description="Lorem ipsum..."
                image="https://cordmagazine.com/wp-content/uploads/2019/10/Tourism-Hiking-Austria-2019-Walking-Holiday.jpg"
            />

            <ProductListItem
                name="Hiking"
                description="Lorem ipsum..."
                image="https://cordmagazine.com/wp-content/uploads/2019/10/Tourism-Hiking-Austria-2019-Walking-Holiday.jpg"
            />

            <ProductListItem
                name="Hiking"
                description="Lorem ipsum..."
                image="https://cordmagazine.com/wp-content/uploads/2019/10/Tourism-Hiking-Austria-2019-Walking-Holiday.jpg"
            />
        </div>
    );
};

export default App;

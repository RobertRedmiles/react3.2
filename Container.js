import Genre from "./Genre";

function Container() {

    return (
        <>
            <h1>Movie app</h1>
            <Genre 
                name="Comedy"
                description="Laugh Out Loud,Fall Out Of Your Chair"
                movieTitle1="The Machine"
                movieTitle2="Cocaine Bear"
                year={2023}
            />

            <Genre 
                name="Romance"
                description="Heart Warming To The Soul"
                movieTitle1="The Little Mermaid"
                movieTitle2="See You On Venus"
                year={2023}
            />

        </>
    )
}

export default Container;
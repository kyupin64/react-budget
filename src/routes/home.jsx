export default function Home() {
    return (
        <>
            <form id="new-budget-form">
                <h1>Create a new budget</h1>
                <label for="name">Name of budget:</label>
                <input id="name"></input>
                <button>Submit</button>
            </form>
        </>
    );
};
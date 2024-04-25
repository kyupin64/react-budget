export default function Menu({ setShowMenu }) {
    const listPlaceholder = ["budget1", "budget2", "budget3"];

    return (
        <>
            <label for="budget-list">Saved Budgets:</label>
            <select id="budget-list" name="budget-list">
                {listPlaceholder.map((item) => <option value={item}>{item}</option>)}
            </select>
        </>
    );
};
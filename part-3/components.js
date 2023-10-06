const Person = ({name, age, hobbies}) => (
    <div>
        <p>Learn some information about this person!</p>

        <h2>Name: {name}</h2>
        <h2>Age: {age}</h2>
        <h2>Hobbies:</h2>
            <ul>
                {hobbies.map((h) => <li>{h}</li>)}
            </ul>

        <h3>
        {age >= 18 ? 'Please go vote!' : 'You must be 18 to vote'}
        </h3>
    </div>
)

Person.defaultProps = {
    hobbies: ['n/a']
}
const App = () => (
    <div>
        <Person name="Dawson" age={27} hobbies={['tennis', 'coding']}/>

        <Person name="Reese" age={16} hobbies={['golf', 'trumpet', 'riding bikes']}/>

        <Person name="Hannah" age={27} hobbies={['makeup', 'hair', 'shopping', 'wine tasting']}/>
    </div>
)

ReactDOM.render(<App />, document.getElementById('root'))
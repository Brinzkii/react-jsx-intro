const App = () => (
    <div className='tweet'>
        <Tweet username="User 1" name="Brandon" message="This is the first tweet" date="10/6/23"/>

        <Tweet username="User 2" name="Kenny" message="This is the second tweet" date="10/16/23"/>

        <Tweet username="User 3" name="Gilbert" message="This is the third tweet" date="10/28/23"/>
    </div>
)

ReactDOM.render(<App />, document.getElementById('root'))
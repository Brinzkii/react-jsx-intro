const Tweet = (props) => (
    <div>
        <hr />
        <h4>{props.username} <small>({props.name})</small></h4>
        <p>{props.message}</p>
        <small>{props.date}</small>
    </div>
)
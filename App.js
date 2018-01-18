class TaskList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            task: [
                {
                    id: 1,
                    description: 'fait ton travail',
                    complete: true
                },
                {
                    id: 1,
                    description: 'Je ferai mon travaill',
                    complete: true
                },
                {
                    id: 1,
                    description: 'Je ferai jamais ce travail',
                    complete: false
                },
                {
                    id: 1,
                    description: 'je serai jamais au travail',
                    complete: false
                }
            ]
        };
    }
    render(){
        return(
            <div>
                <h1>All Tasks</h1>
                {this.state.task.map(task =>{
                    return(
                        <article key={task.id}>
                            <span>#{task.id} - {task.description} -------- </span>
                            {task.complete ? 'Bravo' : 'féniant'}
                        </article>
                    )
                })}
            </div>
        )
    }
}

ReactDOM.render(<TaskList />, document.getElementById('root'))

class TaskApp extends React.Component{
    render(){
        return(
            <div>
                <TaskList />
            </div>
        )
    }
}
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
        const incompleteTask = this.state.task.filter(task => task.complete === false) 
        const completeTask = this.state.task.filter(task => task.complete === true) 

        return(
            <div>
                <h1>All Tasks</h1>
                {this.state.task.map(task => <Tasks key={task.id} task={task} /> )}

                <h1>Tasks incomplete</h1>
                {incompleteTask.map(task => <Tasks key={task.id} task={task} />)}

                <h1>Tasks complete</h1>
                {completeTask.map(task => <Tasks key={task.id} task={task} />)}
            </div>
        )
    }
}

const Tasks = (props) =>(
    <article>
        <span>#{props.task.id} - {props.task.description} -------- </span>
        {props.task.complete ? 'Bravo' : 'féniant'}
    </article>
)

/* class Tasks extends React.Component {
    render() {
        return(
            <article>
                <span>#{this.props.task.id} - {this.props.task.description} -------- </span>
                {this.props.task.complete ? 'Bravo' : 'féniant'}
            </article>
        )
    }
} */


ReactDOM.render(<TaskApp />, document.getElementById('root'))
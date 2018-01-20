
class TaskApp extends React.Component{
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
                    id: 2,
                    description: 'Je ferai mon travaill',
                    complete: true
                },
                {
                    id: 3,
                    description: 'Je ferai jamais ce travail',
                    complete: false
                },
                {
                    id: 4,
                    description: 'je serai jamais au travail',
                    complete: false
                }
            ]
        };
    }

    Alltask(){
        return this.state.task;
    }
    incompletetask() {
        return this.state.task.filter(task => !task.complete);
    }
    completetask() {
        return this.state.task.filter(task => task.complete);
    }
    render(){
        return(
            <div>
                <TaskList task={this.Alltask()} title="Mes taches"/>
                <TaskList task={this.completetask()} title="Mes taches incomplétes"/>
                <TaskList task={this.completetask()} title="Mes taches completes"/>
            </div>
        )
    }
}
class TaskList extends React.Component{
    render(){
        return(
            <div>
                <h1>{this.props.title}</h1>
                
                {this.props.task.map(task => <Tasks key={task.id} task={task} /> )}
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
ReactDOM.render(<TaskApp />, document.getElementById('root'))
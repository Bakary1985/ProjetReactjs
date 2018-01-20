
const ROUTER={
    home: '/',
    incompletetask: '/incompletetask',
    completetask: '/completetask'
}

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

    renderRender(){
        switch (window.location.pathname) {
            case ROUTER.home: return <TaskList task={this.Alltask()} title="All task" /> ;       
            case ROUTER.incompletetask: return <TaskList task={this.incompletetask()} title="incomplete task"/>;        
            case ROUTER.completetask: return <TaskList task={this.completetask()} title="complete task"/> ;       
            default: return <NotFount/>
                
        }
    }
    render(){
        return(
            <div>
                <ul>
                    <li><a href={ROUTER.home}>All tasks</a></li>
                    <li><a href={ROUTER.completetask}>complete task</a></li>
                    <li><a href={ROUTER.incompletetask}>incomplete task</a></li>
                    
                </ul>
                {this.renderRender()}
            </div>
        )
    }
}


const TaskList = (props) => (
    <div>
        <h1>{props.title}</h1>
        {props.task.map(task => <Tasks key={task.id} task={task} />)}
    </div>
)

const Tasks = (props) =>(
    <article>
        <span>#{props.task.id} - {props.task.description} -------- </span>
        {props.task.complete ? 'Bravo' : 'féniant'}
    </article>
)

const NotFount = () => <h1>Page not found </h1>


ReactDOM.render(<TaskApp />, document.getElementById('root'))
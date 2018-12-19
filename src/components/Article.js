import React, {Component, PureComponent} from 'react';

class Article extends PureComponent {
    constructor(props){
        super(props)

        this.state = {
            isOpen: props.defaultOpen,
            count: 0
        };
        
    }

    componentWillMount(){
        console.log('---', 'mounting');
    }

    componentWillReceiveProps(nextProps){
        // console.log('---', 'will recieve props');
        if ( nextProps.defaultOpen !== this.props.defaultOpen ) {
            this.setState({
                isOpen: nextProps.defaultOpen
            });
        }
    }

    // shouldComponentUpdate(nextProps, nextState){
    //     return this.state.isOpen !== nextState.isOpen;
    // }
    
    componentWillUpdate(){
        console.log('---', 'will update');
    }
    /*
    state = {
        isOpen: false
    }
    */

    render(){
        const {article} = this.props;
        const body = this.state.isOpen && <section>{article.text}</section>;
        return (
            <div className="card mx-auto" style={{color:'black', width: '50%'}}>
                <div className="card-header">
                   <h2 onClick = {this.incrementCounter}>
                        {article.title}
                        clicked {this.state.count}
                        <button onClick={this.handleClick} className="btn btn-primary btn-lg float-right">
                            {this.state.isOpen ? 'close' : 'open'}
                        </button>
                    </h2> 
                </div>
                <div className="card-body">
                    {body}
                    <h6 className="card-subtitle text-muted">
                        creation date: {(new Date(article.date)).toDateString()}
                    </h6>
                </div>
                
            </div>
        )
    }

    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    incrementCounter = () => {
        this.setState({
            count: this.state.count + 1
        });
    }
}

export default Article;
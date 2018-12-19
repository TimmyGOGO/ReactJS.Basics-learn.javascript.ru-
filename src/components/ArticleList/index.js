import React, {Component, PureComponent} from 'react';
import Article from '../Article';
import './style.css';

export default class ArticleList extends PureComponent {

    render(){   
        console.log('---', 2);
        const articleElements = this.props.articles.map((a, index) =>
            <li key = {a.id} className="article-list__li">
                <Article article = {a} defaultOpen = { index === 0 }/>
            </li>
        );

        return (
            <ul>
                {articleElements}
            </ul>
        )
    }
}
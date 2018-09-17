import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import Footer from './footer.js';

class News extends Component {

    render() {
        return (
            <div> На этой неделе преобладающее влияние на погоду в Беларуси будет оказывать антициклон. В основном без осадков, в начале недели по ночам будет прохладно, но в середине недели на территорию нашей страны начнет поступать теплый воздух с юго-запада Европы и до конца рабочей недели установится теплая погода. Об этом сообщает Белгидромет Минприроды.
                < Footer />
            </div>
        )
    }
}

export default News;
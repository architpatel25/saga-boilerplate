import React from 'react';
import { connect } from 'react-redux';
import { getNews } from '../store/actions/actions';
import { withRouter } from 'react-router-dom';

const imgStyle = {
    hight: 'auto',
    width: '80%',
    border: '4px solid RebeccaPurple ',
    borderRadius: '5%'
};
const articleStyle = {
    width: '50%',
    margin: '0 auto',
    color: 'olive'
}
const errorMessage = {
    color: 'red'
}

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount = () => {
        this.props.getNews();
    }

    static getDerivedStateFromProps = (nextProps, prevState) => {
        console.log('getDerivedStateFromProps', nextProps, prevState)
    }

    render() {
        console.log('this', this.props)
        let Home = ({ article }) => (
            this.props.article ?
                <article style={articleStyle} >
                    {this.props.article.error && <h2 style={errorMessage}>{this.props.article.error}</h2>}
                    {this.props.article.title && <div>
                        <h1>{this.props.article.title}</h1>
                        <img style={imgStyle} src={this.props.article.urlToImage} alt="" />
                        <h2>{this.props.article.description}</h2>
                        <a href={this.props.article.url} target="_blank">READ MORE</a>
                    </div>}
                </article> :
                null
        );

        return (
            <div>
                {/* <button onClick={this.props.getNews}>Press to see News</button> */}
                <Home />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log('state', state)
    return ({
        article: state.news,
    })
}

const mapDispatchToProps = {
    getNews: getNews,
};

Home = connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)

export default withRouter(Home);

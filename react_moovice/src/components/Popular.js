import React from 'react';
import Card from './movie/Card.js';


class Popular extends React.Component {

    constructor() {
        super();

        this.state = {
            movies: []
        }

    };

    componentDidMount() {
        fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=134d92c3d72c8501356da2496ace8c7e')
            .then(res => res.json())
            .then(json => {
                // console.log('hello fetch', json.results)
                this.setState({
                    movies: json.results,
                })
            });
    }



    renderCards() {
        return this.state.movies.map((elem, i) => {
            // console.log('je suis index du film', i)
            // console.log('je suis un element', elem)
            return (
                <Card
                    key={i}
                    imgUrl={elem.poster_path}
                    title={elem.title}
                    descripton={elem.overview}
                    id= {elem.id}
                >
                </Card>
            )
        })

    }
    render() {
        // console.log('hello render', this.state)
        // console.log('hello les movies', this.state.movies)
        return (
            <div className="row col-6">
                Popular
                {this.renderCards()}

            </div>



        );


    }

}

export default Popular;
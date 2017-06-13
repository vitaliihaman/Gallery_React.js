import React, {Component} from 'react';
import style from './picture.css';



class Picture extends Component {
    static propTypes = {};
    state = {
        imgUrl: ""
    };

    componentDidMount() {

        fetch(`https://api.500px.com/v1/photos/${this.props.match.params.id}?consumer_key=wB4ozJxTijCwNuggJvPGtBGCRqaZVcF6jsrzUadF`)
            .then((response) => {
                response.json().then((data) => {
                    this.setState({
                        imgUrl: data.photo.image_url
                    })
                });
            });
    }

    render() {
        return this.state.imgUrl ? <div>
            <img src={this.state.imgUrl}/>
        </div> : <div>loading...</div>

    }
}
export default Picture;
import React, {Component} from 'react';
import style from './pictureList.css';
import List from '../../components/list'


class PicturesList extends Component {
    static self = this;
    static propTypes = {};
    state = {
        photos: []
    };

    componentDidMount() {
        fetch("https://api.500px.com/v1/photos?feature=popular&consumer_key=wB4ozJxTijCwNuggJvPGtBGCRqaZVcF6jsrzUadF")
            .then((response) => {
                response.json().then((data) => {
                    console.log(data.photos);
                    this.setState({photos: data.photos});
                });
            });
    }

    render() {

        return <div>
            <List name="first 20 photos"
                  className={style.list}
                  photos={this.state.photos}/>
        </div>
    }


}

export default PicturesList;
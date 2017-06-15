import React, {Component} from 'react';
import styles from './pictureList.css';
import List from '../../components/list';
import Button from '../../components/button';
import {getPicturesList} from '../../api/api';
import fullSizeScreenStyles from '../FullSizeScreen/fullSizeScreen.css'


class PicturesList extends Component {
    static propTypes = {};
    state = {
        photos: [],
        page: 0
    };

    showMorePictures = ()=>{
        this.setState({
            page: this.state.page + 1
        });

        getPicturesList(this.state.page + 1).then((data) => {
            console.log(data.photos);
            this.setState({photos: this.state.photos.concat(data.photos)});
        });
    };


    componentDidMount() {
        getPicturesList(this.state.page).then((data) => {
            console.log(data.photos);
            this.setState({photos: data.photos});
        });
    }


    render() {
        return !!this.state.photos.length?<div className={styles.listWrapper}>
            <List photos={this.state.photos}
                  className={styles.list}/>
            <Button onClick={this.showMorePictures}
                    className={styles.showMoreBtn}>
                + Show more
            </Button>
        </div>:<div className={fullSizeScreenStyles.wrapGeneral}>
            <div className={fullSizeScreenStyles.fullScreenWrapper}>Loading...</div>
        </div>
    }
}


export default PicturesList;
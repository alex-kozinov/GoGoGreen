import React from 'react';
import  "./styles.css";
import "../../styles/main.css"
import akinator from '../../imgs/akinator.png';


export class Akinator extends React.Component {
    constructor (props) {
        super(props);
    }

    render() {
        return (
            <table className={'all_window'}>
                <tr className={'upper-side'}>
                    <div className={'top-container'}>
                        <div className={'text-box'}>
                            <div clasName={'text-styles dialog-colors'}>
                                Привет!
                            </div>
                        </div>
                        <div className={'image-box'}>
                            <img src={akinator} className={'akinator-position'}/>
                        </div>
                    </div>

                </tr>
                <tr className={'lower-side'}>
                    <div className={'relative-test'}>
                        <div className={'test'}/>
                    </div>
                </tr>
            </table>
        );
    }
}

export default Akinator;
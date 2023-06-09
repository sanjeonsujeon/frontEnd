import React from 'react';
import { Link } from 'react-router-dom';

const BoardBox = (props) => {
    console.log('beerBox/props: ', props);
    console.log('beerBox/props.title: ', props.title);
    return (
        <>
            <Link
                to={`/detail/${props.id}`}
            >
                <div>
                    <h1>{props.title}</h1>
                </div>
            </Link>
        </>
    );
};

export default BoardBox;
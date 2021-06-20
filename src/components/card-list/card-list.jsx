import React from 'react';
import {CardItem} from "../card-item/card-item";
import './card-list.style.css'
export const CardList = (props) => {
    return (
        <div className='card-list'>
            {
                props.monsters.map(
                    monster=> (
                        <CardItem key={monster.id} monster = {monster} />
                    )
                )
            }
        </div>
    );
}
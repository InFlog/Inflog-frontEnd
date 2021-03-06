import React from 'react'
import "../components/style.css"

//functional component
function Review({rating, title, number_rating}) {
    return (
        <>
             <div className="stars-o">
                 {Array(rating)
                 .fill()
                .map((_, i) => (
                    //star emoji/icon
                <div>⭐</div>
                 ))}
             </div>
             <span class="number-rating">{number_rating}</span>          
        </>
    )
}

export default Review



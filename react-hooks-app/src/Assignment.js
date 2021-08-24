import React from 'react';
function Image(){
    return <img alt="Image Here"/>;
}
function Thumbnail(){
    return <h3>Building an Inclusive Organization</h3>;
}
function BookDetails(){
    return <h4>
        Stephen-Frost, Raafi-Karim<br></br>15 min read 17.1kreads
    </h4>;
}
class Card extends React.Component{
    render(){
        return <div>
            <br></br>
            <Image />
            <Thumbnail/>
            
            <BookDetails/>
        </div>
    }
}
export default Card
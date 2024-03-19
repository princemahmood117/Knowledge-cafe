import PropTypes from 'prop-types'

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;

        return (
            <div>
               
                <h3 className='text-xl border mb-4 ml-2 p-2 rounded'>{title}</h3>
     
            </div>
        );

    }

Bookmark.propTypes = {
    bookmark : PropTypes.object 
}
export default Bookmark;
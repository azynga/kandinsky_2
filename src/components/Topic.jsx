import { Link } from 'react-router-dom';

export const Topic = ({ topicTitle, topicContent }) => {
    const links = Object.entries(topicContent.links).map((link) => {
        return (
            <li key={link[0]}>
                <Link to={link[1]} target='_blank'>
                    {link[0]}
                </Link>
            </li>
        );
    });

    return (
        <div className='topic'>
            <h4>{topicTitle}</h4>
            <ul>{links}</ul>
        </div>
    );
};

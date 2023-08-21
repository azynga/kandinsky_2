import { Link, useLocation } from 'react-router-dom';
import { getSnakeCase } from '../helper/format-path';

export const Topic = ({ topic }) => {
    const queryParameters = new URLSearchParams(useLocation().search);
    const highlightedLink = queryParameters.get('highlight');

    const links = topic.links.map((link) => {
        const isHighlightedLink =
            highlightedLink === getSnakeCase(link.linkTitle);
        return (
            <li
                key={link.linkTitle}
                className={isHighlightedLink ? 'highlight' : ''}
            >
                <Link to={link.url} target='_blank'>
                    {link.linkTitle}
                </Link>
            </li>
        );
    });

    return (
        <div className='topic'>
            <h4>{topic.topicTitle}</h4>
            <ul>{links}</ul>
        </div>
    );
};

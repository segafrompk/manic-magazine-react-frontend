import parseArticleText from '../../../apis/ParseArticleText';

const TextDisplay = ({ text }) => {
    return (
        <div
            className='article-text'
            dangerouslySetInnerHTML={{
                __html: parseArticleText(text),
            }}
        ></div>
    );
};

export default TextDisplay;

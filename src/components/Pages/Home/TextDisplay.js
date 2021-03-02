import parseArticleText from '../../../apis/ParseArticleText';
import parse from 'html-react-parser';
import ImageGallery from 'react-image-gallery';
import { apiAddress } from '../../../apis/ENV';
import './ImageGallery.css';

const fixImageUrl = (x) => {
    x = x.replace(/^\/uploads\//, (y) =>
        y.replace('/uploads/', `${apiAddress}/uploads/`)
    );
    return x;
};

const TextDisplay = ({ text, galleries }) => {
    const renderText = (textArrToRender, galleriesData) => {
        if (galleries && galleries !== []) {
            const textArray = textArrToRender.split('[!gallery]');
            const galleriesElements = {};
            galleriesData.forEach((gallery) => {
                const galleryData = gallery.galleryImages.map((imageData) => {
                    return {
                        original: fixImageUrl(imageData.formats.medium.url),
                        thumbnail: fixImageUrl(imageData.formats.thumbnail.url),
                    };
                });
                galleriesElements[gallery.slug] = galleryData;
            });

            const arrayToReturn = textArray.map((slice) => {
                const galleryPresent = slice.match(/^\(.*?\)/);
                if (galleryPresent && galleryPresent !== []) {
                    let galleryName = galleryPresent[0].substring(
                        galleryPresent[0].indexOf('(') + 1,
                        galleryPresent[0].length - 1
                    );
                    slice = slice.slice(galleryPresent[0].length);
                    return (
                        <>
                            {galleriesElements[galleryName] ? (
                                <ImageGallery
                                    autoPlay={false}
                                    showNav={false}
                                    lazyLoad={true}
                                    showPlayButton={false}
                                    showFullscreenButton={false}
                                    items={galleriesElements[galleryName]}
                                />
                            ) : (
                                <div className='gallery-error'>
                                    !!!Please check if selected gallery "
                                    {galleryName}" exists and if it was imported
                                    into the article!!!
                                </div>
                            )}
                            {parse(parseArticleText(slice))}
                        </>
                    );
                } else {
                    return parse(parseArticleText(slice));
                }
            });
            return arrayToReturn;
        } else {
            return parse(parseArticleText(textArrToRender));
        }
    };

    // const galleriesNames = textArray.map((gallerySlice) => {
    //     let galleryNameArr = gallerySlice.match(/^\(.*?\)/);
    //     if (galleryNameArr !== []) {
    //         let galleryName = galleryNameArr[0].substring(
    //             galleryNameArr[0].indexOf('(') + 1,
    //             galleryNameArr[0].length - 1
    //         );
    //         return galleryName;
    //     } else {
    //         return '';
    //     }
    // });

    // const renderGalleries = (galleriesElements) => {
    //     const arrayToReturn = textArray.map((slice) => {
    //         const galleryPresent = slice.match(/^\(.*?\)/)
    //         if (galleryPresent !== []) {
    //             let galleryName = galleryPresent[0].substring(
    //                 galleryPresent[0].indexOf('(') + 1,
    //                 galleryPresent[0].length - 1
    //             );
    //             slice = slice.slice(galleryPresent[0].length)
    //             return (<>{galleriesElements[galleryName]}{parse(parseArticleText(slice))}</>)
    //         } else {return parse(parseArticleText(slice))}
    //     })
    // };

    return <div className='article-text'>{renderText(text, galleries)}</div>;
};

export default TextDisplay;

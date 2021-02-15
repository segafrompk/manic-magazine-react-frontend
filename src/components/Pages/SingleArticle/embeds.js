const facebookScript = document.createElement('script');
facebookScript.src =
    'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v9.0';
facebookScript.async = '';
facebookScript.defer = '';
facebookScript.crossOrigin = 'anonymous';
facebookScript.nonce = 'iIuVw194';

// '<div id="fb-root"></div><script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v9.0" nonce="iIuVw194"></script>';

const facebookRoot = document.createElement('div');
facebookRoot.id = 'fb-root';
facebookScript.onload = () => {
    window.FB.init({ autoLogAppEvents: true, xfbml: true, version: 'v9.0' });
};

const twitterScript = document.createElement('script');
twitterScript.src = 'https://platform.twitter.com/widgets.js';
twitterScript.charset = 'utf-8';
twitterScript.async = '';
twitterScript.onload = () => {
    window.twttr.widgets.load();
};
// '<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> ';

const instagramScript = document.createElement('script');
instagramScript.src = 'https://www.instagram.com/embed.js';
instagramScript.async = '';
instagramScript.onload = () => {
    window.instgrm.Embeds.process();
};
// '<script async src="//www.instagram.com/embed.js"></script>';

export { facebookScript, facebookRoot, twitterScript, instagramScript };

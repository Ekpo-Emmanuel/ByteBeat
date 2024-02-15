import React from 'react';
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaReddit, FaPinterest, FaCopy } from "react-icons/fa";


const PostShare = ({ postTitle, postUrl }) => {
    const shareTwitter = () => {
        const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(postUrl)}&text=${encodeURIComponent(postTitle)}`;
        window.open(twitterUrl, '_blank');
    };

    const shareFacebook = () => {
        const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(postUrl)}`;
        window.open(facebookUrl, '_blank');
    };

    const shareLinkedIn = () => {
        const linkedInUrl = `https://www.linkedin.com/shareArticle?url=${encodeURIComponent(postUrl)}&title=${encodeURIComponent(postTitle)}`;
        window.open(linkedInUrl, '_blank');
    };

    const shareReddit = () => {
        const redditUrl = `https://www.reddit.com/submit?url=${encodeURIComponent(postUrl)}&title=${encodeURIComponent(postTitle)}`;
        window.open(redditUrl, '_blank');
    };

    const sharePinterest = () => {
        const pinterestUrl = `https://www.pinterest.com/pin/create/button/?url=${encodeURIComponent(postUrl)}&description=${encodeURIComponent(postTitle)}`;
        window.open(pinterestUrl, '_blank');
    };
    
    const copyToClipboard = () => {
        navigator.clipboard.writeText(postUrl);
        alert('Copied to clipboard!');
    }

    return (
        <div className="position-sticky" style={{ top: 150 }}>
            <span className="d-inline-block mb-3 small">SHARE</span>
            <ul className="social-share icon-box">
                <li className="d-inline-block d-lg-block me-2 mb-2" onClick={shareTwitter}>
                    <FaTwitter />
                </li>
                <li className="d-inline-block d-lg-block me-2 mb-2" onClick={shareFacebook}>
                    <FaFacebookF />
                </li>
                <li className="d-inline-block d-lg-block me-2 mb-2" onClick={shareLinkedIn}>
                    <FaLinkedinIn />
                </li>
                <li className="d-inline-block d-lg-block me-2 mb-2" onClick={shareReddit}>
                    <FaReddit />
                </li>
                <li className="d-inline-block d-lg-block me-2 mb-2" onClick={sharePinterest}>
                    <FaPinterest />
                </li>
                <li className="d-inline-block d-lg-block me-2 mb-2" onClick={copyToClipboard}>
                    <FaCopy />
                </li>
            </ul>
        </div>
    );
};

export default PostShare;

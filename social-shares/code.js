document.addEventListener("DOMContentLoaded", function () {
    let pageUrl = encodeURIComponent(window.location.href);
    let pageTitle = encodeURIComponent(document.title || "Check this out!");

    document.getElementById("facebookShare").href = `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`;
    document.getElementById("twitterShare").href = `https://twitter.com/intent/tweet?url=${pageUrl}&text=${pageTitle}`;
    document.getElementById("linkedinShare").href = `https://www.linkedin.com/sharing/share-offsite/?url=${pageUrl}`;
    document.getElementById("whatsappShare").href = `https://api.whatsapp.com/send?text=${pageTitle}%20${pageUrl}`;
    document.getElementById("redditShare").href = `https://www.reddit.com/submit?url=${pageUrl}&title=${pageTitle}`;
});

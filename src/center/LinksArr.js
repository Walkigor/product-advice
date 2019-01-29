import React, { Component } from 'react';
import LinkItem from './LinkItem';

const items = [
    {
        url: "https://www.youtube.com/user/GoAtlassian/playlists?view=50&amp;sort=dd&amp;shelf_id=16",
        img: "https://wac-cdn.atlassian.com/dam/jcr:6bb9b9dc-375c-489c-828f-5ccb6555ff76/status-play.svg?cdnVersion=kw",
        alt: "View product demos",
        name: "Product demos"
    },
    {
        url: "http://www.atlassian.com/try",
        img: "https://wac-cdn.atlassian.com/dam/jcr:7614dcd7-14ce-4b11-ad65-00758efbb4c5/admin-download.svg?cdnVersion=kw",
        alt: "Product tutorials",
        name: "Free trial"
    },
    {
         url: "http://confluence.atlassian.com/display/ATLAS/Product+Installation+Guides",
         img: "https://wac-cdn.atlassian.com/dam/jcr:14627dd6-76a2-4cc8-8e5f-6837651432fc/admin-tools.svg?cdnVersion=kw",
         alt: "Read installation guides",
         name: "Setup guides"
    },
    {
        url: "https://www.youtube.com/user/GoAtlassian/playlists?shelf_id=10&amp;sort=dd&amp;view=50",
        img: "https://wac-cdn.atlassian.com/dam/jcr:83df34b4-2c3b-48f9-ada1-928dd41771de/object-lightbulb.svg?cdnVersion=kw",
        alt: "Product tutorials",
        name: "Free trial"
    },
    {
        url: "https://www.atlassian.com/university",
        img: "https://wac-cdn.atlassian.com/dam/jcr:adc57cc9-8d1c-401b-9d51-52dee18cbe79/security-lifesaver.svg?cdnVersion=kw",
        alt: "Product tutorials",
        name: "Training"
     }
];

class LinksTest extends Component {
  render() {
    return (
        <>
        {items.map((item, i) => <LinkItem key={i} url={item.url} img={item.img} alt={item.alt} name={item.name} />)}
        </>
    );
  }
}

export default LinksTest;
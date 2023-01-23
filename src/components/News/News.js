import NewsLine from './NewsLine'
import NewsHeader from "./NewsHeader"

const news = [{text: "News1", icon: "https://www.hubspot.com/hs-fs/hubfs/HubSpot-English-Flywheel-Jul-27-2020-04-17-18-68-PM.png?width=1360&name=HubSpot-English-Flywheel-Jul-27-2020-04-17-18-68-PM.png&hubs_post=blog.hubspot.com/website/how-to-make-picture-into-link&hubs_post-cta=https%3A//www.hubspot.com/hs-fs/hubfs/HubSpot-English-Flywheel-Jul-27-2020-04-17-18-68-PM.png%3Fwidth%3D1360%26name%3DHubSpot-English-Flywheel-Jul-27-2020-04-17-18-68-PM.png&_ga=2.17792441.1092874003.1674095222-135744083.1674095222"},
{text: "News2", icon: "https://www.hubspot.com/hs-fs/hubfs/HubSpot-English-Flywheel-Jul-27-2020-04-17-18-68-PM.png?width=1360&name=HubSpot-English-Flywheel-Jul-27-2020-04-17-18-68-PM.png&hubs_post=blog.hubspot.com/website/how-to-make-picture-into-link&hubs_post-cta=https%3A//www.hubspot.com/hs-fs/hubfs/HubSpot-English-Flywheel-Jul-27-2020-04-17-18-68-PM.png%3Fwidth%3D1360%26name%3DHubSpot-English-Flywheel-Jul-27-2020-04-17-18-68-PM.png&_ga=2.17792441.1092874003.1674095222-135744083.1674095222"},
]
function News() {
  return (
    <main>
       <NewsHeader/>
         <ul className="news_list">
      {news.map(item=> <NewsLine props = {item} key={item.text}/>)}
     </ul>
    </main>
  );
}

export default News;
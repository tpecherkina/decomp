import SectionItem from './SectionItem'

const sections = [{text: "Видео"},
{text: "Картинки"},
]
function Sections() {
  return (
    <main>
         <ul className="sections_list">
      {sections.map(item=> <SectionItem props = {item} key={item.text}/>)}
     </ul>
    </main>
  );
}

export default Sections;
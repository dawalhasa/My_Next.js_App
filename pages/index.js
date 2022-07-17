import Styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={Styles.container}>
      <div>
        <title>Home Page</title>
      </div>
      <div>
        <h1 className={Styles.homePageTitile}>ལྷན་རྒྱས་ཀུན་ཁམས་བཟང་།</h1>
        <p>
          ངའི་མིང་ལ་ཟླ་བ་ཡིན། ང་ད་ལྟ་གློག་ལས་སླབ་སྦྱོང་བྱེད་ཀྱིན་ཡོད།་
        </p>
      </div>
    </div>
  )
}

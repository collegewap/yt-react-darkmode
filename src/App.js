import React from "react";
import useDarkMode from "./useDarkMode";
import { BsMoon, BsSun } from "react-icons/bs";
function App() {
  const [isDark, setIsDark] = useDarkMode();
  return (
    <div>
      <nav className="navigation">
        <div className="logo">Dark Mode</div>
        <button className="toggle_btn" onClick={() => setIsDark(!isDark)}>
          {isDark ? (
            <BsSun size="24" color="#ff0" />
          ) : (
            <BsMoon size="24" color="#000" />
          )}
        </button>
      </nav>
      <h1>This is a heading</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit earum
        molestias, error, architecto unde accusamus quae quo reprehenderit,
        quasi nesciunt perferendis saepe debitis necessitatibus perspiciatis
        vitae eaque quaerat libero corporis? Eligendi iste ipsam harum veritatis
        aspernatur deleniti, aliquid autem earum nemo recusandae natus officia
        dolores neque ad asperiores nihil voluptate voluptas. Minus, at
        doloribus commodi veritatis enim corrupti quis voluptatem! Ex soluta ut
        quo dignissimos molestiae voluptate corrupti ab laborum quaerat,
        mollitia labore delectus possimus ea vitae architecto voluptatum sed
        fugit distinctio! Minus perferendis harum praesentium rerum et, tenetur
        quod. Dolorum obcaecati possimus, magni ea earum hic consectetur. Eos
        placeat recusandae dolores commodi tenetur officiis. Fugit ipsa odit
        eveniet omnis quasi. Numquam natus temporibus architecto tempore ducimus
        minima ex molestiae. Necessitatibus iure nesciunt exercitationem magni
        omnis a, obcaecati, laudantium deserunt sit fugiat, quibusdam aspernatur
        placeat. Vero at tempora, voluptatem ducimus minima impedit eius
        reiciendis eaque repellendus maiores deleniti fugit repudiandae?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus
        asperiores assumenda earum voluptatibus a. Nam ullam alias consequuntur
        odio voluptates laudantium enim architecto a, distinctio deserunt
        corrupti, placeat quisquam minus. Reprehenderit sequi ipsam fuga minus
        at harum quo aspernatur suscipit minima illum commodi laboriosam sit
        autem officiis, magni error! Accusamus iusto dolores voluptatem
        inventore quae, velit nisi! Odit, in mollitia. Dicta, sunt debitis,
        nesciunt reprehenderit vel aperiam accusamus vitae tenetur officia
        exercitationem iusto harum voluptate officiis corrupti odio nulla soluta
        quibusdam quae. Optio dicta recusandae, quia animi delectus deleniti
        placeat? Tempora, nam sequi? Maxime assumenda, quo animi tempore
        inventore cupiditate deleniti aut harum nam porro, fugiat quaerat
        consequuntur excepturi expedita facilis maiores eveniet ullam, eum
        saepe! Sunt cumque voluptates nobis. Nisi perspiciatis, necessitatibus,
        aperiam sequi debitis consectetur veniam exercitationem autem quis natus
        aut laborum omnis non. Quam, rem ratione praesentium sit ab dolores
        facilis tenetur quia deleniti beatae, illum officia. Accusantium
        recusandae ab numquam quaerat quos deserunt unde magni, debitis animi
        incidunt, aliquam corporis repellat quod soluta! Perspiciatis molestias
        possimus aperiam nobis at fuga iusto officia deleniti omnis beatae.
        Aspernatur?
      </p>
    </div>
  );
}

export default App;

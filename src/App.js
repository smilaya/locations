import { useState } from "react";

const locations = [
  {
    id: "d9d52bd8-58fa-4b7f-9814-77d450a5c5f9",
    areaUA: "Київська",
    districtUA: "Бородянський",
    cityUA: "Немішаєве",
    areaEN: "Kyivska",
    districtEN: "Borodianskyi",
    cityEN: "Nemishaieve",
  },
  {
    id: "d9fd1390-67ae-423f-93da-06898bdbe5ec",
    areaUA: "Львівська",
    districtUA: "Городоцький",
    cityUA: "Городок",
    areaEN: "Lvivska",
    districtEN: "Horodotskyi",
    cityEN: "Horodok",
  },
  {
    id: "da033e2e-7eab-46e9-ae9b-35559e29512a",
    areaUA: "Сумська",
    districtUA: "Тростянецький",
    cityUA: "Тростянець",
    areaEN: "Sumska",
    districtEN: "Trostianetskyi",
    cityEN: "Trostianets",
  },
  {
    id: "da594f64-10ee-4c3c-b2a8-a453027a0550",
    areaUA: "Одеська",
    districtUA: "Роздільнянський",
    cityUA: "Кучурган",
    areaEN: "Odeska",
    districtEN: "Rozdilnianskyi",
    cityEN: "Kuchurhan",
  },
  {
    id: "db8fb200-5782-42c8-bb6e-83fc1618d7f7",
    areaUA: "Житомирська",
    districtUA: "Радомишльський",
    cityUA: "Радомишль",
    areaEN: "Zhytomyrska",
    districtEN: "Radomyshlskyi",
    cityEN: "Radomyshl",
  },
  {
    id: "dbbb6091-8055-4423-b360-8fa5a82d422d",
    areaUA: "Одеська",
    districtUA: "Овідіопольський",
    cityUA: "Таїрове",
    areaEN: "Odeska",
    districtEN: "Ovidiopolskyi",
    cityEN: "Tairove",
  },
  {
    id: "dbf379bb-3586-4578-b69b-97dfeb917bbe",
    areaUA: "Вінницька",
    districtUA: "Теплицький",
    cityUA: "Теплик",
    areaEN: "Vinnytska",
    districtEN: "Teplytskyi",
    cityEN: "Teplyk",
  },
  {
    id: "dbf8565c-f278-4913-8f95-151c5ef67839",
    areaUA: "Луганська",
    districtUA: "Троїцький",
    cityUA: "Троїцьке",
    areaEN: "Luhanska",
    districtEN: "Troitskyi",
    cityEN: "Troitske",
  },
  {
    id: "dc1f0bb4-f361-4fb9-b3c0-8d21e17a568e",
    areaUA: "Полтавська",
    districtUA: "Карлівський",
    cityUA: "Карлівка",
    areaEN: "Poltavska",
    districtEN: "Karlivskyi",
    cityEN: "Karlivka",
  },
  {
    id: "dc735d92-2f00-4deb-a813-60d57853518f",
    areaUA: "Житомирська",
    districtUA: "Баранівський",
    cityUA: "Довбиш",
    areaEN: "Zhytomyrska",
    districtEN: "Baranivskyi",
    cityEN: "Dovbysh",
  },
  {
    id: "dcc1d299-f5de-4e1e-8c5d-5b09e5e293a7",
    areaUA: "Донецька",
    districtUA: "Нікольський",
    cityUA: "Нікольське",
    areaEN: "Donetska",
    districtEN: "Nikolskii",
    cityEN: "Nikolske",
  },
  {
    id: "dcd3b587-92c7-4359-8fc9-807ce2266186",
    areaUA: "Харківська",
    districtUA: "Харківський",
    cityUA: "Покотилівка",
    areaEN: "Kharkivska",
    districtEN: "Kharkivskyi",
    cityEN: "Pokotylivka",
  },
  {
    id: "dcfe22fa-95c1-49e6-9f7d-a19088a97f63",
    areaUA: "Львівська",
    districtUA: "Дрогобицький",
    cityUA: "Дрогобич",
    areaEN: "Lvivska",
    districtEN: "Drohobytskyi",
    cityEN: "Drohobych",
  },
  {
    id: "dd2ab3ef-b6c8-4006-883b-1191731bdcf3",
    areaUA: "Луганська",
    districtUA: "Марківський",
    cityUA: "Марківка",
    areaEN: "Luhanska",
    districtEN: "Markivskyi",
    cityEN: "Markivka",
  },
  {
    id: "dd61d414-3c6a-414d-8d6c-32b8cd1ce7eb",
    areaUA: "Одеська",
    districtUA: "Ширяївський",
    cityUA: "Ширяєве",
    areaEN: "Odeska",
    districtEN: "Shyriaivskyi",
    cityEN: "Shyriaieve",
  },
  {
    id: "ddb3ba35-a459-43d9-a2d9-73e06f1b6a7a",
    areaUA: "Херсонська",
    districtUA: "Великоолександрівський",
    cityUA: "Велика Олександрівка",
    areaEN: "Khersonska",
    districtEN: "Velykooleksandrivskyi",
    cityEN: "Velyka Oleksandrivka",
  },
  {
    id: "df5f29fc-7bdf-4acd-bd00-fcbb256dbbad",
    areaUA: "Кіровоградська",
    districtUA: "Бобринецький",
    cityUA: "Бобринець",
    areaEN: "Kirovohradska",
    districtEN: "Bobrynetskyi",
    cityEN: "Bobrynets",
  },
  {
    id: "df68658c-66b0-48c9-bb53-135fe66a5607",
    areaUA: "Херсонська",
    districtUA: "Бериславський",
    cityUA: "Берислав",
    areaEN: "Khersonska",
    districtEN: "Beryslavskyi",
    cityEN: "Beryslav",
  },
  {
    id: "df871e1b-fcc9-4ccc-a62a-68cef57487cb",
    areaUA: "Вінницька",
    districtUA: "Вінницький",
    cityUA: "Лука-Мелешківська",
    areaEN: "Vinnytska",
    districtEN: "Vinnytskyi",
    cityEN: "Luka-Meleshkivska",
  },
];

const App = () => {
  const [lang, setLang] = useState("ukrainski");

  const propCity = lang === "ukrainski" ? "cityUA" : "cityEN";
  const propArea = lang === "ukrainski" ? "areaUA" : "areaEN";
  const propDistrict = lang === "ukrainski" ? "districtUA" : "districtEN";

  const listItems = locations.map((location) => ({
    id: location.id,
    [propCity]: location[propCity],
    [propArea]: location[propArea],
    [propDistrict]: location[propDistrict],
  }));

  console.log(listItems);
  return (
    <>
      <div onClick={() => setLang("english")}>EN</div>
      <div onClick={() => setLang("ukrainski")}>UK</div>
      <div>
        {locations.map((item) => (
          <>
            <li>{item.id}</li>
            <li>{item[propCity]}</li>
            <li>{item[propArea]}</li>
            <li>{item[propDistrict]}</li>
          </>
        ))}
      </div>
    </>
  );
};

export default App;

import male1 from "../assets/male1.png";
import male2 from "../assets/male2.png";
import male3 from "../assets/male3.png";
import male4 from "../assets/male4.png";
import maleTest from "../assets/maletest.png"

export default function TestimonyCard() {
  const testimonials = [
    {
      id: 1,
      name: "John Smork - A trusted and happy Meal-Helper User!",
      info: `"I found out about Meal-Helper and lost 10 KG! Now I'm a fit over 40 male in amazing condition, and this site is what I refer to several times a day, ensuring that I eat properly and check my macros."`,
      img: maleTest,
    },
    {
      id: 2,
      name: "Raahim Waqar - A trusted and happy Meal-Helper User!",
      info: `"I was very skinny and shaggy, all my friends called me scrawny and a wimp, until I found out about Meal-Helper. This website helped me gain 5 KG, helping me plan my meals and allowing me to check the macros of the food I was eating! 10/10 website!"`,
      img: male2,
    },
    {
      id: 3,
      name: "Abdul Moiz Narejo - A trusted and happy Meal-Helper User!",
      info: `"I was very fat and chubby, and very upset with my body, until I came to know about Meal-Helper. This website helped me lose ALOT of weight, I may still look overweight, but I am way happier then I was before! This website helped me track down the macros of the food I was eating, letting me plan my weekly meals, I Love this website!!!"`,
      img: male3,
    },
    {
      id: 4,
      name: "Saud Zulfiqar - A trusted and happy Meal-Helper User!",
      info: `"Althought it might not look like it, my face was very chubby, until I found Meal-Helper. Because of this website, from looking like a monstrosity with 2 chins. I now look like the man I was supposed to be! This website really helped me in finding the right macros from the meals I was eating to help me lose weight on my face!"`,
      img: male4,
    },
  ];

  return (
    <div className="testimony-card cards">
      {testimonials.map((testimony) => (
        <div className="testimony-id ids" key={testimony.id}>
          <img className="testimony-image images" src={testimony.img} alt="Image" />
          <p className="testimony-info">{testimony.info}</p>
          <h5 className="testimony-name">{testimony.name}</h5>
        </div>
      ))}
    </div>
  );
}

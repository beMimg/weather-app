export const curiosities = [
  "Strangest Rain: In some parts of the world, it can rain animals. This phenomenon, known as 'animal rain,' occurs when small creatures like fish or frogs fall from the sky during a rainstorm.",
  'Weather on Other Planets: The weather on Venus is incredibly harsh. It has a constant temperature of around 900°F (475°C) due to its thick, toxic atmosphere, which traps heat.',
  'Green Flash at Sunset: Under the right atmospheric conditions, you can witness a rare optical phenomenon known as the "green flash" just as the sun sets. It appears as a green spot for a few seconds above the upper rim of the sun.',
  'Thunder Snow: Thunderstorms can occur during snowfall, creating a unique phenomenon known as "thundersnow." Lightning during a snowstorm can be quite a sight!',
  'Weather and Mood: Many people believe that weather can affect their mood. Some experience increased happiness and energy on sunny days, while others feel more relaxed during a gentle rain.',
  'Microclimates: Even within a small area, there can be distinct microclimates. For example, a city may have cooler temperatures in parks and green spaces due to the urban heat island effect.',
  'Temperature Inversion: In some cases, temperature can increase with altitude, which is called a temperature inversion. This phenomenon can trap pollution close to the ground and lead to poor air quality.',
  'Drought and Civilization: Throughout history, droughts have played a significant role in the rise and fall of civilizations. They can lead to crop failure, food shortages, and social unrest.',
  'Extreme Temperature Swings: In 1972, the town of Loma, Montana, experienced the most dramatic temperature change ever recorded in a 24-hour period. The temperature plummeted from 103°F (39.4°C) to -54°F (-47.8°C)!',
];

const randomCuriosity = document.getElementById('random_curiosity');
let curiosityCount = 0;

export function displayCuriosity() {
  setInterval(() => {
    curiosityCount++;
    if (curiosityCount > curiosities.length - 1) {
      curiosityCount = 0;
    }
    randomCuriosity.textContent = `${curiosities[curiosityCount]}`;
  }, 6000);
}

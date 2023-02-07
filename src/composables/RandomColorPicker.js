import { ref } from "vue";
export function RandomColorPicker() {
    const colors = ref(["green", "yellow", "blue", "pink"]);
      let message = ref("Pick a color...");
      const matchColor = (value) => {
        // do a random color based on the array index;
        const randomNumber = Math.floor(Math.random() * 3) + 1; //between 1 - 4
        if (colors.value[randomNumber] === value) {
          message.value = `You win... [answer: ${colors.value[randomNumber]}]`;
          return;
        }
        message.value = `You lose [answer: ${colors.value[randomNumber]}]`;
      };
      return { colors, message, matchColor };
}




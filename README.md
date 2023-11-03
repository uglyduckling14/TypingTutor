# Assn4

## Typing Tutor

### Requirements:

Prompt:
    - Follows along with user as they type with underline or some other indicator
    - Next one is displayed when user finishes first one.
    - Does not move on until user gives the correct input.

Keyboard:
    - Keyboard button moves down when pressed by user
    - Shift keys change values of other keys + lose color
    - The key that user needs to press changes color based on the needed letter

### Pseudocode:
Prompt:
    has a list of prompts (at least 10)
    if user finishes typing the first prompt:
        if this is the last prompt:
            generate first one
        generate next one
    while(userinput != prompt letter):
        don't move the cursor thingy
    move cursor onto next letter
    needs to use state to keep track of which letter we are on and potentially which prompt

Keyboard:
    hook up keyboard to vite??

### Hints:

window.addEventListener("keydown", (e) => {
  if (e.repeat) return; // keydown event trigger rapidly if you hold the key, we only want to detect keydown once.
  console.log(e.key + " was pressed!")
});

window.addEventListener("keyup", (e) => {
  console.log(e.key + " was lifted!")
});


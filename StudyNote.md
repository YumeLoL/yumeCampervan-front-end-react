### Styling Hint

- <strong>overflow-hidden</strong>
  If you are trying to hide absolute positioned elements make sure the container of those absolute positioned elements is relatively positioned.
  To make sure the positioned image to be full hight:
  <code>html, body, #root {width: 100%; height: 100%;</code>

### Knowledge Points

- Redux Toolkit

### Toolkits

- react-burger-menu
- react-responsive
- fontawesome icon
- react-calendar
- (reusable) marginer component of vertical and horizontal distance

### Issues fix

- Import issues
  > Try `npm i --save-dev @types/react-burger-menu` if it exists or add a new declaration (.d.ts) file containing `declare module 'react-burger-menu';`

<strong>To Fix: add a new declaration (.d.ts) file (src/typings/react-burger-menu.d.ts)
<code>declare module 'react-burger-menu';</code>

### Install

- <code>yarn create-react-app my-app --template redux-typescript</code>
- Tailwind v3
- Library Install:
  <code>styled-components twin.macro react-responsive</code>
- Burger Memu
  <code>yarn add react-burger-menu</code>

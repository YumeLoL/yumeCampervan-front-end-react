### Knowledge Points
#### TypeScript in React
-
#### How to use useNavigate() to pass parameters 
- <code>const navigate = useNavigate()</code>
  <code>onClick={() => navigate("/campervans", { state:{ location, date, sleep}})}</code>
- <code> const location = useLocation()</code>
  <code> console.log(location.state)</code> // params passed from 'navigate' stored in 'location.state'
#### Styling Hint

- <strong>overflow-hidden</strong>
  If you are trying to hide absolute positioned elements make sure the container of those absolute positioned elements is relatively positioned.
  To make sure the positioned image to be full hight:
  <code>html, body, #root {width: 100%; height: 100%;</code>

- tw style stock components must has "className", otherwise it wont be able to overwrite to the actual components.



### Toolkits

- react-burger-menu
- react-responsive
- fontawesome icon
- react-calendar
  <strong>Update:</strong> remove react-calendar, install react-date-range instead.
- Carousel: @brainhubeu/react-carousel  
https://github.com/brainhubeu/react-carousel   
Plugins documentation: https://brainhubeu.github.io/react-carousel/docs/examples/multipleSlides
- (reusable) marginer component of vertical and horizontal distance

### Issues fix

- Import issues
  > Try `npm i --save-dev @types/react-burger-menu` if it exists or add a new declaration (.d.ts) file containing `declare module 'react-burger-menu';`

<strong>To Fix: add a new declaration (.d.ts) file (src/typings/react-burger-menu.d.ts)
<code>declare module 'react-burger-menu';</code>
<code>declare module "*.jpg" </code> as well

### Install

- <code>yarn create-react-app my-app --template redux-typescript</code>
- Tailwind v3
- Library Install:
  <code>styled-components twin.macro react-responsive</code>
- Burger Memu
  <code>yarn add react-burger-menu</code>
- install json.server 

### Start project
- json-server 
  <code>yarn json-server --watch src/data/db.json --port 4000

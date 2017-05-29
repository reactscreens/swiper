## Swiper

This is one of our open source screens from [React Screens](https://gumroad.com/l/prereactscreens). If you like the work we do, consider subscribing :)

Read [the blog post]() on how this was made if you need any help.

### Swiper

```js
import Swiper from '@reactscreens/swiper';

//Use our default card and actions if you like
import Card from '@reactscreens/swiper/card';
import Actions from '@reactscreens/swiper/actions';


...

export default () => (
  <Swiper
    onTossLeft={card => console.log(card, 'tossed left')}
    onTossRight={card => console.log(card, 'tossed right')}
    actionsBar={toss => <Actions toss={toss} />}
  >
    <Card
      image="http://betterjs.org/www/images/tweets_js_love/last_thing_you_gonna_see.jpg"
      title="Bob, 20"
      subTitle="Engineer"
    />
    <Card
      image="http://betterjs.org/www/images/tweets_js_love/last_thing_you_gonna_see.jpg"
      title="James, 20"
      subTitle="Engineer"
    />
    <Card
      image="https://scontent-mia1-1.xx.fbcdn.net/v/t31.0-8/12525677_951915328178313_3843304291619308173_o.jpg?oh=04ad477ea548b7d267d59aac4d3763a6&amp;oe=59B44E26"
      title="Dominic, 20"
      subTitle="Engineer"
    />
  </Swiper>
)
```

More information coming soon!

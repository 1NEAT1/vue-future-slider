# Vue Future Slider

## Props

### Passing Setting Props

```html
<div class="container">
    <h1>Vue Future Slider</h1>
    <div class="slider">
        <future-slider
                :items="images"
                :arrows="true"
                :autoplay="true"
                :autoplay-speed="3000"/>
    </div>
</div>
```

### Passing Settings Object by <code>v-bind</code>

```html
<div class="container">
    <h1>Vue Future Slider</h1>
    <div class="slider">
        <future-slider :items="images" v-bind="settings"/>
    </div>
</div>
```

```js
export default {
    name: 'App',
    data: function () {
        return {
            images: [
                {image: 'https://dummyimage.com/1000x500/000/fff'},
                {image: 'https://dummyimage.com/1000x500/000e4f/000000'},
                {image: 'https://dummyimage.com/1000x500/121e1f/000000'},
                {image: 'https://dummyimage.com/1000x500/121e1f/b00000'}
            ],
            settings: {
                autoplay: true,
                autoplaySpeed: 3000,
                arrows: true
            }
        }
    }
}
```

## All props

| Prop name     | Description                    | Type    | Values | Default | Min | Max |
|---------------|--------------------------------|---------|--------|---------|-----|-----|
| items         | list with images               | object  | -      | {}      | -   | -   |
| field         | name field in list images      | string  | -      | image   | -   | -   |
| arrows        | enables prev/next arrows       | boolean | -      | true    | -   | -   |
| autoplay      | enables autoplay               | boolean | -      | false   | -   | -   |
| autoplaySpeed | autoplay speed in milliseconds | number  | -      | 3000    | 500 | -   |
| slidesToShow  | number of slides to show       | number  | -      | 1       | 1   | -   |
| speed         | slider scrolling in seconds    | number  | -      | 0.5     | 1   | -   |
| loadingByOne  | uploading images one by one    | boolean | -      | false   | -   | -   |

## Slots

### Customizing Arrows

```html
<div class="container">
    <h1>Vue Future Slider</h1>
    <div class="slider">
        <future-slider :items="images">

            <template slot="arrow-left">
                <!-- div, img or svg -->
            </template>

            <template slot="arrow-right">
                <!-- div, img or svg -->
            </template>

        </future-slider>
    </div>
</div>
```



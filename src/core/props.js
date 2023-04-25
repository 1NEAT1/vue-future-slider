export const props = {
    items: {
        type: [Array, Object],
        default: () => ([])
    },
    field: {
        type: String,
        default: 'image'
    },
    autoplay: {
        type: Boolean,
        default: false
    },
    autoplaySpeed: {
        type: Number,
        default: 3000,
        validator: function (value) {
            return value > 500
        }
    },
    arrows: {
        type: Boolean,
        default: true
    },
    slideToShow: {
        type: Number,
        default: 1,
        validator: function (value) {
            return value >= 1
        }
    },
    speed: {
        type: Number,
        default: 0.5,
        validator: function (value) {
            return value >= 0.1
        }
    },
    loadingByOne: {
        type: Boolean,
        default: false,
    }
}
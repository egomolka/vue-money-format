# vue-money-format

A Vue component that formats currency.

This uses Intl.NumberFormat: 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat

## Description

This is a lightweight display component for localized currency display. It has no dependencies. 
It supports both float and integer input, and can adjust for values stored as decimal-based subunits, such as cents, dirham, groszy, etc. 
Storing currency values in terms of the subunit allows you to store integers, rather than floating numbers, which ensures accuracy. 

Many libraries, such as the Ruby Money and Money-Rails gems, expect monetary values to be stored as integers.

## Features

- Supports currency value in super unit or subunit values (input can be $100.00 or 10000 cents)
- Supports localized formatting keyed by BCP 47 language tags
- Suuports currency symbols keyed by ISO 4217 currency codes
- Supports suppression of the subunit display (you can display $100.65 or $101). When the subunit display is suppressed, the value will be rounded prior to display.



## Installation

```js
yarn add vue-money-format
```

### Usage

```html
<template>
  <div>
    <money-format :value="cost" 
      :locale='en' 
      :currency-code='USD' 
      :subunit-value=true 
      :hide-subunits=true>
    </money-format>
  </div>
</template>

<script>
  import {MoneyFormat} from 'v-money-format'

  export default {
    components: {
    money-format: MoneyFormat
    },

    data () {
      return {
        cost: 12345
        }
      }
    }
  }
</script>
```

### Input options

- value: Numerical input (only required input)
- locale: Language and country information, such as 'en' or 'en-US'. Defaults to 'en'
- currency-code: ISO 4217 3-character alpha code in upper or lower case. Defaults to 'USD'
- subunits-value: Set to true if value is denominated in subunits, such as cents. Defaults to false
- hide-subunits: Do not display the subunits. Defaults to false


## References

- Intl.NumberFormat: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat
- BCP 47 localization codes: https://tools.ietf.org/html/bcp47
- ISO 4217 curency codes: https://www.currency-iso.org/en/home/tables/table-a1.html
- Money-Rails gem: https://github.com/RubyMoney/money-rails
- Money gem: https://github.com/Rubymoney/money
- How to handle money and currency conversions: http://www.yacoset.com/how-to-handle-currency-conversions

## License

Copyright (c) 2018 [Ed Gomolka](https://github.com/egomolka). Released under the [MIT license](https://github.com/egomolka/vue-money-format/blob/master/LICENSE).
MIT


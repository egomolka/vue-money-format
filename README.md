# vue-money-format

A Vue component that formats currency.

This uses Intl.NumberFormat: 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat

## Description

This is a lightweight display component for localized currency display. It has no dependences. 
It supports both float and integer input, and can adjust for values stored as decimal-based subunits, such as cents, dirham, groszy, etc. 
Storing currency values in terms of the subunit allows you to store integers, rather than floating numbers, which ensures accuracy. 

Many libraries, such as the Ruby Money and Money-Rails gems, expect monetary values to be stored as integers.

## Features

- Supports currency value in super unit or subunit values (input can be $100.00 or 10000 cents)
- Supports localized formatting keyed by BCP 47 language tags
- Suuports currency symbols keyed by ISO 4217 currency codes
- Supports suppression of the subunit display (you can display $100.65 or $101). When the subunit display is suppressed, the value will be rounded prior to display.
- Defaults to locale='en', currency-code='USD', currency in super units ($100), and subunits will be displayed ($100.00)


## Installation

```js
yarn add vue-money-format
```

### Usage

```html
<template>
  <div>
    <money-format :value="cost" :locale='en' :currency-code='USD' :subunit-value=true :hide-subunits=true></money-format>
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


### References

- Intl.NumberFormat: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat
- BCP 47 localization codes: https://tools.ietf.org/html/bcp47
- ISO 4217 curency codes: https://www.currency-iso.org/en/home/tables/table-a1.html
- Money-Rails gem: https://github.com/RubyMoney/money-rails
- Money gem: https://github.com/Rubymoney/money
- How to handle money and currency conversions: http://www.yacoset.com/how-to-handle-currency-conversions

